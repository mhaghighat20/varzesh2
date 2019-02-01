import {SportTypeEnum} from "../SharedComponents/SportType";
import {FetchUtil} from "./FetchUtil";

export class HomeUtil{
    static getNewGames(sportType, isFavorite){
        if (!isFavorite)
            isFavorite = 0;
        else
            isFavorite = 1;
        let isBasketball = 0;
        if (sportType === SportTypeEnum.basketball)
            isBasketball = 1;
        const url = `/api/game/latest_games/${isBasketball}/${isFavorite}/`;

        return FetchUtil.fetchFromUrl(url).then(response => {
            let result = {};
            for (let i = 0; i < response.length; i++){
                const item = response[i];
                const leagueName = item['leagueName'];
                if (!(leagueName in result))
                    result[leagueName] = {};
                const week = item['week'];
                if (!(week in result[leagueName])){
                    result[leagueName][week] = [];
                }
                result[leagueName][week].push(item['gameId']);
            }
            return result;
        });
    }
}
export const GameStatusEnum = {"homeWin": 1, "draw": 2, "homeLose": 3, "notDoneYet": 4};