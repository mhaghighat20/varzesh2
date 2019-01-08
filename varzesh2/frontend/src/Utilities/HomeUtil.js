import {SportTypeEnum} from "../SharedComponents/SportType";

export class HomeUtil{
    static getNewGames(sportType){
        if (sportType === SportTypeEnum.soccer){
            let game1 = new Game();
            game1.status = GameStatusEnum.homeLose;
            game1.homeTeam = "پیکان";
            game1.awayTeam = "نساجی مازندران";
            game1.date = "پنجشنبه ۱۵ آذر ۱۳۹۷";
            game1.homeGoals = 0;
            game1.awayGoals = 1;
            let game2 = new Game();
            game2.status = GameStatusEnum.homeLose;
            game2.homeTeam = "سپیدرود رشت";
            game2.awayTeam = "استقلال";
            game2.date = "جمعه ۱۶ آذر ۱۳۹۷";
            game2.homeGoals = 0;
            game2.awayGoals = 5;
            let game3 = new Game();
            game3.status = GameStatusEnum.draw;
            game3.homeTeam = "پدیده";
            game3.awayTeam = "ماشین‌سازی تبریز";
            game3.date = "جمعه ۱۶ آذر ۱۳۹۷";
            game3.homeGoals = 2;
            game3.awayGoals = 2;
            let game4 = new Game();
            game4.status = GameStatusEnum.draw;
            game4.homeTeam = "ذوب‌آهن";
            game4.awayTeam = "نفت مسجدسلیمان";
            game4.date = "چهارشنبه ۲۱ آذر ۱۳۹۷";
            game4.homeGoals = 0;
            game4.awayGoals = 0;
            let game5 = new Game();
            game5.status = GameStatusEnum.homeLose;
            game5.homeTeam = "تراکتورسازی";
            game5.awayTeam = "فولاد";
            game5.date = "جمعه ۲۳ آذر ۱۳۹۷";
            game5.homeGoals = 1;
            game5.awayGoals = 2;
            let game6 = new Game();
            game6.status = GameStatusEnum.homeWin;
            game6.homeTeam = "صنعت نفت آبادان";
            game6.awayTeam = "سایپا";
            game6.date = "جمعه ۲۳ آذر ۱۳۹۷";
            game6.homeGoals = 2;
            game6.awayGoals = 1;
            let game7 = new Game();
            game7.status = GameStatusEnum.homeWin;
            game7.homeTeam = "پرسپولیس";
            game7.awayTeam = "پارس جنوبی جم";
            game7.date = "جمعه ۲۳ آذر ۱۳۹۷";
            game7.homeGoals = 3;
            game7.awayGoals = 1;
            let game8 = new Game();
            game8.status = GameStatusEnum.notDoneYet;
            game8.homeTeam = "استقلال خوزستان";
            game8.awayTeam = "سپاهان";
            game8.date = "شنبه ۲۴ آذر ۱۳۹۷";

            let week = new Week();
            week.games = [game1, game2, game3, game4, game5, game6, game7, game8];
            week.name = 'هفته ۱۵';

            let league = new League();
            league.weeks = [week];
            league.name = 'لیگ برتر ایران';

            return [league];
        }
        else if (sportType === SportTypeEnum.basketball){
            let game1 = new Game();
            game1.status = GameStatusEnum.homeLose;
            game1.homeTeam = "پیکان";
            game1.awayTeam = "نساجی مازندران";
            game1.date = "پنجشنبه ۱۵ آذر ۱۳۹۷";
            game1.homeGoals = 0;
            game1.awayGoals = 1;
            let game2 = new Game();
            game2.status = GameStatusEnum.homeLose;
            game2.homeTeam = "سپیدرود رشت";
            game2.awayTeam = "استقلال";
            game2.date = "جمعه ۱۶ آذر ۱۳۹۷";
            game2.homeGoals = 0;
            game2.awayGoals = 5;
            let game3 = new Game();
            game3.status = GameStatusEnum.draw;
            game3.homeTeam = "پدیده";
            game3.awayTeam = "ماشین‌سازی تبریز";
            game3.date = "جمعه ۱۶ آذر ۱۳۹۷";
            game3.homeGoals = 2;
            game3.awayGoals = 2;
            let game4 = new Game();
            game4.status = GameStatusEnum.draw;
            game4.homeTeam = "ذوب‌آهن";
            game4.awayTeam = "نفت مسجدسلیمان";
            game4.date = "چهارشنبه ۲۱ آذر ۱۳۹۷";
            game4.homeGoals = 0;
            game4.awayGoals = 0;
            let game5 = new Game();
            game5.status = GameStatusEnum.homeLose;
            game5.homeTeam = "تراکتورسازی";
            game5.awayTeam = "فولاد";
            game5.date = "جمعه ۲۳ آذر ۱۳۹۷";
            game5.homeGoals = 1;
            game5.awayGoals = 2;
            let game6 = new Game();
            game6.status = GameStatusEnum.homeWin;
            game6.homeTeam = "صنعت نفت آبادان";
            game6.awayTeam = "سایپا";
            game6.date = "جمعه ۲۳ آذر ۱۳۹۷";
            game6.homeGoals = 2;
            game6.awayGoals = 1;
            let game7 = new Game();
            game7.status = GameStatusEnum.homeWin;
            game7.homeTeam = "پرسپولیس";
            game7.awayTeam = "پارس جنوبی جم";
            game7.date = "جمعه ۲۳ آذر ۱۳۹۷";
            game7.homeGoals = 3;
            game7.awayGoals = 1;
            let game8 = new Game();
            game8.status = GameStatusEnum.notDoneYet;
            game8.homeTeam = "استقلال خوزستان";
            game8.awayTeam = "سپاهان";
            game8.date = "شنبه ۲۴ آذر ۱۳۹۷";

            let week = new Week();
            week.games = [game1, game2, game3, game4, game5, game6, game7, game8];
            week.name = 'هفته ۱۵';

            let league = new League();
            league.weeks = [week];
            league.name = 'لیگ برتر ایران';

            return [league];
        }
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