import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Label from '../../ui/Label';
import ButtonsContainer from '../../ui/ButtonsContainer';
import { useForm } from 'react-hook-form';
import { updateContactHeadline } from '../../services/apiContactHeadline';
import toast from 'react-hot-toast';
import MutationFunction from '../../services/MutationFunction';

function ContactHeadlineRow({ contactHeadline }) {
  const { id: contactHeadlineId, headline } = contactHeadline;

  const { register, handleSubmit, reset } = useForm();

  const contactHeadlineQueryKey = ['contactHeadline'];

  const updateMutation = MutationFunction(
    ({ ...data }) => updateContactHeadline({ ...data }),
    // console.log(contactId),
    () => {
      toast.success('Contact headline updated');
      // reset();
    },
    contactHeadlineQueryKey
  );

  function onSubmit(data) {
    updateMutation.mutate({ contactHeadlineId, ...data });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form role='vertical' onSubmit={handleSubmit(onSubmit, onError)}>
      <Row role='row' type='horizontal'>
        <Row role='row' type='horizontal'>
          <Label type='info' htmlFor='headline'>
            Contact headline
          </Label>
          <Column type='input' role='col'>
            <Input
              defaultValue={headline}
              id='headline'
              {...register('headline', {
                required: 'Please enter the headline',
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
      </Row>
    </Form>
  );
}

export default ContactHeadlineRow;
