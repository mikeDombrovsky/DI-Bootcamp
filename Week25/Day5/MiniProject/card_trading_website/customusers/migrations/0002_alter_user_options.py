# Generated by Django 5.0.1 on 2024-02-09 00:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('customusers', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'verbose_name': 'User', 'verbose_name_plural': 'Users'},
        ),
    ]
