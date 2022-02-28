import React from 'react';
import { bem } from './utils/bem';
import './app.less';
import { Layout } from './components/Layout';

const classname = bem('app');

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    // <div className={classname()}>
    <Layout />
    // </div>
  );
}

export default App;
