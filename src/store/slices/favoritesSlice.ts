import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem } from '../../utils/localStorage';
import { STORAGE_KEYS } from '../../constants/storageKeys';

export interface FavoritesState {
  favorites: string[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    initFavorites: state => {
      const storedFavorties = getItem(STORAGE_KEYS.FAVORITES) as string;
      state.favorites = storedFavorties ? JSON.parse(storedFavorties) : [];
    },
    toggleFavorite: (state, { payload }) => {
      if (state.favorites.includes(payload)) {
        state.favorites = state.favorites.filter(
          favorite => favorite !== payload,
        );
      } else {
        state.favorites.push(payload);
      }
      setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(state.favorites));
    },
  },
});

// Action creators are generated for each case reducer function
export const { initFavorites, toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
