export class NewsUtil{
    static getNewsById(id, loadDescription) {
        if (id === '0') {
            let news = new NewsDetail();
            if (loadDescription) {
                let paragraphs = [];
                paragraphs.push('به گزارش "ورزش سه"، سپاهان که در این فصل هیچ باختی نداشته و در 13 مسابقه اخیرش هشت پیروزی و پنج تساوی به دست آورده بود، در حالی امروز از پرسپولیس میزبانی می‌کرد که سرخ پوشان نیز همانند آنها شکست‌ناپذیر بودند و تنها بر حسب دو امتیاز کمتر در رده سوم جدول جای داشتند؛ با این حال طلایی پوشان امیدوار بودند در دیدار حساس امروز که در نقش جهان میزبانی می‌کردند به برتری برسند و علاوه بر گرفتن صد جدول از پدیده، دور رفت را با شرایط بهتری به پایان برسانند که این اتفاق نیافتاد و در نهایت دو تیم به یک امتیاز رضایت دادند');
                paragraphs.push('در حالی که نیمه اول بدون موقعیت چندان خاص و با تساوی صفر- صفر به پایان رسید، در نیمه دوم پرسپولیس نمایش بهتری ارائه داد، اما برخلاف جریان بازی و روی شوت تماشایی عزت‌الله پورقاز سپاهان در دقیقه 74 به گل رسید و در آستانه پیروزی قرار گرفته بود ولی حملات پی در پی پرسپولیس در نهایت نتیجه‌بخش شد و سرخ پوشان با گلزنی علی علیپور از روی نقطه پنالتی به تساوی یک بر یک دست یافتند؛ دیداری که در وقت‌های تلف شده با اخراج کی‌روش استنلی از سپاهان و کمال کامیابی‌نیا از پرسپولیس، جنجالی‌تر از قبل پایان پیدا کرد.');
                paragraphs.push('شاگردان امیر قلعه‌نویی با این تساوی 30 امتیازی شدند تا مثل هفته قبل برحسب تفاضل گل بهتر نسبت به پدیده، مجددا صدرنشین لیگ برتر شوند و پرسپولیس نیز با توقف در اصفهان، فاصله دو امتیازی با این دو تیم را حفظ کرد.');

                news.paragraphs = paragraphs;
            }

            news.title = 'سپاهان 1- پرسپولیس 1؛ همه چیز تحت تاثیر سوت فغانی';
            news.publishDate = '۱۳۹۷/۹/۱۸';
            news.image = {
                path: '/static/frontend/Content/01362047.jpg',
                alt: 'بازی سپاهان و پرسپولیس'
            };
            return news;
        }
        let res = getNews(id, loadDescription)
            .then(response => response)
            .catch(err => console.error(err));

        let news = NewsInfo();

        if (loadDescription === true) {
            news.paragraphs = [<p>
                {res['text']}
            </p>];
        }
        news.image = {
                path: res['imagePath'],
                alt: res['title']
            };
        news.publishDate = res['publishDate'];

        return news
    }


}

function getNews(newsId, loadDescription) {
    let url = '/api/news/' + newsId + '/';
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

