import { OverlayContainer } from '@libs/overlay/OverlayContainer';
import './App.scss';
import MainLayer from '@containers/layers/main_layer';

interface AppProps {}

function App({}: AppProps) {
  return (
    <>
      <div className={'app-container '}>
        <MainLayer />
      </div>
      <OverlayContainer />
    </>
  );
}

export default App;
