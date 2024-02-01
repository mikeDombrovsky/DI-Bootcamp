from rest_framework import serializers

from .models import Teacher, Course

class TeacherSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Teacher
        fields = '__all__'
        
class CourseSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Course
        fields = '__all__'
