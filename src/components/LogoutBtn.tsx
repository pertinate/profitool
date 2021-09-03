import { Button, IconLogOut } from '@supabase/ui';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { supabase } from '../utils/initSupabase';

interface Props { }

function LogoutBtn(props: Props) {
    const router = useRouter();

    return (
        <Button
            icon={<IconLogOut />}
            type="secondary"
            onClick={() => {
                supabase.auth.signOut().then(() => {
                    router.replace('/login');
                });
            }}
            style={{
                marginLeft: '0.5rem'
            }}
        >
            Log out
        </Button>
    );
}

export default LogoutBtn;
