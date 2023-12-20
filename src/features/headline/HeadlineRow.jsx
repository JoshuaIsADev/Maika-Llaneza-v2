import styled from 'styled-components';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import ButtonsContainer from '../../ui/ButtonsContainer';
import FileInput from '../../ui/FileInput';
import { useForm } from 'react-hook-form';

const Img = styled.img`
  object-fit: contain;
  width: 100%;
`;

function HeadlineRow({ headline }) {
  const { register, handleSubmit } = useForm();

  const { headlineText, subHeadline, image } = headline;

  function onSubmit(data) {
    // mutate(data);
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
            <Input defaultValue={headlineText} />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Column type='info' role='col'>
            Sub headline
          </Column>
          <Column type='input' role='col'>
            <Input defaultValue={subHeadline} />
          </Column>
        </Row>

        <Row role='row' type='horizontal' $variation='buttons'>
          <ButtonsContainer>
            <Button $variation='secondary'>Undo</Button>
            <Button $variation='primary'>Save</Button>
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
            <Button type='reset' $variation='secondary'>
              Cancel
            </Button>
            <Button type='submit' $variation='primary'>
              Save
            </Button>
          </ButtonsContainer>
        </Row>
      </Row>
    </Form>
  );
}

export default HeadlineRow;
