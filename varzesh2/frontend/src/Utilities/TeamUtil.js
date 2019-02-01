import {FetchUtil} from "./FetchUtil";

export class TeamUtil{
    static getTeamDetails(teamId) {
        let url = '/api/team/' + teamId + '/';

    return FetchUtil.fetchFromUrl(url)
            .then(res => {
                let teamInfo = new TeamInfo();
                teamInfo.name = res['name'];
                teamInfo.gameIds = res['gameIds'];
                teamInfo.members = res['members'];
                teamInfo.newsIds = res['newsIds'];
                teamInfo.photoPath = res['photoPath'];

                return teamInfo;
            })
            .catch(err => {});
    }
    static getTeamName(teamId){
        let url = '/api/team/name/' + teamId + '/';

        return FetchUtil.fetchFromUrl(url)
                .then(res => {
                    return res['name'];
                })
                .catch(err => {});
    }

    static getTeamGames(id, sortMode) {
        const url = `/api/team/sorted_games/${id}/${sortMode}/`;
        return FetchUtil.fetchFromUrl(url);
    }

    static getFavoriteState(id) {
        const url = `/api/team/is_favorite/${id}/`;
        return FetchUtil.fetchFromUrl(url).then(response => response['isFavorite']);
    }

    static toggleFavorite(id) {
        const url = `/api/team/toggle_favorite/${id}/`;
        return FetchUtil.fetchFromUrl(url);
    }
}

class TeamInfo {
    name;
    gameIds;
    photoPath;
    members;
    newsIds;
}