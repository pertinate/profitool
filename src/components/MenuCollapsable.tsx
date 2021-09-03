import { Collapse, Divider, MenuItem } from '@blueprintjs/core';
import React, { ReactNode } from 'react';

interface Props {
    main: ReactNode;
    collapsed: (ReactNode)[];
    state: boolean;
}

function MenuCollapsable(props: Props) {

    return (
        <>
            {/* <MenuItem text="Settings..." icon="cog" /> */}
            {props.main}
            <Collapse isOpen={props.state}>
                {
                    props.collapsed.map((menuItem) => {
                        return (
                            <div
                                style={{
                                    display: 'flex'
                                }}
                            >
                                <Divider />
                                {menuItem}
                                {/* <MenuItem icon="tick" text="Save on edit" /> */}
                            </div>
                        );
                    })
                }
                {/* <div
                    style={{
                        display: 'flex'
                    }}
                >
                    <Divider />
                    <MenuItem icon="tick" text="Save on edit" />
                </div>
                <div
                    style={{
                        display: 'flex'
                    }}
                >
                    <Divider />
                    <MenuItem icon="blank" text="Compile on edit" />
                </div> */}
            </Collapse>
        </>
    );
}

export default MenuCollapsable;
