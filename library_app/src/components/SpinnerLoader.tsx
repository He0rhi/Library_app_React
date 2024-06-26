import React from 'react';

const SpinnerLoader: React.FC = () => {
  return (
    <div className="stage" > 
    <div className="cubespinner"> 
        <div className="face1"></div> 
        <div className="face2"></div> 
        <div className="face3"></div> 
        <div className="face4"></div> 
        <div className="face5"></div> 
        <div className="face6"></div> 
    </div> 
</div>
  );
};

export default SpinnerLoader;
