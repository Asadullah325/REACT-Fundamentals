import React, { useCallback, useEffect, useState, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(password);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, length, numberAllowed, charAllowed]);

  return (
    <div className="flex flex-col items-center h-screen bg-black text-white py-4">
      <div className="w-full max-w-md mx-auto shadow-md px-4 py-2 mt-4 bg-gray-800 rounded-lg">
        <h1 className="text-2xl font-bold mb-2 text-center">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            ref={passwordRef}
            readOnly
            value={password}
            placeholder="Password"
            type="text"
            className="flex-grow px-4 py-2 bg-gray-200 text-black outline-none placeholder-black"
          />
          <button
            onClick={copyPassword}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white"
          >
            Copy
          </button>
        </div>
        <div className="flex justify-between space-x-2 text-sm mb-4">
          <div className="flex items-center space-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center space-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center space-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
