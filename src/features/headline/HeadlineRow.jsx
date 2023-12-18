import styled from 'styled-components';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import ButtonsContainer from '../../ui/ButtonsContainer';

const Img = styled.img`
  object-fit: contain;
  width: 100%;
`;

function HeadlineRow({ headline }) {
  const { headlineText, subHeadline, image } = headline;

  return (
    <Form role='vertical'>
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
            <Button $variation='primary'>Upload</Button>
          </ButtonsContainer>
        </Row>
      </Row>
    </Form>
  );
}

export default HeadlineRow;
