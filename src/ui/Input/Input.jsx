import styled from "@emotion/styled";
const Container = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 2px 2px;
  border: none;
  background: transparent;
  border-bottom: 1px solid #333;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const StyledLabel = styled.label`
  text-transform: capitalize;
  color: #b8b8bb;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// Using styled components composition:
// const StyledLabel = styled(Text.withComponent("label"))`
//   text-transform: uppercase;
// `;

function Input({ label, ...rest }) {
  return (
    <Container>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput {...rest} />
    </Container>
  );
}

export default Input;
