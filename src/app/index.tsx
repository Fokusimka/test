import { withProviders } from './providers';
import { Routing } from 'pages';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default withProviders(App);
