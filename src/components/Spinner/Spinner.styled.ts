import styled from 'styled-components';

const StyledSpinner = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  span {
    font-size: 17px;
    font-weight: bold;
    margin: 0 auto;
    padding-top: 20px;
    color: ${(props) => props.theme.textColor};
    font-family: "Poppins", sans-serif;
  }
`;

export default StyledSpinner;
