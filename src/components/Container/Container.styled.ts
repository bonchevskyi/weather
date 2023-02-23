import styled from 'styled-components';

const StyledContainer = styled.div`
  background: ${(props) => props.theme.bgContent};
  padding: 30px;
  height: 100vh;

  @media (min-width: 991px) {
    float: left;
    width: calc(100% - 300px);
  }

  @media (min-width: 1700px) {
    width: calc(100% - 400px);
  }
`;

export default StyledContainer;
