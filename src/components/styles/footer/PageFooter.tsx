import styled from "styled-components";

const PageFooterStyle = styled.div`
  margin-top: auto;
  width: fill;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 1rem 1rem;
  animation: fade-in 1s;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default PageFooterStyle;
