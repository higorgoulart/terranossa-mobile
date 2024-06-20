import { Image, Text, View } from "react-native";

export default function InfoCard({ name, picture, cicle, plantingSeason, characteristics}) {
    return (
        <View className="mt-5 px-4">
            <View className="h-full px-4 pb-11 rounded-md bg-primary text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                <View className="pt-4 flex-row">
                    <View className="bg-gray-900 h-[100px] w-[100px] inline-block">
                        <Image source={{ uri: picture }} className="h-[100px] w-[100px] rounded-md" />
                    </View>
                    <View className="flex-1 ml-4 inline-block">
                        <View>
                            <Text className="font-bold text-[#f5f5f4] text-2xl">{name}</Text>
                            <Text className="text-base-100 mt-2">{characteristics}</Text>
                        </View>
                    </View>
                </View>
            
                <View className="pt-4">
                    <Text className="font-bold text-[#f5f5f4] text-lg">Ciclo: {cicle}</Text>
                    <Text className="font-bold text-[#f5f5f4] text-lg ">Época para plantio: {plantingSeason}</Text>
                </View>
            </View>
        </View>
    );
}
