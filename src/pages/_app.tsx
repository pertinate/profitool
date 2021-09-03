import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import withRedux, { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import { Auth } from '@supabase/ui';
import { supabase } from '../utils/initSupabase';
import AuthWrapper from '../components/AuthWrapper';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Auth.UserContextProvider supabaseClient={supabase} >
            <Provider store={store}>
                <AuthWrapper>
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
                </AuthWrapper>
            </Provider>
        </Auth.UserContextProvider>
    );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
