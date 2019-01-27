import {FetchUtil} from "./FetchUtil";

export class TeamUtil{
    static getTeamDetails(id) {
        return getTeamDetailsById(id)
            .then(res => {
                let teamInfo = new TeamInfo();
                teamInfo.gamesId = res['gamesId'];
                teamInfo.membersId = res['membersId'];
                teamInfo.newsId = res['newsId'];
                teamInfo.photoPath = res['photoPath'];

                return teamInfo;
            })
            .catch(err => {});
    }
    static getTeamName(id){
        return getTeamNameById(id)
            .then(res => {
                return res['name'];
            })
            .catch(err => {});
    }
}

class TeamInfo {
    gamesId;
    photoPath;
    membersId;
    newsId;
}

function getTeamDetailsById(teamId) {
    let url = '/api/team/by_id/' + teamId + '/';

    return FetchUtil.fetchFromUrl(url);
}

function getTeamNameById(teamId) {
    let url = '/api/team/by_id/name/' + teamId + '/';

    return FetchUtil.fetchFromUrl(url);
}