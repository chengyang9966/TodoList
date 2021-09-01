import './App.css';
import Routes from './routes';
import ThemeWrapper from './Context';
function App() {
  return (
    <div id="app" className="light-theme">
    <ThemeWrapper >
      <Routes/>
    </ThemeWrapper>
    </div>
  );
}

export default App;
