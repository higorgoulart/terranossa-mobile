let team = [
    {
      id: 1,
      name: "Higor Goulart",
      city: "Treviso",
      number: "(48) 99999-9999",
      email: "email@gmail.com",
      permission: 2,
    },
    {
      id: 2,
      name: "Eduardo Freitas",
      city: "Criciúma",
      number: "(48) 99999-9999",
      email: "email@gmail.com",
      permission: 2,
    },
    {
      id: 3,
      name: "Guilherme Sávio",
      city: "Cocal do Sul",
      number: "(48) 99999-9999",
      email: "email@gmail.com",
      permission: 1,
    },
    {
      id: 4,
      name: "Sofia Martins",
      city: "Criciúma",
      number: "(48) 99999-9999",
      email: "email@gmail.com",
      permission: 1,
    },
  ];

export default class TeamService {
    static async getTeam() {
        return await team;
    }

    static async deletePerson(id) {
        team = team.filter((p) => p.id !== id);
        return team
    }

    static async updateForm(form) {
      const team = await this.getTeam()
      const index = team.findIndex(p => p.id == form.id);
      team[index] = form
    }

    static async addPerson() {
      const team = await this.getTeam() 
      team.push({
        id: team.length + 1,
        name: "",
        city: "",
        number: "",
        email: "",
        permission: 2,
      })
    }
}