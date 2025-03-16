import React from "react";
import Card from "./components/Card";

const App = () => {

  let myObj = {
    channel: "Codevolution",
    title: "Tailwind Props",
    image: "card-image.webp",
    No: 4,
    year: 2025,
  };

  let myObj2 = {
    channel: "Second Channel",
    title: "Tailwind Props",
    image: "card2.jpeg",
    No: 6,
    year: 2022,
  };

  return (
    <>
      <Card {...myObj} />
      <Card {...myObj2} />
    </>
  );
};

export default App;
