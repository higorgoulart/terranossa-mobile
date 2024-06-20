import { Image, Text, View } from "react-native";

export default function InfoCard({ name, picture, cicle, plantingSeason, characteristics, color='black' }) {
    return (
        // <View className="flex mx-6 mt-4 h-full w-full justify-center overflow-hidden rounded-md bg-gray-900 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
        //     <Text>Aqui</Text>
        // </View>
        <View className="flex flex-row h-full w-full mx-6 mt-4 rounded-md bg-gray-900 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
            {/* <View className="rounded-md bg-gray-900">
                <Image source={{uri: picture}} className="h-[150px] w-[150px]" />
            </View>
            <View className="flex-1 pt-2" style={{ color: color }}>
                <Text className="font-bold text-base-100 text-inherit">{name}</Text>
            </View> */}
        </View>
    );
}
