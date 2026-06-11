import { createSlice } from '@reduxjs/toolkit';
import { phylumsData } from '../FacePhylams/PhylumsData';

const loadFromLocalStorage = () => {
  const data = localStorage.getItem('phylums');
  return data ? JSON.parse(data) : phylumsData;
};

const loadFavorites = () => {
  const data = localStorage.getItem('favorites');
  return data ? JSON.parse(data) : [];
};

const loadShowFavorites = () => {
  const data = localStorage.getItem('showFavorites');
  return data ? JSON.parse(data) : false;
};

const loadSearchTerm = () => {
  const data = localStorage.getItem('searchTerm');
  return data ? data : '';
};

const saveToLocalStorage = (data) => {
  localStorage.setItem('phylums', JSON.stringify(data));
};

const saveFavorites = (data) => {
  localStorage.setItem('favorites', JSON.stringify(data));
};

const saveShowFavorites = (data) => {
  localStorage.setItem('showFavorites', JSON.stringify(data));
};

const saveSearchTerm = (data) => {
  localStorage.setItem('searchTerm', data);
};

const phylumSlice = createSlice({
  name: 'phylums',
  initialState: {
    phylums: loadFromLocalStorage(),
    searchTerm: loadSearchTerm(),
    favorites: loadFavorites(),
    showFavorites: loadShowFavorites(),
  },
  reducers: {
    addPhylum: (state, action) => {
      state.phylums.push(action.payload);
      saveToLocalStorage(state.phylums);
    },
    editPhylum: (state, action) => {
      const index = state.phylums.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.phylums[index] = action.payload;
        saveToLocalStorage(state.phylums);
      }
    },
    deletePhylum: (state, action) => {
      state.phylums = state.phylums.filter(p => p.id !== action.payload);
      saveToLocalStorage(state.phylums);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      saveSearchTerm(state.searchTerm);
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(f => f !== id);
      } else {
        state.favorites.push(id);
      }
      saveFavorites(state.favorites);
    },
    setShowFavorites: (state, action) => {
      state.showFavorites = action.payload;
      saveShowFavorites(state.showFavorites);
    },
  },
});

export const { addPhylum, editPhylum, deletePhylum, setSearchTerm, toggleFavorite, setShowFavorites } = phylumSlice.actions;
export default phylumSlice.reducer;