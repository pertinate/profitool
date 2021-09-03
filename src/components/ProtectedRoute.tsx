import { Auth, Space, Typography } from '@supabase/ui';
import { useUser } from '@supabase/ui/dist/cjs/components/Auth/UserContext';
import { useRouter } from 'next/dist/client/router';
import React, { ReactNode } from 'react';
import { useAppSelector } from '../redux/hooks';
import { supabase } from '../utils/initSupabase';

function ProtectedRoute(Component: any) {
    console.log(Component);
    return (props: any) => {
        console.log(props);
        const router = useRouter();
        const { user, session } = useUser();
        const { authView, authStatus } = useAppSelector((state) => {
            return {
                authView: state.authView.value,
                authStatus: state.authView.status
            };
        });

        if (typeof window !== 'undefined') {

            if (!user && !authStatus && !session) {
                router.replace('/login');
                return (
                    <Space direction="vertical" size={8}>
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
                            view={authView}
                            socialLayout="vertical"
                            socialButtonSize="xlarge"
                        />
                    </Space>
                );
            } else {
                return <Component {...props} />;
            }
        }
        return null;
    };
}

export default ProtectedRoute;
