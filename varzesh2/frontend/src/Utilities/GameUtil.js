import {FetchUtil} from "./FetchUtil";

export class GameUtil{
    static getGameDetails(gameId){
        let url = '/api/game/' + gameId + '/details/';

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
                alert(err);
            });
    }

    static getGamesIdByTeamId(teamId) {
        // TODO implement this method
    }

    static getAgainstGamesIdsByTeamIds(firstTeamId, secondTeamId) {
        const url = `/api/game/against_games/${firstTeamId}/${secondTeamId}`;
        return FetchUtil.fetchFromUrl(url)
            .then(response => response);
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