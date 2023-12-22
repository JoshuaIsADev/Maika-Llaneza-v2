// import styled, { css } from 'styled-components';
import Label from './Label';
import Error from './Error';
import Row from './Row';

function FormRow({ label, error, children }) {
  return (
    <Row role='row' type='horizontal'>
      {label && (
        <Label type='info' htmlFor={children.props.id}>
          {label}
        </Label>
      )}

      {error && <Error>{error}</Error>}
      {children}
    </Row>
  );
}

export default FormRow;
