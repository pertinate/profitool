import { GetServerSideProps } from "next";
import { supabase } from "./initSupabase";

export const getAuthProps: GetServerSideProps = async (context) => {
    const { user } = await supabase.auth.api.getUserByCookie(context.req);

    if (!user) {
        return {
            props: {},
            redirect: {
                destination: '/login',
                permanent: false
            }
        };
    }

    const { data: profile, error } = await supabase
        .from('user_data')
        .select('*')
        .eq('user_id', user.id);

    if (!profile || profile.length == 0) {
        return {
            props: {
                user
            },
            redirect: {
                destination: '/',//profile is not finished being set up|not part of oraganization
                permanent: false
            }
        };
    }

    if (profile.length > 1) {
        return {
            props: {},
            redirect: {
                destination: '/',//duplicate|multiple matched profiles on user id
                permanent: false
            }
        };
    }

    return {
        props: {
            user,
            profile: profile[0].data
        }
    };
};
