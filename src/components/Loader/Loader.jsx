import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Puff
      height="80"
      width="80"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}
    />
  );
};

export default Loader;
