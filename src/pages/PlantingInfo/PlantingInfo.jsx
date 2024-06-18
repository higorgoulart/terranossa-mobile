import React, { useState } from 'react';
import { Link } from 'expo-router';
import PageTitle from '../../components/PageTitle';
import InfoCard from '../../components/InfoCard';
import { ScrollView, View, TextInput, Text, StyleSheet } from 'react-native';
import PlantingInfoService from '../../services/PlantingInfoService';


export function PlantingInfo() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

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

    return (
        <ScrollView>
            <PageTitle
                title="Informações para plantio"
                desc="Verifique informações para o plantio de determinados alimentos ou cadastre novas informações."
                img={require("src/assets/img/gardening-tools.png")}
            />
            <View className="mt-5 px-4">
                <TextInput
                    className='border border-gray-300 rounded-md px-4 h-9'
                    placeholder="Buscar informações de plantio"
                    value={searchText}
                    onChangeText={handleSearch}
                />
                {searchResults.length > 0 && (
                    <View className='mt-2.5'>
                        {searchResults.map((result, index) => (
                            <Text key={index} className='p-4 border-b border-gray-300'>
                                {result.name}
                            </Text>
                        ))}
                    </View>
                )}
            </View>
            
            <InfoCard name="Cenoura" characteristics="Raízes cilíndricas; Pouco cônicas; Cor laranja claro; Medindo 16 - 18 cm" cicle="90-100 dias" picture="https://www.sementesfeltrin.com.br/UPLarquivos/minis/produtos_166_20220315134434.jpg" plantingSeason="Ano todo"></InfoCard>

            <View className='mt-20'>
                <Link
                    suppressHighlighting
                    className="px-8 h-9 justify-center overflow-hidden rounded-md bg-gray-900 py-2 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/planting-info-register"
                >
                    Cadastrar novas informações
                </Link>
            </View>
        </ScrollView>
    );
}