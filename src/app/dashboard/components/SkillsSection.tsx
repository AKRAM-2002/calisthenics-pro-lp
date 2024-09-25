import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Plus, ChevronDown, XCircle, Search, Edit, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkills, addSkillAsync, updateSkillAsync, deleteSkillAsync, setError, setLoading } from '../../../store/skillsSlice';

const SkillsSection = () => {
  const [newSkill, setNewSkill] = useState({ name: '', progressLevel: 'Beginner', exercises: [] });
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingSkill, setEditingSkill] = useState(null);

  const dispatch = useDispatch();
  const { skills, loading, error } = useSelector((state) => state.skills);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  const handleAddOrUpdateSkill = () => {
    if (newSkill.name.trim()) {
      if (editingSkill) {
        dispatch(updateSkillAsync({ ...editingSkill, ...newSkill }));
      } else {
        dispatch(addSkillAsync(newSkill));
      }
      setShowModal(false);
      setNewSkill({ name: '', progressLevel: 'Beginner', exercises: [] });
      setEditingSkill(null);
    }
  };

  const handleDeleteSkill = async (skillId: any) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      dispatch(setLoading(true));
      try {
        dispatch(deleteSkillAsync(skillId));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    }
  };

  const handleEditSkill = (skill) => {
    setEditingSkill(skill);
    setNewSkill({
      name: skill.skillName,
      progressLevel: skill.progressLevel,
      exercises: skill.exercises || []
    });
    setShowModal(true);
  };

  const handleAddExercise = () => {
    setNewSkill(prev => ({
      ...prev,
      exercises: [...prev.exercises, { name: '', description: '' }]
    }));
  };

  const handleExerciseChange = (index, field, value) => {
    setNewSkill(prev => {
      const updatedExercises = [...prev.exercises];
      updatedExercises[index] = { ...updatedExercises[index], [field]: value };
      return { ...prev, exercises: updatedExercises };
    });
  };

  const handleRemoveExercise = (index) => {
    setNewSkill(prev => ({
      ...prev,
      exercises: prev.exercises.filter((_, i) => i !== index)
    }));
  };

  const filteredSkills = skills.filter(skill =>
    skill.skillName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
            Exercises
          </button>
          <button className="text-gray-700 hover:text-gray-900 transition-colors duration-300 flex items-center">
            My Library
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center"
        >
          <Plus size={16} className="mr-2" />
          Add Skill
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          <Search className="h-4 w-4" />
        </button>
      </div>

      {loading ? (
        <div className="text-center text-gray-600">Loading skills...</div>
      ) : error ? (
        <div className="text-center text-red-600">Error: {error}</div>
      ) : filteredSkills.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-48 h-48 mb-4 relative">
            <Image
              src="/assets/yellow-dude.png"
              alt="Illustration of a calisthenics athlete"
              width={192}
              height={192}
            />
          </div>
          <p className="text-lg font-medium text-gray-800">No Skills Found</p>
          <p className="text-sm text-gray-500">Try adjusting your search or add a new skill.</p>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skill Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exercises</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-black">
            {filteredSkills.map((skill) => (
              <tr key={skill.id}>
                <td className="px-6 py-4 whitespace-nowrap">{skill.skillName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{skill.progressLevel}</td>
                <td className="px-6 py-4">
                  <ul className="list-disc list-inside">
                    {skill.exercises && skill.exercises.map((exercise, index) => (
                      <li key={index}>{exercise.name}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleEditSkill(skill)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit size={16} />
                  </button>
                  <button onClick={() => handleDeleteSkill(skill.id)} className="text-red-600 hover:text-red-900">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setShowModal(false);
                setEditingSkill(null);
                setNewSkill({ name: '', progressLevel: 'Beginner', exercises: [] });
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <XCircle size={24} />
            </button>
            <h2 className="text-xl font-semibold mb-4">{editingSkill ? 'Edit Skill' : 'Add New Skill'}</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Skill Name</label>
              <input
                type="text"
                value={newSkill.name}
                onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter skill name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Progress Level</label>
              <select
                value={newSkill.progressLevel}
                onChange={(e) => setNewSkill({ ...newSkill, progressLevel: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Exercises</label>
              {newSkill.exercises.map((exercise, index) => (
                <div key={index} className="mb-2 flex items-center">
                  <input
                    type="text"
                    value={exercise.name}
                    onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 mr-2"
                    placeholder="Exercise name"
                  />
                  <button 
                    onClick={() => handleRemoveExercise(index)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <XCircle size={20} />
                  </button>
                </div>
              ))}
              <button 
                onClick={handleAddExercise}
                className="mt-2 text-blue-600 hover:text-blue-800"
              >
                + Add Exercise
              </button>
            </div>

            <button 
              onClick={handleAddOrUpdateSkill}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {editingSkill ? 'Update Skill' : 'Add Skill'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsSection;