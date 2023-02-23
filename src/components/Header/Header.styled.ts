import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  padding: 10px;
  height: 70px;

  .today-week {
    font-family: "Poppins", sans-serif;

    span {
      user-select: none;
      color: ${(props) => props.theme.textLightColor};
      margin-right: 20px;
    }

    button {
      cursor: pointer;
      padding: 10px;
      border-radius: 50px;
    }

    .active {
      color: ${(props) => props.theme.textColor};

      button {
        transition: all 0.1s linear;
        border-bottom: 4px solid ${(props) => props.theme.borderColor};
      }
    }
  }

  .temperature {
    user-select: none;
    display: flex;
    justify-content: space-between;
    max-width: 90px;
    width: 100%;

    div {
      font-family: "Poppins", sans-serif;
      background: ${(props) => props.theme.bgTemp};
      border-radius: 30px;
      width: 42px;
      height: 42px;
      color: ${(props) => props.theme.bgTempText};
      justify-content: center;
      align-items: center;
      display: flex;
      cursor: pointer;
    }

    button {
        all: unset;
    }

    .active {
      background: ${(props) => props.theme.bgTempActive};
      color: ${(props) => props.theme.bgTempTextActive};
    }
  }

  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .label {
    background-color: #111;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 26px;
    width: 50px;
    margin-right: 15px;
    transform: scale(1.5);
  }

  .label .ball {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .label .ball {
    transform: translateX(24px);
  }

  .sun {
    padding-top: 2px;
  }

  .moon,
  .sun {
    color: ${(props) => props.theme.bgIcon};
  }

  .toggle-theme {
    @media (max-width: 768px) {
      position: absolute;
      top: 30px;
      right: 20px;
    }
  }
`;

export default StyledHeader;
