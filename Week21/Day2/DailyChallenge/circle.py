import math
import turtle
import time

class Circle:
    circles = []

    def __init__(self, radius):
        self.radius = radius
        Circle.circles.append(self)

    def __str__(self):
        return f'Circle. Radius: {self.radius} sm'

    def __add__(self, other):
        return Circle(self.radius + other.radius)

    def __eq__(self, other):
        return self.radius == other.radius

    def __gt__(self, other):
        return self.radius > other.radius

    def __ge__(self, other):
        return self.radius >= other.radius

    def __lt__(self, other):
        return self.radius < other.radius

    def __le__(self, other):
        return self.radius <= other.radius
    
    @property
    def area(self):
        return round(math.pi * self.radius * self.radius, 1)

    @classmethod
    def sort(cls):
        cls.circles.sort()
        
    @classmethod
    def print_circles(cls):
        print('-----circles-----')
        for circle in cls.circles:
            print(circle)
        print('-----------------')
        
    @classmethod
    def print_circles_turtule(cls):
        turtle.bgcolor('pink')
        
        t = turtle.Turtle()
        t.pen(pencolor="green", fillcolor="green")
        
        for circle in cls.circles:
            t.circle(circle.radius)
            t.end_fill()
            t.penup()
            t.fd(circle.radius * 3)
            t.pendown()
        # s = turtle.getscreen()
        turtle.done()

circle1 = Circle(15)
circle2 = Circle(30)

circle3 = circle1 + circle2

print('Area of circle3 is', circle3.area, 'sm²')

Circle.print_circles()

Circle.sort()

Circle.print_circles()

Circle.print_circles_turtule()
