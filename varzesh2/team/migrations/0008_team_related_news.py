# Generated by Django 2.1.5 on 2019-02-01 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0006_remove_news_related_players'),
        ('team', '0007_auto_20190129_2025'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='related_news',
            field=models.ManyToManyField(blank=True, to='news.News', verbose_name='اخبار مرتبط'),
        ),
    ]
