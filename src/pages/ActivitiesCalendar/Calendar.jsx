import React, { useState, useEffect } from 'react';
import Day from './Day';
import ActivityService from '../../services/ActivityService';
import { Button, Text, View } from 'react-native';
import Utils from '@/utils/Utils';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weeks, setWeeks] = useState([]);

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  }

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  }

  useEffect(() => {
    const fetchCalendarDays = async () => {
      const generatedWeeks = await renderCalendarDays();
      setWeeks(generatedWeeks);
    };

    fetchCalendarDays();
  }, [currentDate]);

  const renderCalendarDays = async () => {
    let finished = false;
    const weeks = [];
    let weekDays = [];
    const days = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDate = new Date(year, month, 1);
    const firstDay = firstDate.getDay();
    const lastDate = new Date(year, month + 1, 0);
    const lastDay = lastDate.getDate();

    for (let i = 0; i < firstDay; i++) {
      days.push(<Day key={`first-empty-${i}`} isHeader={false} />);
    }

    const activities = await ActivityService.getByDates(firstDate, lastDate);

    for (let i = 1; i <= lastDay; i++) {
      const date = new Date(year, month, i);
      const dateTime = date.getTime();
      
      const hasActivity = activities.some(activity => {
        const startDate = Utils.removeTime(activity.startDate).getTime();
        const endDate = Utils.removeTime(activity.endDate).getTime();

        return (startDate === dateTime || endDate === dateTime || (startDate < dateTime && endDate > dateTime))
      });

      days.push(
        <Day 
          key={dateTime} 
          date={date}
          hasActivity={hasActivity} 
          isHeader={false}
        >
          {i}
        </Day>);
    }

    let lastDaysIndex = 0;
    while (days.length % 7 !== 0) {
      days.push(<Day key={`last-empty-${lastDaysIndex}`} isHeader={false} />);
      lastDaysIndex++;
    }
    
    for (let i = 0; i < days.length; i++) {
      weekDays.push(days[i]);

      if (weekDays.length % 7 === 0) {
        weeks.push(weekDays);
        weekDays = [];
      }
    }

    return weeks;
  }

  return (
    <View className="bg-neutral-100 rounded-lg shadow-md p-4 m-2">
      <View className="flex flex-row justify-between items-center mb-4">
        <Button
          title="Prev"
          onPress={handlePrevMonth}
          className="btn btn-primary"
        />
        <Text className="text-center text-lg font-semibold">
          {currentDate.toLocaleDateString(undefined, {
            month: 'long',
            year: 'numeric',
          })}
        </Text>
        <Button
          title="Next"
          onPress={handleNextMonth}
          className="btn btn-primary"
        />
      </View>
      <View className="flex flex-col">
        <View className="flex flex-row">
          <Day>Dom</Day>
          <Day>Seg</Day>
          <Day>Ter</Day>
          <Day>Qua</Day>
          <Day>Qui</Day>
          <Day>Sex</Day>
          <Day>Sáb</Day>
        </View>
        <View className="flex flex-col">
          {weeks.map((week, index) => (
            <View key={index} className="flex flex-row">
              {week.map(day => day)}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
