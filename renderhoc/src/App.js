// // import logo from './logo.svg';
// // import './App.css';

// // import {useState, useEffect} from "react";

// // const withMousePosition = (WrappedComponent) => {
// //   return (props) => {

// //     const [mousePosition, setMousePosition] = useState({
// //       x:0,
// //       y:0,
// //     })

// //     useEffect( () => {
// //       const handleMousePositionChange = (e) => {
// //         setMousePosition({
// //           x:e.clientX,
// //           y:e.clientY,
// //         })
// //       }

// //       window.addEventListener("mousemove", handleMousePositionChange);

// //       return () => {
// //         window.removeEventListener("mousemove", handleMousePositionChange)
// //       }

// //     })

// //     return (
// //       <WrappedComponent {...props} mousePosition={mousePosition}/>
// //     )
// //   }
// // }

// // const PanelMouseLogger = ({mousePosition}) => {
// //   if (!mousePosition) {
// //     return null;
// //   }
// //   return (
// //     <div className='BasicTracker'>
// //       <p>Mouse position:</p>
// //       <div className='Row'>
// //         <span>x: {mousePosition.x}</span>
// //         <span>y: {mousePosition.y}</span>
// //       </div>
// //     </div>
// //   );
// // };

// // const PointMouseLogger = ({mousePosition}) => {
// //   if (!mousePosition){
// //     return null;
// //   }
// //   return (
// //     <p>
// //       ({mousePosition.x}, {mousePosition.y})
// //     </p>
// //   );
// // };

// // const PanelMouseTracker = withMousePosition(PanelMouseLogger);
// // const PointMouseTracker = withMousePosition(PointMouseLogger);

// // function App() {
// //   return (
// //     <div className='App'>
// //       <header className='Header'>Little Lemon Restaurant</header>
// //       <PanelMouseTracker/>
// //       <PointMouseTracker/>
// //     </div>
// //   )
// // }

// // export default App;


// import "./App.css";
// import { useEffect, useState } from "react";

// const MousePosition = ({ render }) => {
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const handleMousePositionChange = (e) => {
//       // Use e.clientX and e.clientY to access the mouse position on the screen
//       setMousePosition({
//         x: e.clientX,
//         y:e.clientY,
//       })
//     };

//     window.addEventListener("mousemove", handleMousePositionChange);

//     return () => {
//       window.removeEventListener("mousemove", handleMousePositionChange);
//     };
//   }, []);

//   // What should be returned here?
//   return render(mousePosition);
// };

// // This component should not receive any props
// const PanelMouseLogger = () => {
//   // The below if statement can be removed after the render props pattern is implemented
//   return (
//     <MousePosition render={ mousePosition => 
//       <div className="BasicTracker">
//         <p>Mouse position:</p>
//         <div className="Row">
//           <span>x: {mousePosition.x}</span>
//           <span>y: {mousePosition.y}</span>
//         </div>
//       </div>
//     } />
//   );
// };

// // This component should not receive any props
// const PointMouseLogger = () => {
//   // The below if statement can be removed after the render props pattern is implemented
//   return (
//     <MousePosition render={ mousePosition => 
//       <p>
//         ({mousePosition.x}, {mousePosition.y})
//       </p >
//     } />
//   )
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="Header">Little Lemon Restaurant 🍕</header>
//       <PanelMouseLogger />
//       <PointMouseLogger />
//     </div>
//   );
// }

// export default App;


import "./App.css";
import FeedbackForm from "./FeedbackForm";

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
