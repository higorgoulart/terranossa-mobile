import { createContext } from 'react';

const DayActivityContext = createContext({
    dayActivities: [],
    setDayActivities: (dayActivities) => {}
});

export default DayActivityContext;