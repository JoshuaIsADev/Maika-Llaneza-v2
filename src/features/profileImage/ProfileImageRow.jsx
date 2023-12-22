import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import ButtonsContainer from '../../ui/ButtonsContainer';
import FileInput from '../../ui/FileInput';
import { useForm } from 'react-hook-form';
import MutationFunction from '../../hooks/MutationFunction';
import toast from 'react-hot-toast';
import { updateProfileImage } from '../../services/apiProfileImage';
import Img from '../../ui/Img';
import Label from '../../ui/Label';

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
        <Label type='info' htmlFor='image'>
          Image
        </Label>
        <Row role='row' type='horizontal' $variation='image'>
          <Img src={image}></Img>
        </Row>
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
          <ButtonsContainer>
            <Button $variation='secondary' type='reset'>
              Cancel
            </Button>
            <Button $variation='primary'>Save</Button>
          </ButtonsContainer>
        </ButtonsContainer>
      </Row>
    </Form>
  );
}

export default ProfileImageRow;
