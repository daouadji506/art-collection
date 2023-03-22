import './App.scss';
import MainLayer from '@containers/layers/main_layer';

interface AppProps {}

function App({}: AppProps) {
  return (
    <>
      <div className={'app-container '}>
        <MainLayer />
      </div>
    </>
  );
}

export default App;
