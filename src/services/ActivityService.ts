import Utils from '../utils/Utils';

let activities = [
  {
    id: 1,
    name: 'Plantação',
    startDate: new Date('2023-05-30 10:00'),
    endDate: new Date('2023-06-01 14:00'), 
    editable: false
  },
  {
    id: 2,
    name: 'Colheita',
    startDate: new Date('2023-06-14 10:00'),
    endDate: new Date('2023-06-15 14:00'), 
    editable: false
  },
];

export default class ActivityService {
  static getNextId(): number {
    return Math.max(...activities.map(activity => activity.id)) + 1;
  }

  static getAll() {
    return activities;
  }

  static getByDate(date: Date): any[] {
    const dateTime = date.getTime();

    return activities.filter(activity => {
        const startDate = Utils.removeTime(activity.startDate).getTime();
        const endDate = Utils.removeTime(activity.endDate).getTime();

        return (startDate === dateTime || endDate === dateTime || (startDate < dateTime && endDate > dateTime))
    });
  }

  static hasInDate(date: Date): boolean {
    return this.getByDate(date).length > 0;
  }

  static updateActivity(activity: any): void {
    activities = activities.map((a) => {
      if (a.id === activity.id) {
        return activity;
      }

      return a;
    });
  }

  static addActivity(date: Date): void {
    const activity = {
      id: this.getNextId(),
      name: '', 
      startDate: date, 
      endDate: date, 
      editable: true
    };

    activities = [...activities, activity]
  }

  static deleteActivity(activity: any): void {
    activities.splice(activities.indexOf(activity), 1);
  }
}

