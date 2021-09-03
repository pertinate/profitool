import { Alignment, Button, ButtonGroup, Navbar as BPNavbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core';
import { Auth, IconLogOut, Typography } from '@supabase/ui';
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import { useAppDispatch } from '../redux/hooks';
import { changeAuthValue } from '../redux/reducers/authView';
import fetcher from '../utils/fetcher';

interface Props { }

function Navbar(props: Props) {
    const { user, session } = Auth.useUser();
    const router = useRouter();

    return (
        <BPNavbar
            style={{
                position: 'fixed',
                top: 0
            }}
        >
            <NavbarGroup
                align={Alignment.LEFT}
            >
                <NavbarHeading>
                    <NextLink
                        href="/"
                    >
                        INORYX
                    </NextLink>
                </NavbarHeading>
                <NavbarDivider />
            </NavbarGroup>
            <NavbarGroup>
                <ButtonGroup>
                    <Button
                        onClick={() => router.push('/')}
                    >
                        Home
                    </Button>
                    <Button>
                        Create Organization
                    </Button>
                    <Button>
                        My Organization
                    </Button>
                </ButtonGroup>
            </NavbarGroup>
            {
                user && (
                    <NavbarGroup
                        align="right"
                    >
                        <NavbarDivider />
                        <Typography.Text style={{ color: 'white' }}>Welcome, </Typography.Text>
                        <Typography.Text strong style={{ color: 'white' }}>{user?.user_metadata.full_name}</Typography.Text>
                        <Button
                            icon={<IconLogOut />}
                            onClick={() => {

                            }}
                            style={{
                                marginLeft: '0.5rem'
                            }}
                        >
                            Log out
                        </Button>
                    </NavbarGroup>
                )
            }
        </BPNavbar>
        // <div
        //     style={{
        //         display: 'flex',
        //         background: 'black',
        //         padding: '0.5rem'
        //     }}
        // >
        //     <div
        //         style={{
        //             flexGrow: 0,
        //             flexShrink: 0,
        //             display: 'flex',
        //             alignItems: 'center'
        //         }}
        //     >
        //         <NextLink
        //             href="/"
        //         >
        //             <a>
        //                 <Typography.Title
        //                     style={{
        //                         margin: '0 0',
        //                         color: 'white',
        //                         textAlign: 'center'
        //                     }}
        //                     level={5}
        //                 >INORYX</Typography.Title>
        //             </a>
        //         </NextLink>
        //     </div>
        //     <div
        //         style={{
        //             flexGrow: 1,
        //             flexShrink: 0,
        //             padding: '0 0.5rem',
        //             display: 'flex',
        //             justifyItems: 'center',
        //             alignItems: 'center'
        //         }}
        //     >
        //         <Link
        //             style={{
        //                 margin: '0 0.5rem',
        //                 border: '1px solid white',
        //                 padding: '0.25rem',
        //                 borderRadius: '5px'
        //             }}
        //             href="/"
        //             target="_self"
        //         >
        //             HOME
        //         </Link>
        //         <Link
        //             style={{
        //                 margin: '0 0.5rem',
        //                 border: '1px solid white',
        //                 padding: '0.25rem',
        //                 borderRadius: '5px'
        //             }}
        //             href="/"
        //             target="_self"
        //         >
        //             CREATE ORGANIZATION
        //         </Link>
        //         {
        //             user && (
        //                 <>
        //                     <Link
        //                         style={{
        //                             margin: '0 0.5rem',
        //                             border: '1px solid white',
        //                             padding: '0.25rem',
        //                             borderRadius: '5px'
        //                         }}
        //                         href="/home"
        //                         target="_self"
        //                     >
        //                         MY ORGANIZATION
        //                     </Link>
        //                 </>
        //             )
        //         }
        //     </div>
        //     {
        //         user && (
        //             <div
        //                 style={{
        //                     flexGrow: 0,
        //                     flexShrink: 0
        //                 }}
        //             >

        //             </div>
        //         )
        //     }
        // </div>
    );
}

export default Navbar;
