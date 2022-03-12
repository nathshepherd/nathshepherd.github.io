import styled from "styled-components";

const SectionHeaderStyle = styled.div`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1.4rem;
  height: min-content;
  width: calc(100% - 4rem);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  animation: fade-in 1s;
  background: linear-gradient(120deg, #9bbfcc 0%, #8ab6c6 100%);
  color: white;
`;

export default SectionHeaderStyle;
