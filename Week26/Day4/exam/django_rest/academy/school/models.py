from django.db import models

class Teacher(models.Model):
    name = models.CharField(max_length=100)


class Course(models.Model):
    course_name = models.CharField(max_length=100)
    course_code = models.CharField(max_length=100)
    teachers = models.ManyToManyField(Teacher)