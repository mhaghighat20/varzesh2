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

    static getAgainstGamesIdsByTeamIds(firstTeamId, secondTeamId, gameId) {
        const url = `/api/game/against_games/${firstTeamId}/${secondTeamId}/${gameId}`;
        return FetchUtil.fetchFromUrl(url)
            .then(response => response);
    }

    static getGameStatistics(gameId) {
        const url = `/api/game/statistics/${gameId}/`;
        return FetchUtil.fetchFromUrl(url)
            .then(response => response);
    }

    static getGameEvents(gameId) {
        const url = `/api/game/events/${gameId}`;
        return FetchUtil.fetchFromUrl(url)
            .then(response => response);
    }

    static getPlayers(gameId) {
        const url = `/api/game/players/${gameId}`;
        return FetchUtil.fetchFromUrl(url)
            .then(response => response);
    }

    static getRelatedNewsIds(gameId) {
        const url = `/api/game/related_news/${gameId}`;
        return FetchUtil.fetchFromUrl(url)
            .then(response => response);
    }

    static getRelatedMediaIds(gameId) {
        const url = `/api/game/related_media/${gameId}`;
        return FetchUtil.fetchFromUrl(url)
            .then(response => response);
    }

    static getFavoriteState(id) {
        const url = `/api/game/is_favorite/${id}/`;
        return FetchUtil.fetchFromUrl(url).then(response => response['isFavorite']);
    }

    static toggleFavorite(id) {
        const url = `/api/game/toggle_favorite/${id}/`;
        return FetchUtil.fetchFromUrl(url);
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