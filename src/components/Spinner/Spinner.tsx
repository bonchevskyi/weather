import { Grid } from 'react-loader-spinner';
import StyledSpinner from './Spinner.styled';

function Spinner() {
    return (
        <StyledSpinner>
            <Grid
              height="100"
              width="100"
              color="black"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass=""
              visible
            />
            <span>Loading...</span>
        </StyledSpinner>
    );
}
export default Spinner;
