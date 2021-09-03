import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type AuthViewState =
    | "sign_in"
    | "sign_up"
    | "forgotten_password"
    | "magic_link"
    | "update_password"
    | undefined;
type AuthStatusState = 'PASSWORD_RECOVERY' | 'SIGNED_IN' | 'SIGNED_OUT' | 'USER_DELETED' | 'USER_UPDATED' | undefined;
interface State {
    status: AuthStatusState;
    value: AuthViewState;
}

const initialState: State = {
    status: undefined,
    value: "sign_in",
};

export const authViewSlice = createSlice({
    name: "authView",
    initialState,
    reducers: {
        changeAuthValue: (state, action: PayloadAction<AuthViewState>) => {
            state.value = action.payload;
        },
        changeAuthStatus: (state, action: PayloadAction<AuthStatusState>) => {
            state.status = action.payload;
        }
    },
});

export const { changeAuthValue, changeAuthStatus } = authViewSlice.actions;

export const selectAuthView = (state: RootState) => state.sideBar.value;

export default authViewSlice.reducer;
