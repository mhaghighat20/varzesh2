import {SportTypeEnum} from "../SharedComponents/SportType";

export class PlayerUtil {
    static getPlayerDetails(sport, id){
        if (id === '1' && sport === SportTypeEnum.soccer){
            let player = new PlayerDetails();
            player.name = 'کمال کامیابی نیا';
            player.height = 177;
            player.weight = 80;
            player.age = 29;
            player.currentTeam = 'پرسپولیس';
            player.nationality = 'ایران';
            player.post = 'هافبک دفاعی';
            player.imagePath = '/Content/player_1_soccer.jpg';
            return player;
        }
    }
    static getPlayerStatistics(sport, id){
        if (id === '1' && sport === SportTypeEnum.soccer){
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
        }
    }
    static getPlayerNews(sport, id){
        if (id === '1' && sport === SportTypeEnum.soccer)
            return ['1'];
    }
}

class PlayerDetails{
    imagePath;
    name;
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