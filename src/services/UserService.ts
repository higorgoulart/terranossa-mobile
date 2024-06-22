import AsyncStorage from '@react-native-async-storage/async-storage';
export default class UserService {
    static async addUser(email: string, username: string, password: string) {
        const user = {
            email: email,
            username: username,
            password: password
        };

        return await fetch("https://postgrest-qxy1.onrender.com/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }

    static async getUserByLogin(email: string, password: string): Promise<any> {
        return (await fetch(`https://postgrest-qxy1.onrender.com/users?email=eq.${email}&password=eq.${password}`))
            .json().then((user: any[]) => UserService.mapToUser(user[0]));
    }

    static mapToUser(obj: any): any {

        console.log(obj)
        return obj != null ? {
                "email": obj.email,
                "username": obj.username,
                "password": obj.password
            } : null;
    }

    static async setLoggedUser(user: any) {
        await AsyncStorage.setItem('loggedUser', JSON.stringify(user));
    }

    static async getLoggedUser(): Promise<any> {
        return this.mapToUser(await AsyncStorage.getItem('loggedUser'));
    }

    static async removeLoggedUser() {
        await AsyncStorage.removeItem('loggedUser');
    }
}