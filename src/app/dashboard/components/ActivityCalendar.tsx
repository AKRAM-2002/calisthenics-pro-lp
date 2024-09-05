

export const ActivityCalendar = () => {
    const months = ['July 2021', 'August 2021'];
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Start date</span>
            <span className="text-gray-400 mx-2">→</span>
            <span className="text-gray-600">End date</span>
          </div>
          <div>
            <button className="text-gray-600 mx-2">&lt;</button>
            <button className="text-gray-600 mx-2">&gt;</button>
          </div>
        </div>
        {months.map((month, monthIndex) => (
          <div key={monthIndex} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{month}</h3>
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, dayIndex) => (
                <div key={dayIndex} className="text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
              {[...Array(35)].map((_, i) => (
                <div key={i} className="text-center py-1">
                  <span className={`inline-block w-8 h-8 leading-8 rounded-full ${
                    [14, 16].includes(i + 1) ? 'bg-blue-500 text-white' : ''
                  }`}>
                    {i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };