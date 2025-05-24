

import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = ({ height = 60, width = 60 }) => {
  return (
    <div className="flex justify-center items-center  fixed inset-0">
      <TailSpin
        height={height}
        width={width}
        color="#ffffff" 
        ariaLabel="loading"
        radius="1"
        visible={true}
      />
    </div>
  );
};

export default Loader;
