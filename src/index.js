import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './customRedux/store';
import "./index.css"

// document.addEventListener('DOMContentLoaded', (event) => {
//     document.cookie = "cookieName=cookieValue; Secure; SameSite=None; Partitioned";
// });

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename='/mathsite-frontend'>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
</React.StrictMode>
);


