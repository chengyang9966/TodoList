import './App.css';
import Routes from './routes';
import ThemeWrapper from './Context';
import {useEffect} from 'react';
function App({hideLoader}) {
  // eslint-disable-next-line
  useEffect(hideLoader, []);
  return (
    <ThemeWrapper >
    <div id="app" className="light-theme">
      <Routes/>
    </div>
    </ThemeWrapper>
  );
}

export default App;
