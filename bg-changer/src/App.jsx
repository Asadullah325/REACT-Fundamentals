import React, { useState } from "react";

const App = () => {
  const [color, setcolor] = useState("olive");

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className=" w-full h-screen flex justify-center items-center"
      >
        <div className="fixed flex  flex-wrap gap-4 justify-center items-center bottom-2 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button
              onClick={() => setcolor("red")}
              className="px-4 rounded-lg py-1 shadow-md bg-red-500 text-white"
            >
              Red
            </button>
            <button
              onClick={()=> setcolor("green")}
              className="px-4 rounded-lg py-1 shadow-md bg-green-500 text-white"
            >
              Green
            </button>
            <button
              onClick={() => setcolor("blue")}
              className="px-4 rounded-lg py-1 shadow-md bg-blue-500 text-white"
            >
              Blue
            </button>
            <button
              onClick={() => setcolor("black")}
              className="px-4 rounded-lg py-1 shadow-md bg-black text-white"
            >
              Black
            </button>
            <button
              onClick={() => setcolor("white")}
              className="px-4 rounded-lg py-1 shadow-md bg-white text-black border-2 border-black"
            >
              white
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
