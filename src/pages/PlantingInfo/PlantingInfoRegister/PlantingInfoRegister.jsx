import React, { useState } from 'react';
import { ScrollView, View, TextInput, Button, Alert } from 'react-native';
import PageTitle from '../../../components/PageTitle';
import PlantingInfoService from '../../../services/PlantingInfoService';

export function PlantingInfoRegister() {
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [cicle, setCicle] = useState('');
    const [plantingSeason, setPlantingSeason] = useState('');
    const [characteristics, setCharacteristics] = useState('');

    const handleSubmit = async () => {
        try {
            await PlantingInfoService.addPlantingInfo(name, picture, cicle, plantingSeason, characteristics);
            Alert.alert("Sucesso", "Informações de cultivo cadastradas com sucesso!");
            setName('');
            setPicture('');
            setCicle('');
            setPlantingSeason('');
            setCharacteristics('');
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
            <View style={{ padding: 20 }}>
                <TextInput
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                    style={{ marginBottom: 10, borderWidth: 1, padding: 10, borderRadius: 5 }}
                />
                <TextInput
                    placeholder="Imagem (URL)"
                    value={picture}
                    onChangeText={setPicture}
                    style={{ marginBottom: 10, borderWidth: 1, padding: 10, borderRadius: 5 }}
                />
                <TextInput
                    placeholder="Ciclo"
                    value={cicle}
                    onChangeText={setCicle}
                    style={{ marginBottom: 10, borderWidth: 1, padding: 10, borderRadius: 5 }}
                />
                <TextInput
                    placeholder="Época de Plantio"
                    value={plantingSeason}
                    onChangeText={setPlantingSeason}
                    style={{ marginBottom: 10, borderWidth: 1, padding: 10, borderRadius: 5 }}
                />
                <TextInput
                    placeholder="Características"
                    value={characteristics}
                    onChangeText={setCharacteristics}
                    style={{ marginBottom: 10, borderWidth: 1, padding: 10, borderRadius: 5 }}
                />
                <Button title="Cadastrar" onPress={handleSubmit} />
            </View>
        </ScrollView>
    );
}
