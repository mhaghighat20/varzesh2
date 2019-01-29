from django.db import models


class Player(models.Model):
    class Meta:
        verbose_name_plural = 'بازیکن‌ها'
        verbose_name = 'بازیکن'

    birth_date = models.DateField()
    height = models.IntegerField()
    weight = models.IntegerField()
    nationality = models.CharField(max_length=50)
    is_basketball = models.BooleanField(null=False)
    photo = models.ImageField(blank=True, upload_to='players/images')

    def __str__(self):
        person = Person.objects.filter(player=self)
        if person.exists():
            return str(person.first())
        else:
            return super(Player, self).__str__()


class Person(models.Model):
    class Meta:
        verbose_name_plural = 'اشخاص'
        verbose_name = 'شخص'

    first_name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=False)
    position = models.CharField(max_length=50)
    player = models.OneToOneField('player.Player', null=True, on_delete=models.CASCADE, blank=True)
    team = models.ForeignKey('team.Team', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name
