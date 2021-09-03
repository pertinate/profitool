import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";
import { RootState } from "../store";

interface UserProfile {
    roleName: string,
    manager: string;
}

interface ReducerState {
    value: UserProfile;
}

const initialState: ReducerState = {
    value: {
        roleName: '',
        manager: ''
    },
};

export const userProfileSlice = createSlice({
    name: "authView",
    initialState,
    reducers: {
        changeProfileState: (state, action: PayloadAction<UserProfile>) => {
            state.value = action.payload;
        },
    },
});

export const { changeProfileState } = userProfileSlice.actions;

export const selectUserProfile = (state: RootState) => state.authView.value;

export default userProfileSlice.reducer;
