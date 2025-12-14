import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <h2 className='inline-flex gap-2 items-center'>
      {text1} <span className='text-orange-500'>{text2}</span>
    </h2>
  );
};

export default Title;