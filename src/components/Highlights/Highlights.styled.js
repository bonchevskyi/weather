import styled from "styled-components";

export const StyledHighlights = styled.div`
  h1 {
    font-size: 21px;
    font-weight: 100;
    margin-top: 30px;
    font-family: "Poppins", sans-serif;
    color: ${(props) => props.theme.textColor};
  }

  .highlights_inner {
    color: ${(props) => props.theme.textColor};
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    text-align: center;
    flex-wrap: wrap;
    flex-direction: row;

    @media (min-width: 1700px) {
      height: calc(100vh - (400px));
      margin-top: 60px;
    }

    .box_info {
      position: relative;
      background: ${(props) => props.theme.bgSidebar};
      border-radius: 20px;
      padding: 20px;

      @media (min-width: 768px) {
        margin-left: 1%;
      }

      text-align: left;
      font-size: 17px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      min-height: 158px;
      margin-bottom: 20px;
      flex-basis: 32%;

      @media (max-width: 991px) {
        flex-basis: 48%;
      }
      @media (min-width: 1700px) {
        max-height: 274px;
      }

      .type-info {
        color: ${(props) => props.theme.textLightColor};
        font-size: 15px;
        position: absolute;
        top: 20px;
        font-weight: bold;

        @media (min-width: 1700px) {
          font-size: 20px;
        }
      }

      .info-text {
        line-height: 80px;
      }

      .info-text span {
        font-size: 40px;
        font-weight: bold;
        @media (max-width: 620px) {
          font-size: 30px;
        }
      }

      .emoticons {
        font-size: 16px;
      }

      .icon {
        margin: 10px 0;
      }

      .icon span {
        display: inline-block;
        margin-right: 10px;
        background-color: orange;
        border: 2px solid darkorange;
        width: 30px;
        height: 30px;
        padding: 5px;
        color: #fff;
        border-radius: 50px;
        font-size: 15px;
      }

      .icon-temp_min span {
        display: inline-block;
        margin-top: 30px;
        margin-right: 10px;
        background-color: blue;
        border: 2px solid darkblue;
        width: 30px;
        height: 30px;
        padding: 5px;
        color: #fff;
        border-radius: 50px;
        font-size: 15px;
      }

      .icon-temp_max span {
        display: inline-block;
        margin-top: 30px;
        margin-right: 10px;
        background-color: red;
        border: 2px solid darkred;
        width: 30px;
        height: 30px;
        padding: 5px;
        color: #fff;
        border-radius: 50px;
        font-size: 15px;
      }

      .sunrise {
        margin-top: 30px;
      }

      .icon-h {
        display: inline-block;
        margin-right: 10px;
        background-color: green;
        border: 2px solid darkgreen;
        width: 30px;
        height: 30px;
        padding: 2px;
        color: #fff;
        border-radius: 50px;
        font-size: 21px;
      }

      .icon-v {
        display: inline-block;
        margin-right: 10px;
        background-color: violet;
        border: 2px solid darkviolet;
        width: 30px;
        height: 30px;
        padding: 4px;
        color: #fff;
        border-radius: 50px;
        font-size: 18px;

        @media (max-width: 480px) {
          position: absolute;
          top: 15px;
          right: 8px;
        }
      }

      .icon-p {
        margin-right: 10px;
        background-color: gray;
        border: 2px solid darkgray;
        display: inline-block;
        width: 30px;
        height: 30px;
        padding: 2px;
        color: #fff;
        border-radius: 50px;
        font-size: 21px;

        @media (max-width: 480px) {
          position: absolute;
          top: 15px;
          right: 8px;
        }
      }
    }

    .flex-box {
      margin-top: 25px;
    }
  }
`;
