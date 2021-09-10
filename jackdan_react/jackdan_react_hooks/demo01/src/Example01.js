import React, { useState } from 'react';

// let showSex = true;

function Example01() {
  const [age, setAge] = useState(26);
  /**
   * Error: 
   * React Hook "useState" is called conditionally. 
   * React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks
   */
  // if(showSex) {
  //   const [sex, setSex] = useState('男');
  //   showSex = false;
  // }
  
  const [work, setWork] = useState('前端');
  const [sex, setSex] = useState('男');


  return (
    <div>
      <p>今年: {age}岁</p>
      <p>性别: {sex}</p>
      <p>工作: {work}</p>
    </div>
  )
}

export default Example01;