import React from "react";
import { StyledSpinner } from "./Spinner.styled";
import { Grid } from "react-loader-spinner";
const Spinner = () => (
  <StyledSpinner>
    <Grid
      height="100"
      width="100"
      color="black"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    <span>Loading...</span>
  </StyledSpinner>
);
export default Spinner;
