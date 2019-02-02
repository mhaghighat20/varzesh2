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
        const url = `/api/player/statistics/${id}/`;

        return FetchUtil.fetchFromUrl(url)
            .then(statistics => {
                let stats = [];
                for (let i = 0; i < statistics.length; i++){
                    let stat = new SoccerPlayerStatistics();
                    const year = statistics[i][0].substr(2, 2);
                    stat.season = `${year}-${parseInt(year) + 1}`;
                    let items = statistics[i][1];
                    stat.goals = items.goal || 0;
                    stat.assists = items.assist || 0;
                    stat.yellowCards = items.yellow_card || 0;
                    stat.redCards = items.red_card || 0;

                    stats.push(stat);
                }
                return stats;
            });
    }
    static getPlayerNews(id){
        const url = `/api/player/related_news/${id}/`;
        return FetchUtil.fetchFromUrl(url)
            .then(newsIds => newsIds);
    }
    static getPlayerName(playerId){
        const url = `/api/player/name/${playerId}/`;
        return FetchUtil.fetchFromUrl(url)
            .then(response => response['name']);
    }

    static getFavoriteState(id) {
        const url = `/api/player/is_favorite/${id}/`;
        return FetchUtil.fetchFromUrl(url).then(response => response['isFavorite']);
    }

    static toggleFavorite(id) {
        const url = `/api/player/toggle_favorite/${id}/`;
        return FetchUtil.fetchFromUrl(url);
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