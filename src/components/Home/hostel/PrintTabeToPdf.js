// import React from "react";
// import Pdf from "react-to-pdf";
// const ref = React.createRef();
// export default function PrintTabeToPdf() {
//   return (
//     <div>
//       PrintTabeToPdf
//       <Pdf targetRef={ref} filename='jerald-sample.pdf'>
//         {({ toPdf }) => <button onClick={toPdf}>generate pdf</button>}
//       </Pdf>
//       <div ref={ref}>
//         <h1>hello my first pdf</h1>
//         <h2>start with to see some magic</h2>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Pdf from "react-to-pdf";
import Testing from "../Canteen/Testing";
const ref = React.createRef();

export default function PrintTabeToPdf() {
  return (
    <div>
      <Pdf targetRef={ref} filename='sample.pdf'>
        {({ toPdf }) => (
          <div>
            {" "}
            <button className='btn btn-sm' onClick={toPdf}>
              Genarate pdf
            </button>
          </div>
        )}
      </Pdf>
      <div>
        <Testing />
      </div>
    </div>
  );
}
