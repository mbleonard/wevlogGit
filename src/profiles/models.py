from __future__ import unicode_literals
from django.db import models

# Create your models here.

class Profile(models.Model):
	name = models.CharField(max_length=120)
	description = models.TextField(default='user without description')
	job = models.CharField(max_length=50, default='no job')

	def __str__(self):
		return self.name, self.job


