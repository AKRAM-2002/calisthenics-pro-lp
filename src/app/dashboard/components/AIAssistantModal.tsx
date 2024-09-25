
import {X} from 'lucide-react'
export const AIAssistantModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-96 max-w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Ask Copilot</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Welcome to CALIPRO Copilot</p>
            <p className="text-xs text-gray-500">World&apos;s first AI Assistant for Calisthenics Journey. Your assistant writes personalized workout routines, assigns meal plans, and handles the heavy lifting, allowing you to focus on improving your level in Calisthenics.</p>
          </div>
          <div className="space-y-2">
            <button className="w-full text-left text-sm text-blue-600 hover:bg-blue-50 p-2 rounded-md">
              🏋️ Create new workout plan
            </button>
            <button className="w-full text-left text-sm text-blue-600 hover:bg-blue-50 p-2 rounded-md">
              ✏️ Assist modify workouts
            </button>
            <button className="w-full text-left text-sm text-blue-600 hover:bg-blue-50 p-2 rounded-md">
              ℹ️ Know more
            </button>
            <button className="w-full text-left text-sm text-blue-600 hover:bg-blue-50 p-2 rounded-md">
              💡 Help us be better
            </button>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Type your question here..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    );
  };