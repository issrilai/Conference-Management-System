# Generated by Django 2.1.7 on 2019-04-09 16:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20190329_0034'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listener',
            name='uid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
