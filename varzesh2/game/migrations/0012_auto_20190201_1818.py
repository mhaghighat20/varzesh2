# Generated by Django 2.1.5 on 2019-02-01 18:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0011_auto_20190129_2029'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='best_player',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='player.Player', verbose_name='بهترین بازیکن میدان'),
        ),
    ]
