import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast';

const favSlice = createSlice({
    name: "addtofav",
    initialState: {
        fav: []
    },
    reducers: {
        addfav: (state, action) => {
            const data = state.fav.filter((item) => item.id == action.payload.id)
            if (data.length > 0) {
              toast.error("Product Already Added")
            }
            else {
                state.fav.push(action.payload);
                toast.success("Product Added Successfully")
            }
        },
        removefav: (state, action) => {
            state.fav = state.fav.filter((item) => item.id !== action.payload);
        },
       
    }

})

export const { addfav, removefav} = favSlice.actions;
export default favSlice.reducer

