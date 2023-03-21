import PaymentModal from '@containers/modals/payment_modal';
import './App.scss';

interface AppProps {}

function App({}: AppProps) {
  return (
    <>
      <div className={'app-container '}>
        <PaymentModal />
      </div>
    </>
  );
}

export default App;
