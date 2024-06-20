import React, { useState } from 'react';
import { Link } from 'expo-router';
import PageTitle from '../../components/PageTitle';
import InfoCard from '../../components/InfoCard';
import { ScrollView, View, TextInput, Text, TouchableOpacity } from 'react-native';
import PlantingInfoService from '../../services/PlantingInfoService';

export function PlantingInfo() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSearch = async (text) => {
        setSearchText(text);
        if (text) {
            try {
                const results = await PlantingInfoService.getPlantingInfoByName(text);
                setSearchResults(results);
                console.log(results)
            } catch (error) {
                console.error("Erro ao buscar informações:", error);
                setSearchResults([]);
            }
        } else {
            setSearchResults([]);
        }
    };

    const handleSelectItem = (item) => {
        setSelectedItem(item);
        setSearchResults([]);
        setSearchText('');
    };

    return (
        <View className=''>

            <View className='relative'>
                <PageTitle
                    title="Informações para plantio"
                    desc="Verifique informações para o plantio de determinados alimentos ou cadastre novas informações."
                    img={require("src/assets/img/gardening-tools.png")}
                    />

                <View className="my-2.5 px-4">
                    <TextInput
                        className='border border-gray-300 rounded-full px-4 h-9'
                        placeholder="Buscar informações de plantio"
                        value={searchText}
                        onChangeText={handleSearch}
                    />
                    {searchResults.length > 0 && (
                        <View className='border rounded-b-lg border-gray-300 mx-2.5'>
                            {searchResults.map((result, index) => (
                                <TouchableOpacity key={index} onPress={() => handleSelectItem(result)}>
                                    <Text className='p-2 border-b border-gray-300'>
                                        {result.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </View>

                <View className='w-full h-60'>
                    {selectedItem && (
                        <InfoCard
                        name={selectedItem.name} 
                        characteristics={selectedItem.characteristics} 
                        cicle={selectedItem.cicle} 
                        picture={selectedItem.picture} 
                        plantingSeason={selectedItem.plantingSeason} 
                        />
                        )}
                </View>
                
                <View className='fixed top-[30rem] left-[6rem]'>
                    <Link
                            suppressHighlighting
                            className='bg-primary rounded-full py-2.5 px-2.5 text-center font-bold text-base-100 text-inherit'
                            href="/planting-info-register"
                        >
                            Cadastrar novas informações
                    </Link>
                </View>
            </View>
        </View>
    );
}
