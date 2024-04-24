import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    value: 0,
    data:{
        firstName:"",
        lastName:"",
        email:"",
        subject:"",
        message:""
        
    }
  },
  reducers: {
   
    setData: (state, action) => {
        state.data = action.payload
      },
  },
})

export const { setData } = weatherSlice.actions

export default weatherSlice.reducer