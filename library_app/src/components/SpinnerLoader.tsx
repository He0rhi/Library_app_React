import React from 'react';

const SpinnerLoader: React.FC = () => {
  const faces = Array.from({ length: 6 }, (_, index) => (
    <div className={`face${index + 1}`} key={`face-${index + 1}`}></div>
  ));

  return (
    <div className="stage">
      <div className="cubespinner">
        {faces}
      </div>
    </div>
  );
};

export default SpinnerLoader;
