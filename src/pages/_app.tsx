import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import withRedux, { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
                className="bp3-dark"
            >
                <Navbar />
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
