import {FetchUtil} from "./FetchUtil";

export class NewsUtil{
    static getNewsById(id, loadDescription) {
        return getNews(id, loadDescription)
            .then(res => {
                let news = new NewsInfo();

                if (loadDescription === true) {
                    news.paragraphs = [res['text']];
                }
                news.image = {
                        path: res['photoPath'],
                        alt: res['title']
                    };
                news.publishDate = res['publishDate'];
                news.title = res['title'];

                return news;
            })
            .catch(err => {});
    }


}

function getNews(newsId, loadDescription) {
    let url = '/api/news/by_id/' + newsId + '/';
    if (loadDescription === false){
        url += '0';
    } else if (loadDescription === true){
        url += '1';
    }

    return FetchUtil.fetchFromUrl(url);
}

class NewsInfo {
    paragraphs;
    title;
    publishDate;
    image;
}

