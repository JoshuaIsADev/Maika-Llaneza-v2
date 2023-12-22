import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import ButtonsContainer from '../../ui/ButtonsContainer';
import { updateHeadline } from '../../services/apiHeadline';
import MutationFunction from '../../hooks/MutationFunction';
import Label from '../../ui/Label';

function HeadlineRow({ headline }) {
  const { id: headlineId, headlineText, subHeadline, image } = headline;

  const { register, handleSubmit, reset } = useForm();

  const headlineQueryKey = ['headline'];

  const updateMutation = MutationFunction(
    ({ ...data }) => updateHeadline({ ...data }),
    // console.log(contactId),
    () => {
      toast.success('Headline updated');
      // reset();
    },
    headlineQueryKey
  );

  function onSubmit(data) {
    updateMutation.mutate({ headlineId, ...data });
  }

  // function onSubmitImage(data) {
  //   updateMutation.mutate({ image: data.image.at[0] });
  //   console.log(data);
  // }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form type='vertical' onSubmit={handleSubmit(onSubmit, onError)}>
      <Row role='row' type='horizontal'>
        <Label type='info' htmlFor='headlineText'>
          Headline
        </Label>
        <Input
          defaultValue={headlineText}
          id='headlineText'
          {...register('headlineText', {
            required: 'Please a headline',
          })}
        />
      </Row>

      <Row role='row' type='horizontal'>
        <Label type='info' htmlFor='subHeadline'>
          Sub headline
        </Label>
        <Input
          defaultValue={subHeadline}
          id='subHeadline'
          {...register('subHeadline', {
            required: 'Please a sub headline',
          })}
        />
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
    </Form>
  );
}

export default HeadlineRow;
