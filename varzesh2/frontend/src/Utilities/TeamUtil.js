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
        let url = '/api/team/by_id/name/' + teamId + '/';

    return FetchUtil.fetchFromUrl(url)
            .then(res => {
                return res['name'];
            })
            .catch(err => {});
    }
}

class TeamInfo {
    name;
    gameIds;
    photoPath;
    members;
    newsIds;
}