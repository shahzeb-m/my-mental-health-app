import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { updateQuoteCategoryDB, updateThemeColourDB } from '../api/users';
import { getMoodsDB } from '../api/mood';
import { getGratitudePostsDB } from '../api/gratitudePost';
import { getTodosDB } from '../api/todos';

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

export const getMoods = createAsyncThunk('mood/getMoods', async () => {
  return await getMoodsDB();
});

export const getGratitudePosts = createAsyncThunk(
  'gratitude/getGratitudePosts',
  async () => {
    return await getGratitudePostsDB();
  },
);

export const getTodos = createAsyncThunk('todo/getTodos', async () => {
  return await getTodosDB();
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    app: null,
  },
  reducers: {
    login: (state, action) => {
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
      })
      .addCase(getMoods.fulfilled, (state, action) => {
        state.app = { ...state.app, moods: action.payload };
      })
      .addCase(getGratitudePosts.fulfilled, (state, action) => {
        state.app = { ...state.app, gratitudePosts: action.payload };
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.app = { ...state.app, todos: action.payload };
      }),
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => (state.app ? state.app.user : null);
export const selectThemeColour = (state) =>
  state.app?.user.themeColour || 'default';
export const selectQuoteCategory = (state) => state.app?.user.quoteCategory;
export const selectMoods = (state) => state.app?.moods;
export const selectGratitudePosts = (state) => state.app?.gratitudePosts;
export const selectTodos = (state) => state.app?.todos;
export default userSlice.reducer;
