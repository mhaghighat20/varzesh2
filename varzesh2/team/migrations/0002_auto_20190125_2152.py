# Generated by Django 2.1.3 on 2019-01-25 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='teams/images'),
        ),
    ]
