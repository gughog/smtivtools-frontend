import React from 'react';
import Loader from 'react-loader-spinner';

const DefaultLoading = (): JSX.Element => (
  <Loader
    type="Triangle"
    color="#1978d4"
    height={300}
    width={300}
    visible
  />
);

export default DefaultLoading;
