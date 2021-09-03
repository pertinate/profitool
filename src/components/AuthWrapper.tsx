import { User } from '@supabase/supabase-js';
import { Auth, Space, Typography } from '@supabase/ui';
import { useRouter } from 'next/dist/client/router';
import React, { ReactNode, useEffect, useState } from 'react';
import useSWR from 'swr';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { changeAuthStatus } from '../redux/reducers/authView';
import { changeProfileState } from '../redux/reducers/userProfile';
import fetcher from '../utils/fetcher';
import { supabase } from '../utils/initSupabase';

interface Props {
    children?: ReactNode;
}

function AuthWrapper(props: Props) {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { user, session } = Auth.useUser();
    if (!user && !session) {
        dispatch(changeAuthStatus(undefined));
    }
    console.log(session);

    const { data, error } = useSWR(
        session ? ['/api/user/profile', session.access_token] : null,
        fetcher,
        {
            refreshInterval: 60000
        }
    );
    useEffect(() => {
        dispatch(changeProfileState(data));

        if (data) {
            dispatch(changeAuthStatus('SIGNED_IN'));
        }
    }, [data]);

    useEffect(() => {
        // setTimeout(() => setAuthView('sign_up'), 2000);
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            console.log(">>>>>", event);
            switch (event) {
                case 'PASSWORD_RECOVERY':

                    break;
            }
            dispatch(changeAuthStatus(event));

            fetch('/api/auth', {
                method: 'POST',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                credentials: 'same-origin',
                body: JSON.stringify({ event, session }),
            });
        });
        return () => {
            authListener?.unsubscribe();
        };
    }, []);

    return (
        <>
            {
                props.children
            }
        </>
    );
}

export default AuthWrapper;
