import React, { memo } from 'React';

// const HooksChild = memo((props) => {
//   console.log("child render");
//   return(
//     <div>
//       <h2>Child</h2>
//     </div>
//   )
// });
const HooksChild = (props) => {
  console.log("Child");
  return(
    <div>
      <h2>Child</h2>
    </div>
  )
}