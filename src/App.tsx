import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.css';
import useTestStore from './stores/test.store.ts';

function App() {
  const testStoreState = useTestStore((state) => state);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl text-blue-200">Vite + React</h1>
      <div className="card">
        <button type="button" onClick={testStoreState.increase}>
          count is {testStoreState.value}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
