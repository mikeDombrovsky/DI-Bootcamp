# Generated by Django 5.0.1 on 2024-02-09 00:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cards', '0003_card_for_sale'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='for_sale',
            field=models.BooleanField(default=True),
        ),
    ]
