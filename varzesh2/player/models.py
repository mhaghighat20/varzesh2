from django.db import models


class Player(models.Model):
    class Meta:
        verbose_name_plural = 'بازیکن‌ها'
        verbose_name = 'بازیکن'

    birth_date = models.DateField(verbose_name='تاریخ تولد')
    height = models.IntegerField(verbose_name='قد')
    weight = models.IntegerField(verbose_name='وزن')
    nationality = models.CharField(max_length=50, verbose_name='ملیت')
    is_basketball = models.BooleanField(null=False, verbose_name='بسکتبال است')
    photo = models.ImageField(blank=True, upload_to='players/images', verbose_name='تصویر')

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

    first_name = models.CharField(max_length=50, null=False, verbose_name='نام')
    last_name = models.CharField(max_length=50, null=False, verbose_name='نام خانوادگی')
    position = models.CharField(max_length=50, verbose_name='پست')
    player = models.OneToOneField('player.Player', null=True, on_delete=models.CASCADE, blank=True, verbose_name='بازیکن')
    team = models.ForeignKey('team.Team', on_delete=models.CASCADE, null=True, blank=True, verbose_name='تیم')

    def __str__(self):
        return self.first_name + ' ' + self.last_name
