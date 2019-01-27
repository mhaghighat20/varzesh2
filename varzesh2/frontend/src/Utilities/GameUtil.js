import {FetchUtil} from "./FetchUtil";

export class GameUtil{
    static getGameDetails(gameId){
        let url = '/api/game/by_id/' + gameId + '/';

        return FetchUtil.fetchFromUrl(url)
            .then(res => {
                let gameDetails = new GameDetails();
                gameDetails.awayTeamId = res['awayTeamId'];
                gameDetails.homeTeamId = res['homeTeamId'];
                gameDetails.homeGoals = res['homeGoals'];
                gameDetails.awayGoals = res['awayGoals'];
                gameDetails.date = res['date'];
                gameDetails.hasBeenHeld = res['hasBeenHeld'];
                gameDetails.isBasketball = res['isBasketball'];

                return gameDetails;
            })
            .catch(err => {
                // TODO remove these lines

                let gameDetails = new GameDetails();
                gameDetails.awayTeamId = '2';
                gameDetails.homeTeamId = '1';
                gameDetails.homeGoals = 2;
                gameDetails.awayGoals = 0;
                gameDetails.date = 'Ye mogheyi';
                gameDetails.hasBeenHeld = true;
                gameDetails.isBasketball = false;

                return gameDetails;
            });
    }

    static getGamesIdByTeamId(teamId) {
        // TODO implement this method
    }

    static getAgainstGamesIdsByTeamIds(firstTeamId, secondTeamId) {
        // TODO implement this method
    }

    static getGameStatistics(gameId) {
        // TODO implement this method
    }

    static getGameEvents(gameId) {
        // TODO implement this method
    }

    static getPlayers(gameId) {
        // TODO implement this method
    }

    static getRelatedNewsIds(gameId) {
        // TODO implement this method
    }

    static getRelatedMediaIds(gameId) {
        // TODO implement this method
    }
}

class GameDetails {
    awayTeamId;
    awayGoals;
    homeTeamId;
    homeGoals;
    date;
    hasBeenHeld;
    isBasketball;
}