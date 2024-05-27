import { createContext } from 'react';
import Utils from '../../../utils/Utils';

const CurrentDayContext = createContext({
    currentDay: Utils.removeTime(new Date()),
    setCurrentDay: (currentDay) => {}
});

export default CurrentDayContext;