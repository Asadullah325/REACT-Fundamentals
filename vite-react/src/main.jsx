import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return (
//     <>
//       <h1>My App</h1>
//       <p>My app is running!</p>
//     </>
//   );
// }

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click To visit Google",
// };

// const anotherUser = "John Smith";

//  const ReactElement = React.createElement(
//    "a",
//    { href: "https://www.google.com", target: "_blank" },
//   "Click To visit Google",
//   anotherUser
// );

// const anotherElement = (
//   <a href="https://www.google.com" target="_blank">
//     Click To visit Google
//   </a>
// );

createRoot(document.getElementById("root")).render(
   <StrictMode>
     <App />
   </StrictMode>
  // MyApp(),
  // ReactElement,
  //anotherElement
  // ReactElement
);
