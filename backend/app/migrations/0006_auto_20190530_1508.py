# Generated by Django 2.1.7 on 2019-05-30 12:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20190409_1714'),
    ]

    operations = [
        migrations.AddField(
            model_name='proposal',
            name='wishToReview',
            field=models.ManyToManyField(to='app.Reviewer'),
        ),
        migrations.AlterField(
            model_name='programcommitteemember',
            name='uid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='userID', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='proposal',
            name='abstract',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='proposal',
            name='sid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='papers', to='app.Section'),
        ),
        migrations.AlterField(
            model_name='reviewer',
            name='pcid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='program_committee', to='app.ProgramCommitteeMember'),
        ),
        migrations.AlterField(
            model_name='wishtoreview',
            name='prid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='proposal', to='app.Proposal'),
        ),
        migrations.AlterField(
            model_name='wishtoreview',
            name='rid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviewer', to='app.Reviewer'),
        ),
    ]
