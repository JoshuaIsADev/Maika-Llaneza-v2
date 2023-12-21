import styled from 'styled-components';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Form from '../../ui/Form';
import ButtonsContainer from '../../ui/ButtonsContainer';
import FileInput from '../../ui/FileInput';
import { useForm } from 'react-hook-form';
import MutationFunction from '../../services/MutationFunction';
import toast from 'react-hot-toast';
import { updateProfileImage } from '../../services/apiProfileImage';

const Img = styled.img`
  object-fit: contain;
  width: 100%;
`;

function ProfileImageRow(profileImage) {
  const { id: profileImageId, image } = profileImage;

  const { register, handleSubmit, reset } = useForm();

  const profileImageQueryKey = ['profileImage'];

  const updateMutation = MutationFunction(
    (data) => updateProfileImage(data),
    // console.log(contactId),
    () => {
      toast.success('Profile image updated');
      reset();
    },
    profileImageQueryKey
  );

  function onSubmit(data) {
    // updateMutation.mutate({ image: data.image[0] });
    updateMutation.mutate(data.image[0]);
    // console.log(data.image[0]);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Row role='row' type='horizontal'>
        <Column type='info' role='col'>
          Image
        </Column>
        <Column type='input' role='col'>
          <Img src={image}></Img>
        </Column>
      </Row>

      <Row role='row' type='horizontal' $variation='buttons'>
        <ButtonsContainer>
          <FileInput
            id='image'
            accept='image/*'
            {...register('image', {
              required: false,
            })}
          />
          <Button $variation='secondary' type='reset'>
            Cancel
          </Button>
          <Button $variation='primary'>Save</Button>
        </ButtonsContainer>
      </Row>
    </Form>
  );
}

export default ProfileImageRow;
