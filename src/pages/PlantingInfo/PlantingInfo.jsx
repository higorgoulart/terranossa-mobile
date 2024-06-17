import React, { useState, useContext, useEffect } from 'react';

import PageTitle from '../../components/PageTitle';
import { ScrollView, View } from 'react-native';


export function PlantingInfo() {
    return (
        <><PageTitle
            title="Informações para plantio"
            desc="Verifique informações de plantio de determinados alimentos ou cadastre novas informações."
            img={require("src/assets/img/gardening-tools.png")} /><ScrollView>
            </ScrollView></>
    );
}