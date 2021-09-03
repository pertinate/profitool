import { Collapse, Menu, MenuDivider, MenuItem, Divider } from '@blueprintjs/core';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { changeSideBarState, SideBarState } from '../redux/reducers/sideBar';
import MenuCollapsable from './MenuCollapsable';

interface Props { }

function OrganizationSideBar(props: Props) {
    const dispatch = useAppDispatch();

    const { sideBarState } = useAppSelector((state) => {
        return {
            sideBarState: state.sideBar
        };
    });

    console.log(sideBarState);

    const handleClick = (stateName: SideBarState) => {
        dispatch(changeSideBarState(stateName));
    };

    return (
        <Menu>
            <MenuItem icon="new-text-box" active={sideBarState.value == 'new_entry'} onClick={() => handleClick('new_entry')} text="New Entry" />
            <MenuDivider />
            <MenuItem icon="new-object" onClick={() => handleClick(undefined)} text="New object" />
            <MenuItem icon="new-link" onClick={() => handleClick(undefined)} text="New link" />
            <MenuDivider />
            <MenuCollapsable
                main={<MenuItem text="Settings..." icon="cog" />}
                collapsed={[
                    <MenuItem icon="tick" text="Save on edit" />,
                    <MenuItem icon="blank" text="Compile on edit" />
                ]}
                state={true}
            />
        </Menu>
    );
}

export default OrganizationSideBar;
