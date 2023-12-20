import styled from 'styled-components';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import ButtonsContainer from '../../ui/ButtonsContainer';
import FileInput from '../../ui/FileInput';
import { useForm } from 'react-hook-form';
import { updateHeadline } from '../../services/apiHeadline';
import MutationFunction from '../../services/MutationFunction';
import toast from 'react-hot-toast';

const Img = styled.img`
  object-fit: contain;
  width: 100%;
`;

function HeadlineRow({ headline }) {
  const { id: headlineId, headlineText, subHeadline, image } = headline;

  const { register, handleSubmit, reset } = useForm();

  const updateMutation = MutationFunction(
    ({ ...data }) => updateHeadline({ ...data }),
    // console.log(contactId),
    () => {
      toast.success('Headline updated');
      // reset();
    }
    // headlineQueryKey
  );

  function onSubmit(data) {
    updateMutation.mutate({ headlineId, ...data });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form type='vertical' onSubmit={handleSubmit(onSubmit, onError)}>
      <Row role='row' type='horizontal'>
        <Row role='row' type='horizontal'>
          <Column type='info' role='col'>
            Headline
          </Column>
          <Column type='input' role='col'>
            <Input
              defaultValue={headlineText}
              id='headlineText'
              {...register('headlineText', {
                required: 'Please a headline',
              })}
            />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Column type='info' role='col'>
            Sub headline
          </Column>
          <Column type='input' role='col'>
            <Input
              defaultValue={subHeadline}
              id='subHeadline'
              {...register('subHeadline', {
                required: 'Please a sub headline',
              })}
            />
          </Column>
        </Row>

        <Row role='row' type='horizontal' $variation='buttons'>
          <ButtonsContainer>
            <Button $variation='secondary' type='reset'>
              Undo
            </Button>
            <Button $variation='primary' type='submit'>
              Save
            </Button>
          </ButtonsContainer>
        </Row>

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
              type='file'
              {...register('image', {
                required: false,
              })}
            />
            <Button $variation='secondary'>Cancel</Button>
            <Button $variation='primary'>Save</Button>
          </ButtonsContainer>
        </Row>
      </Row>
    </Form>
  );
}

export default HeadlineRow;
