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
            });
    }


}

function getNews(newsId, loadDescription) {
    let url = '/api/news/by_id/' + newsId + '/';
    if (loadDescription === false){
        url += '0';
    } else if (loadDescription === true){
        url += '1';
    }

    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    })
    .then(response => response.json()); // parses response to JSON
}

class NewsInfo {
    paragraphs;
    title;
    publishDate;
    image;
}

