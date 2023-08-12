import React, { useEffect, useState } from 'react';

interface CurrentTimeProps {}

const CurrentTimeComponent: React.FC<CurrentTimeProps> = () => {
  const [formattedDate, setFormattedDate] = useState('');
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const updateFormattedDate = () => {
    const currentDate = new Date();

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeekIndex = currentDate.getDay();
    const monthIndex = currentDate.getMonth();

    const dayName = dayNames[dayOfWeekIndex];
    const monthName = monthNames[monthIndex];

    const dayOfMonth = currentDate.getDate();

    const formattedDate = `${dayName}, ${dayOfMonth} ${monthName}`;
    setFormattedDate(formattedDate);
  };

  useEffect(() => {
    updateFormattedDate();
    const id = setInterval(updateFormattedDate, 60000);
    setIntervalId(id);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <p className='lead'>{formattedDate}</p>
  );
};

export default CurrentTimeComponent;
