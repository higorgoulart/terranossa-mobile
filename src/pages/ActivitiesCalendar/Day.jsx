import { useContext } from 'react'
import CurrentDayContext from './contexts/CurrentDayContext';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Day({ children, date, hasActivity, isHeader = true }) {
  const { setCurrentDay } = useContext(CurrentDayContext);
  const viewClassName = 
    (isHeader ? "bg-primary " : "") +
    (hasActivity ? "bg-secondary " : "") +
    "flex-1 rounded-lg shadow-sm p-2";
  const textClassName = 
    (hasActivity || isHeader ? "text-base-100 " : "") +
    "text-center";

  return date !== undefined
    ? (
        <TouchableOpacity className={viewClassName} onPress={() => setCurrentDay(date)}>
          <Text className={textClassName}>{children}</Text>
        </TouchableOpacity>
      )
    : (
        <View className={viewClassName}>
          <Text className={textClassName}>{children}</Text>
        </View>
      );
}
