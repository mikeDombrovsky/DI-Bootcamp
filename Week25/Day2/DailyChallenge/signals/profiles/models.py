from datetime import datetime
from django.utils import timezone
from django.db import models



class Profile(models.Model):
    name = models.CharField()
    email = models.EmailField()
    is_active = models.BooleanField(default=True)
    
