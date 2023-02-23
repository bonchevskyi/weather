import styled from 'styled-components';

const StyledToday = styled.div`
  color: ${(props) => props.theme.textColor};
  margin-top: 20px;

  .box_info {
    text-align: center;
    display: flex;
    background: ${(props) => props.theme.bgSidebar};
    color: ${(props) => props.theme.textColor};
    border-radius: 20px;
    padding: 15px;
    width: 100%;
    font-size: 17px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .temp_info {
      font-size: 18px;
      font-weight: bold;
    }

    img {
      max-width: 80px;
      width: 100%;
      margin: 10px auto;

      @media (max-width: 480px) {
        max-width: 120px;
      }
    }

    .light-text {
      color: ${(props) => props.theme.textLightColor};
    }
  }

  .swiper-wrapper {
    margin: 10px 0px;
  }
`;

export default StyledToday;
