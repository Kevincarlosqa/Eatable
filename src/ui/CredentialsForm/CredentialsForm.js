import styled from "@emotion/styled";

export const CredentialsForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 314px;
  margin: auto;
  padding: 50px 52px 40px 52px;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;
