import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

const withSpinner = wrapperComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <wrapperComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default withSpinner;
