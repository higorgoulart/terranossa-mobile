export default class Utils {
    static removeTime(date: Date) {
        return new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        );
    }
}