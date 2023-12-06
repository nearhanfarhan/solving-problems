def boat_race (time, record):
    ways_to_beat_record = 0
    for button_time in range (time):
        distance_travelled = button_time * (time - button_time)
        if distance_travelled > record:
            ways_to_beat_record +=1
    
    print("Number of ways record can be beaten:", ways_to_beat_record)


boat_race(53, 313)
boat_race(89, 1080)
boat_race(76, 1214)
boat_race(98, 1201)