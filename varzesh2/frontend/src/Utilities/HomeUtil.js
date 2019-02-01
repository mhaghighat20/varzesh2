import {SportTypeEnum} from "../SharedComponents/SportType";

export class HomeUtil{
    static getNewGames(sportType){
        let week = new Week();
        week.games = [2, 3];
        week.name = 'هفته ۱۵';

        let league = new League();
        league.weeks = [week];
        league.name = 'لیگ برتر ایران';

        return [league];
    }
}

class League{
    name;
    weeks;
}

class Week{
    name;
    games;
}

class Game{
    status;
    date;
    homeTeam;
    awayTeam;
    homeGoals;
    awayGoals;
}

export const GameStatusEnum = {"homeWin": 1, "draw": 2, "homeLose": 3, "notDoneYet": 4};