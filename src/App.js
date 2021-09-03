import './Style/App.css';
import Routes from './routes';
import ThemeWrapper from './Context';
function App() {

  return (
    <ThemeWrapper >
    <div id="app" className="light-theme">
      <Routes/>
    </div>

    </ThemeWrapper>
  );
}

export default App;
