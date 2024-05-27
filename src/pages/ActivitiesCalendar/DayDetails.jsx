import React, { useContext, useEffect, useState } from 'react';
import ActivityCard from './ActivityCard';
import CurrentDayContext from './contexts/CurrentDayContext';
import DayActivityContext from './contexts/DayActivityContext';
import ActivityService from '../../services/ActivityService';
import { Button, FlatList, Text, View } from 'react-native';

export default function DayDetails() {
  const { currentDay } = useContext(CurrentDayContext);
  const { dayActivities, setDayActivities } = useContext(DayActivityContext);

  const addActivity = () => {
    ActivityService.addActivity(currentDay);
    setDayActivities(ActivityService.getByDate(currentDay));
  }

  const formatDate = (date) => {
    return date.toLocaleString(undefined, {
      weekday: 'long',
      day: '2-digit'
    })
  }

  return (
    <View className="bg-neutral-100 rounded-lg shadow-md p-4 m-2">
      <Text className="text-xl font-bold text-center">{formatDate(currentDay)}</Text>
      {dayActivities.length > 0 
        ? <FlatList data={dayActivities} renderItem={activity => activity.item != null ? <ActivityCard key={activity.item.key} activity={activity.item} /> : null} />
        : <Text className="text-center py-4">
            Não existem atividades agendadas para esse dia.
          </Text>
      }
      <Button title="Adicionar nova atividade" onPress={addActivity} className="btn btn-primary absolute right-3 bottom-3" />
  </View>
  );
}
