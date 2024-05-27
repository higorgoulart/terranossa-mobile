import React, { useState, useContext, useEffect } from 'react';
import DayDetails from './DayDetails';
import Calendar from './Calendar';
import PageTitle from '../../components/PageTitle';
import CurrentDayContext from './contexts/CurrentDayContext';
import DayActivityContext from './contexts/DayActivityContext';
import ActivityService from '../../services/ActivityService';
import { ScrollView, View } from 'react-native';

export function ActivitiesCalendar() {
  const [currentDay, setCurrentDay] = useState(useContext(CurrentDayContext).currentDay);
  const [dayActivities, setDayActivities] = useState(useContext(DayActivityContext).dayActivities);

  useEffect(() => {
    setDayActivities(ActivityService.getByDate(currentDay));
  }, [currentDay]);
  
  return (
    <CurrentDayContext.Provider value={{currentDay, setCurrentDay}}>
      <DayActivityContext.Provider value={{dayActivities, setDayActivities}}>
        <PageTitle 
          title="Calendário"
          desc="Fique atualizado com as atividades e descubra o que está agendado para os próximos dias."
          img={require("src/assets/img/agenda.png")} />
        <ScrollView className="mt-5">
          <Calendar />
          <DayDetails />
        </ScrollView>
      </DayActivityContext.Provider>
    </CurrentDayContext.Provider>
  );
}
