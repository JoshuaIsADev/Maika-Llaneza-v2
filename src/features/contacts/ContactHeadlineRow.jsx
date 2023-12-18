import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import Form from '../../ui/Form';
import Label from '../../ui/Label';
import ButtonsContainer from '../../ui/ButtonsContainer';

function ContactHeadlineRow({ contactHeadline }) {
  const { headline } = contactHeadline;

  return (
    <Form role='vertical'>
      <Row role='row' type='horizontal'>
        <FormRow role='row' type='horizontal'>
          <Label type='info' htmlFor='headline'>
            Contact headline
          </Label>
          <Column type='input' role='col'>
            <Input defaultValue={headline} id='headline' />
          </Column>
        </FormRow>

        <Row role='row' type='horizontal' $variation='buttons'>
          <ButtonsContainer>
            <Button $variation='secondary' type='reset'>
              Undo
            </Button>
            <Button $variation='primary'>Save</Button>
          </ButtonsContainer>
        </Row>
      </Row>
    </Form>
  );
}

export default ContactHeadlineRow;
