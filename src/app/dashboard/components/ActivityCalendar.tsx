import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Use dynamic import for non-SSR components

const ActivityCalendar = dynamic(() => import('react-activity-calendar'), { ssr: false });

export const ActivityCalendarComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const data = [
    { date: '2021-07-01', count: 3 },
    { date: '2021-07-02', count: 0 },
    { date: '2021-07-03', count: 1 },
    // Add more activity data here for the calendar
  ];

  return (
    isLoaded && (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-2">Activity Calendar</h3>
        <p className="text-sm text-gray-600 mb-4">Track your daily activity. The darker the color, the more activity recorded.</p>
        <ActivityCalendar
          data={data}
          labels={{
            legend: {
              less: 'Less activity',
              more: 'More activity',
            },
          }}
          color="hsl(205, 70%, 50%)"
          blockSize={15}
          blockMargin={5}
          theme={{
            light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
          }}
        />
      </div>
    )
  );
};
