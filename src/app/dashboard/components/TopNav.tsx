import { SignOutButton } from "@clerk/nextjs";

export const TopNav = ({ user }) => {
    const navItems = ['Exercise', 'Workout Plan', 'View Skills', 'Daily Habits'];
  
    return (
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`inline-flex items-center px-6 pt-1 border-b-2 text-sm font-medium ${
                    item === 'Daily Habits'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium mr-4">
                Challenge a Friend
              </button>
              <SignOutButton>
                <button className="text-gray-500 hover:text-gray-700">Sign Out</button>
              </SignOutButton>
              <div className="ml-4 flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };