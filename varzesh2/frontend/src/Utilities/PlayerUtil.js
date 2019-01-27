import {FetchUtil} from "./FetchUtil";

export class PlayerUtil {
    static getPlayerDetails(id){
        const url = `/api/player/details/${id}/`;
        return FetchUtil.fetchFromUrl(url)
            .then(details => {
                let playerDetails = new PlayerDetails();
                playerDetails.firstName = details['firstName'];
                playerDetails.lastName = details['lastName'];
                playerDetails.age = details['age'];
                playerDetails.height = details['height'];
                playerDetails.weight = details['weight'];
                playerDetails.nationality = details['nationality'];
                playerDetails.post = details['position'];
                playerDetails.currentTeam = details['currentTeam'];
                playerDetails.imagePath = details['imagePath'];

                return playerDetails;
            });
    }
    static getPlayerStatistics(id){
        // TODO implement this method
        if (id === '1'){
            let statistics = [];
            let first = new SoccerPlayerStatistics();
            first.season = '97-98';
            first.assists = 5;
            first.goals = 3;
            first.redCards = 1;
            first.yellowCards = 5;
            statistics.push(first);
            let second = new SoccerPlayerStatistics();
            second.season = '96-97';
            second.yellowCards = 4;
            second.redCards = 2;
            second.goals =5;
            second.assists = 4;
            statistics.push(second);
            return statistics;
        }
        if (id === '2'){
            let statistics = [];
            let first = new SoccerPlayerStatistics();
            first.season = '97-98';
            first.assists = 5;
            first.goals = 3;
            first.redCards = 1;
            first.yellowCards = 5;
            statistics.push(first);
            let second = new SoccerPlayerStatistics();
            second.season = '96-97';
            second.yellowCards = 4;
            second.redCards = 2;
            second.goals =5;
            second.assists = 4;
            statistics.push(second);
            return statistics;
        }
        if (id === '3'){
            let statistics = [];
            let first = new SoccerPlayerStatistics();
            first.season = '97-98';
            first.assists = 5;
            first.goals = 3;
            first.redCards = 1;
            first.yellowCards = 5;
            statistics.push(first);
            let second = new SoccerPlayerStatistics();
            second.season = '96-97';
            second.yellowCards = 4;
            second.redCards = 2;
            second.goals =5;
            second.assists = 4;
            statistics.push(second);
            return statistics;
        }
        if (id === '4'){
            let statistics = [];
            let first = new SoccerPlayerStatistics();
            first.season = '97-98';
            first.assists = 5;
            first.goals = 3;
            first.redCards = 1;
            first.yellowCards = 5;
            statistics.push(first);
            let second = new SoccerPlayerStatistics();
            second.season = '96-97';
            second.yellowCards = 4;
            second.redCards = 2;
            second.goals =5;
            second.assists = 4;
            statistics.push(second);
            return statistics;
        }
    }
    static getPlayerNews(id){
        // TODO implement this method
        if (id === '1')
            return ['1'];
        if (id === '2')
            return ['1'];
        if (id === '3')
            return ['1'];
        if (id === '4')
            return ['1'];
        return null;
    }
    static getPlayerName(playerId){
        // TODO implement this method
        const url = '';
        FetchUtil.fetchFromUrl(url)
            .then();
    }
}

class PlayerDetails{
    imagePath;
    firstName;
    lastName;
    age;
    height;
    weight;
    nationality;
    currentTeam;
    post;
}

class SoccerPlayerStatistics {
    season;
    goals;
    assists;
    yellowCards;
    redCards;
}

class BasketballPlayerStatistics{
    season;
    twoPointThrows;
    threePointThrows;
    fouls;
    rebounds;
    timePlayed;
}