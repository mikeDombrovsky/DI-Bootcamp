import datetime as dt

now = dt.datetime.now()

jen_1 = dt.datetime(now.year,1, 1)


if(jen_1 < now):
    jen_1 = dt.datetime(now.year + 1, 1, 1)
    
time_left = jen_1 - now

print(f'the 1st of January is in {time_left.days} days, and {time_left.seconds // 60 // 60} hours')