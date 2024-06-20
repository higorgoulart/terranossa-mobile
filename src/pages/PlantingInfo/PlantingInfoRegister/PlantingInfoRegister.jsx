import React, { useState } from 'react';
import { ScrollView, View, TextInput, Button, Alert } from 'react-native';
import PageTitle from '../../../components/PageTitle';
import PlantingInfoService from '../../../services/PlantingInfoService';
import { useRouter } from 'expo-router'

export function PlantingInfoRegister() {
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [cicle, setCicle] = useState('');
    const [plantingSeason, setPlantingSeason] = useState('');
    const [characteristics, setCharacteristics] = useState('');
    const router = useRouter();
    
    const handleSubmit = async () => {
        try {
            const response = await PlantingInfoService.addPlantingInfo(name, picture, cicle, plantingSeason, characteristics);
            Alert.alert("Sucesso", "Informações de cultivo cadastradas com sucesso.");
            router.push('/planting-info');
        } catch (error) {
            Alert.alert("Erro", "Houve um erro ao cadastrar as informações de cultivo.");
        }
    };

    return (
        <ScrollView>
            <PageTitle
                title="Cadastre novas plantas"
                desc="Cadastre novas informações de cultivo de plantas!"
                img={require("src/assets/img/gardening-tools.png")}
            />
            <View className="p-20">
                <TextInput
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                    className="mb-10 border-2 p-2 rounded"
                />
                <TextInput
                    placeholder="Imagem (URL)"
                    value={picture}
                    onChangeText={setPicture}
                    className="mb-10 border-2 p-2 rounded"
                />
                <TextInput
                    placeholder="Ciclo"
                    value={cicle}
                    onChangeText={setCicle}
                    className="mb-10 border-2 p-2 rounded"
                />
                <TextInput
                    placeholder="Época de Plantio"
                    value={plantingSeason}
                    onChangeText={setPlantingSeason}
                    className="mb-10 border-2 p-2 rounded"
                />
                <TextInput
                    placeholder="Características"
                    value={characteristics}
                    onChangeText={setCharacteristics}
                    className="mb-10 border-2 p-2 rounded"
                />
                <Button
                    title="Cadastrar"
                    onPress={handleSubmit}
                    className="btn btn-primary absolute right-3 bottom-3"
                />
            </View>
        </ScrollView>
    );
}
