// import { useState } from "react";
// export default function Event() {
//  let  [isLike, setLike] = useState(false);

//   let  toggle = () => {
//     setLike(!isLike);
//   };

//   return (
//     <p onClick={toggle}>
//       {isLike  == true ? (<i className="fa-solid fa-thumbs-up"></i>) : (<i className="fa-regular fa-thumbs-up"></i>)}
//     </p>
//   );
// }
let count=0;
// let result=""
function CountClick()
{
    count++;
    // result+=count
    console.log(count)
}
export default function Event()
{
    return(
    <>
        <button onClick={CountClick}>Click me</button>
    </>
    );
}