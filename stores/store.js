import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./tab/tabReducer";

export default configureStore({
    reducer: {
        tab : tabReducer
    }
});
