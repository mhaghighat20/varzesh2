import React from "react";

export class News extends React.Component{
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading"> اخبار </div>
                <div className="panel-body">
                    <NewsItem title = 'First News' link = 'http://google.com'/>
                    <NewsItem title = 'Second News' link = 'http://varzesh3.com'/>
                </div>
            </div>
        );
    }
}

export default class NewsPage extends React.Component{
    render() {
        let paragraphs = [];
        paragraphs.push('به گزارش "ورزش سه"، سپاهان که در این فصل هیچ باختی نداشته و در 13 مسابقه اخیرش هشت پیروزی و پنج تساوی به دست آورده بود، در حالی امروز از پرسپولیس میزبانی می‌کرد که سرخ پوشان نیز همانند آنها شکست‌ناپذیر بودند و تنها بر حسب دو امتیاز کمتر در رده سوم جدول جای داشتند؛ با این حال طلایی پوشان امیدوار بودند در دیدار حساس امروز که در نقش جهان میزبانی می‌کردند به برتری برسند و علاوه بر گرفتن صد جدول از پدیده، دور رفت را با شرایط بهتری به پایان برسانند که این اتفاق نیافتاد و در نهایت دو تیم به یک امتیاز رضایت دادند');
        paragraphs.push('در حالی که نیمه اول بدون موقعیت چندان خاص و با تساوی صفر- صفر به پایان رسید، در نیمه دوم پرسپولیس نمایش بهتری ارائه داد، اما برخلاف جریان بازی و روی شوت تماشایی عزت‌الله پورقاز سپاهان در دقیقه 74 به گل رسید و در آستانه پیروزی قرار گرفته بود ولی حملات پی در پی پرسپولیس در نهایت نتیجه‌بخش شد و سرخ پوشان با گلزنی علی علیپور از روی نقطه پنالتی به تساوی یک بر یک دست یافتند؛ دیداری که در وقت‌های تلف شده با اخراج کی‌روش استنلی از سپاهان و کمال کامیابی‌نیا از پرسپولیس، جنجالی‌تر از قبل پایان پیدا کرد.');
        paragraphs.push('شاگردان امیر قلعه‌نویی با این تساوی 30 امتیازی شدند تا مثل هفته قبل برحسب تفاضل گل بهتر نسبت به پدیده، مجددا صدرنشین لیگ برتر شوند و پرسپولیس نیز با توقف در اصفهان، فاصله دو امتیازی با این دو تیم را حفظ کرد.');

        let news = <NewsFull
            title = 'سپاهان 1- پرسپولیس 1؛ همه چیز تحت تاثیر سوت فغانی'
            paragraphs = {paragraphs}
            publishDate = '۱۳۹۷/۹/۱۸'
            image = {
                {base64:'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',
                    alt: 'بازی سپاهان و پرسپولیس'}
                }
        />;
        return (
            <div className="container container-fluid">
                {news}
            </div>
        );
    }
}

class NewsFull extends React.Component{
    render() {
        let paragraphs = [];
        for (let i = 0; i < this.props.paragraphs.length; i++){
            paragraphs.push(<p className="my-paragraph">{this.props.paragraphs[i]}</p>);
        }
        return (
            <div className="panel panel-primary">
                <h1 className="news-title">{this.props.title}</h1>
                <Image base64={this.props.image.base64} alt={this.props.image.alt}/>
                <article>
                    {paragraphs}
                </article>
                <Date value = {this.props.publishDate}/>
            </div>
        );
    }
}

class Image extends React.Component{
    render() {
        return (
            <img className="news-image" src={'data:image/jpeg;base64,' + this.props.base64} alt={this.props.alt}/>
        );
    }
}

class Date extends React.Component{
        render() {
            return (
            <p className="my-paragraph" style={{direction: 'ltr'}}>
                {'تاریخ انتشار: ' + this.props.value}
            </p>
        );
    }
}

class NewsItem extends React.Component{
    render() {
        return (
            <div>
                <a href={this.props.link}>
                    {this.props.title}
                </a>
            </div>
        );
    }
}