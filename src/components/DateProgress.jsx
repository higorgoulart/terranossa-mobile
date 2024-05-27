import { Text, View } from "react-native";
import { Bar } from "react-native-progress";

export default function DateProgress({ startDate, endDate }) {
  const now = new Date();
  let progress = 0;

  if (now >= startDate) {
    if (now >= endDate) {
      progress = 70;
    } else {
      const totalDuration = endDate - startDate;
      const elapsedDuration = now - startDate;

      progress = Math.floor((elapsedDuration / totalDuration) * 70);
    }
  }

  const formatDate = (date) => {
    return (
      <Text>
        {date.toLocaleString(undefined, {
          day: '2-digit',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Text>
    );
  }

  return (
    <View className="flex flex-row text-xs">
      {formatDate(startDate)}
      <Bar
        className="w-2/5 mx-2"
        progress={progress}
        width={70}
      />
      {formatDate(endDate)}
    </View>
  );
}