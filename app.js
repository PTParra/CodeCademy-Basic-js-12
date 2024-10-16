/*
    TEAM STATS

    We want to create, retrieve, and add information about your favorite sports team. Basketball, 
    soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data 
    structures at your disposal: arrays and objects.

    After we create these data structures in this project, feel free to challenge yourself to gain insights 
    from them. For example, you might want to get the total number of games your team has played, or the 
    average score of all of their games.
*/

const team = {
    _players: [
        {
            firstName: "Jane",
            lastName: "Doe",
            age: 29,
        },
        {
            firstName: "John",
            lastName: "Doe",
            age: 26,
        },
        {
            firstName: "Supana",
            lastName: "Churu",
            age: 23,
        },
    ],

    _games: [
        {
            opponent: "Miriums",
            teamPoints: 30,
            opponentPoints: 10,
        },
        {
            opponent: "Aloe Vera",
            teamPoints: 0,
            opponentPoints: 30,
        },
        {
            opponent: "Lucky Breaks",
            teamPoints: 15,
            opponentPoints: 15,
        },
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        }
        this._players.push(player);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        }
        this._games.push(game);
    }
};
console.log(team.players);

team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

console.log(team.games);

team.addGame('Titans', 100, 98);

console.log(team.games);