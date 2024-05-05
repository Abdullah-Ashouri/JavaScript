const team = {
    _players: [{
        firstName: 'A',
        lastName: 'B',
        age: 23,
    },
    {
        firstName: 'S',
        lastName: 'D',
        age: 50,
    },
    {
        firstName: 'F',
        lastName: 'G',
        age: 20,
    }
    ],
    _games: [{
        opponent: 'AV',
        teamPoints: 4,
        opponentPoints: 3
    },
    {
        opponent: 'AO',
        teamPoints: 2,
        opponentPoints: 8
    },
    {
        opponent: 'AH',
        teamPoints: 7,
        opponentPoints: 6
    }
    ],

    get players() {
        return team._players;
    },

    get games() {
        return team._games;
    },

    addPlayer(newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        team._players.push(player);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        team._games.push(game);
    }

}

team.addPlayer("Bugs", "Bunny", 76);
team.addGame('Titans', 5, 9);

console.log(team._games);



