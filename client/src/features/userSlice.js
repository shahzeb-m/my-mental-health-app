import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { updateQuoteCategoryDB, updateThemeColourDB } from '../api/users';

export const updateThemeColour = createAsyncThunk(
  'users/updateThemeColour',
  async (colour) => {
    await updateThemeColourDB(colour);
    return colour;
  },
);

export const updateQuoteCategory = createAsyncThunk(
  'users/updateQuoteCategory',
  async (category) => {
    await updateQuoteCategoryDB(category);
    return category;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    app: null,
  },
  reducers: {
    login: (state, action) => {
      // const colour = await getThemeColour();
      // state.app = { ...action.payload, themeColour: colour };
      state.app = action.payload;
      console.log(state.app);
    },
    logout: (state) => {
      state.app = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(updateThemeColour.fulfilled, (state, action) => {
        state.app.user = { ...state.app.user, themeColour: action.payload };
      })
      .addCase(updateQuoteCategory.fulfilled, (state, action) => {
        state.app.user = { ...state.app.user, quoteCategory: action.payload };
      }),
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => (state.app ? state.app.user : null);
export const selectThemeColour = (state) =>
  state.app?.user.themeColour || 'default';
export const selectQuoteCategory = (state) => state.app?.user.quoteCategory;
export default userSlice.reducer;
