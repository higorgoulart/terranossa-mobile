export default class PlantingInfoService {
    static async addPlantingInfo(name: string, picture: string, cicle: string, plantingSeason: string, characteristics: string) {
        const plantingInfo = {
            name: name,
            picture: picture,
            cicle: cicle,
            planting_season: plantingSeason,
            characteristics: characteristics
        };

        await fetch("https://postgrest-qxy1.onrender.com/planting_info", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(plantingInfo)
        });
    }

    static async getPlantingInfo(name: string): Promise<any[]> {
        return (await fetch("https://postgrest-qxy1.onrender.com/planting_info")).json().then(plantingInfos => PlantingInfoService.mapToPlantingInfo(plantingInfos));
    }

    static mapToPlantingInfo(data: any[]): any[] {
        return data.map(obj => {
            return {
                "name": obj.name,
                "picture": obj.picture,
                "cicle": obj.cicle,
                "plantingSeason": obj.planting_season,
                "characteristics": obj.characteristics
            };
        });
    }


}