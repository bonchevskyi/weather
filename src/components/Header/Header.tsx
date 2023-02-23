import { IoIosSunny } from 'react-icons/io';
import { RiMoonClearFill } from 'react-icons/ri';
import StyledHeader from './Header.styled';

interface Props {
    nightModeCallback(): void,
    showDaysCallback(enabled: string): void,
    unitTempCallback(): void,
    nightMode: boolean,
    showActive: boolean,
    unitMode: boolean,
}

function Header({
    nightMode,
    nightModeCallback,
    showDaysCallback,
    showActive,
    unitTempCallback,
    unitMode,
}: Props) {
    const enableToday = (enabled) => {
        showDaysCallback(enabled);
    };
    const changedTemp = () => {
        unitTempCallback();
    };
    return (
        <StyledHeader>
            <div className="today-week">
                <span
                  className={`today ${showActive ? 'active' : ''}`}
                >
                    <button type="button" onMouseDown={() => enableToday(true)}>
                        Today
                    </button>
                </span>
                <span
                  className={`week  ${showActive ? '' : 'active'}`}

                >
                    <button type="button" onMouseDown={() => enableToday(false)}>
                        Next 5 Days
                    </button>
                </span>
            </div>
            <div className="temperature">
                <div
                  className={`celsius ${unitMode ? '' : 'active'}`}
                >
                    <button type="button" onMouseDown={() => changedTemp()}>
                        <span className="degree">°</span>
                        {' '}
                        C
                    </button>
                </div>
                <div
                  className={`fahrenheit ${unitMode ? 'active' : ''}`}
                >
                    <button type="button" onMouseDown={() => changedTemp()}>
                        <span className="degree">°</span>
                        {' '}
                        F
                    </button>
                </div>
            </div>
            <div className="toggle-theme">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="chk"
                  checked={nightMode}
                  onChange={nightModeCallback}
                />
                <label className="label" htmlFor="chk">
                    <div className="sun">
                        <IoIosSunny size={15} />
                    </div>
                    <div className="moon">
                        <RiMoonClearFill size={12} />
                    </div>
                    <div className="ball" />
                </label>
            </div>
        </StyledHeader>
    );
}

export default Header;
