import React from 'react';
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 60,
      }}
    >
      <ReactLoading type="bars" color="#1F2428" />
    </div>
  )
};

export default Loader