export default class ActivityService {
  static async getAll(): Promise<any[]> {
    return (await fetch("https://postgrest-qxy1.onrender.com/activity")).json().then(activities =>  ActivityService.mapToActivities(activities));
  }

  static async getByDate(date: Date): Promise<any[]> {
    const dateTime = date.toISOString().split('.')[0];

    return (await fetch(`https://postgrest-qxy1.onrender.com/activity?start_date=gte.${dateTime}&end_date=lte.${dateTime}`)).json().then(activities =>  ActivityService.mapToActivities(activities));
  }

  static async getByDates(startDate: Date, lastDate: Date): Promise<any[]> {
    return (await fetch(`https://postgrest-qxy1.onrender.com/activity?start_date=gte.${startDate.toISOString().split('.')[0]}&end_date=lte.${lastDate.toISOString().split('.')[0]}`)).json().then(activities =>  ActivityService.mapToActivities(activities));
  }

  static async hasInDate(date: Date): Promise<boolean> {
    return (await this.getByDate(date)).length > 0;
  }

  static async addActivity(date: Date) {
    const activity = {
      name: '', 
      start_date: date, 
      end_date: date
    };

    await fetch("https://postgrest-qxy1.onrender.com/activity", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(activity)
    });
  }

  static async updateActivity(activity: any) {
    const bdActivity = {
        name: activity.name,
        start_date: activity.startDate,
        end_date: activity.endDate,
        id: activity.id
    }

    await fetch(`https://postgrest-qxy1.onrender.com/activity?id=eq.${activity.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bdActivity)
    });
  }

  static async deleteActivity(activity: any) {
    await fetch(`https://postgrest-qxy1.onrender.com/activity/${activity.id}`, {
      method: 'DELETE'
    });
  }

  static mapToActivities(activities: any[]): any[] {
    return activities.map(activity => {
      return {
        "id": activity.id,
        "name": activity.name,
        "startDate": new Date(activity.start_date),
        "endDate": new Date(activity.end_date)
      };
    });
  }
}

