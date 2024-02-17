import { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import viteLogo from "../public/vite.svg";
import reactLogo from "./assets/react.svg";
// eslint-disable-next-line import/no-unresolved

function App() {
  const [count, setCount] = useState(0);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <div>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <h1>Vite + React</h1>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <div className="card">
        {/* eslint-disable-next-line react/button-has-type,no-shadow,react/react-in-jsx-scope */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <p>
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
