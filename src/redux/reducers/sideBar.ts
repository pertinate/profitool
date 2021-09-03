import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type SideBarState =
    | "new_entry"
    | undefined;
interface State {
    value: SideBarState;
}

const initialState: State = {
    value: undefined,
};

export const sideBarViewSlice = createSlice({
    name: "sideBar",
    initialState,
    reducers: {
        changeSideBarState: (state, action: PayloadAction<SideBarState>) => {
            state.value = action.payload;
        }
    },
});

export const { changeSideBarState } = sideBarViewSlice.actions;

export const selectSideBarView = (state: RootState) => state.sideBar.value;

export default sideBarViewSlice.reducer;
