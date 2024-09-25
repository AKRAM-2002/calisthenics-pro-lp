// store.js
import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from './skillsSlice' 

const store = configureStore({
  reducer: {
    skills: skillsReducer,  // All reducers will be combined here
  },
});

export default store;
