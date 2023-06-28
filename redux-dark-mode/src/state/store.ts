import { configureStore, createSlice } from '@reduxjs/toolkit'


// Define a type for the slice state
interface ThemeState {
  theme: boolean
}

// Define the initial state using that type
const initialState: ThemeState = {
  theme: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMode: (state) => {
      state.theme = !state.theme
    },
   
  },
})

export const { setMode} = themeSlice.actions

export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer
    }
})