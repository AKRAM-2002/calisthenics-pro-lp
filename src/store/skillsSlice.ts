// skillsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch skills from the API
export const fetchSkills = createAsyncThunk('skills/fetchSkills', async () => {
  const response = await axios.get('/api/skills');
  return response.data;
});
// Async thunk to add a skill to the API
export const addSkillAsync = createAsyncThunk(
  'skills/addSkillAsync',
  async ({ skillName, progressLevel }) => {
    const response = await axios.post('/api/skills', { skillName, progressLevel });
    return response.data; // return the skill from the response
  }
);

// Async thunk to update a skill in the API

export const updateSkillAsync = createAsyncThunk(
  'skills/updateSkillAsync',
  async ({ id, skillName, progressLevel }) => {
    const response = await axios.put(`/api/skills/${id}`, { skillName, progressLevel });
    return response.data; // return the updated skill from the response
  }
);


export const deleteSkillAsync = createAsyncThunk(
  'skills/deleteSkillAsync',
  async (id) => {
    const response = await axios.delete(`/api/skills/${id}`);
    return response.data; 
  }
);
    


const initialState = {
  skills: [], // Array of skills
  isLoading: false,
  error: null,
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    // Remove skill locally; doesn't affect the database
    removeSkill: (state, action) => {
      state.skills = state.skills.filter(skill => skill.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Handling fetchSkills actions
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.isLoading = false;
        state.skills = action.payload;  // Update skills state with API data
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });

    // Handling addSkillAsync actions
    builder
      .addCase(addSkillAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addSkillAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.skills.push(action.payload); // Update the Redux state with the newly added skill
      })
      .addCase(addSkillAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { removeSkill, setLoading, setError } = skillsSlice.actions;
export default skillsSlice.reducer;

