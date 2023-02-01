
import { createSlice } from '@reduxjs/toolkit'


export const tabSlice = createSlice({
    name: "tab",
    initialState: {
        selectedTab: ""
    } ,
    reducers: {
        setSelectedTab: (state, action) => {
            state.selectedTab = action.payload;
        }
    }
});

export const { setSelectedTab } = tabSlice.actions;

export const selectSelectedTab = state => state.tab.selectedTab;


export default tabSlice.reducer;



