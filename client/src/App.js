import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { bem } from './utils/bem';
import './app.less';

const classname = bem('app');

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className={classname()}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? 'Loading...' : data}</p>
        <Counter />
      </header>
    </div>
  );
}

export default App;
