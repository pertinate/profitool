import { Auth, Typography } from '@supabase/ui';
import React, { useState } from 'react';
import { supabase } from '../utils/initSupabase';

interface Props { }

function Login(props: Props) {
    const [authView, setAuthView] = useState('');

    return (
        <div>
            <div>
                <img
                    src="https://app.supabase.io/img/supabase-dark.svg"
                    width="96"
                />
                <Typography.Title level={3}>
                    Welcome to Supabase Auth
                </Typography.Title>
            </div>
            <Auth
                supabaseClient={supabase}
                providers={['google', 'github']}
                view={'sign_in'}
                socialLayout="vertical"
                socialButtonSize="xlarge"
                redirectTo="/home"
            />
        </div>
    );
}



export default Login;
