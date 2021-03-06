from sense_hat import SenseHat
import csv
import time
import datetime
sense = SenseHat()
# Define red and green color
red = (255, 0, 0)
green = (0, 255, 0)
# Take readings from the 3 sensors

def create_connection(db_file):
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except Error as e:
        print(e)
    return conn

def insertRecord(humidity, pressure, temperature):
    print(humidity, temperature, pressure)

def captureData():
    humidity=sense.get_humidity()
    temperature=sense.get_temperature()
    pressure=sense.get_pressure()
    # Round the values to one decimal place
    humidity=round(humidity, 1)
    temperature=round(temperature, 1)
    pressure=round(pressure, 1)
    humidity=humidity + 5
    temperature = (temperature * 9/5) + 27
    sense.clear()
    insertRecord(humidity, pressure, temperature)


while(True):
    captureData()
    time.sleep(10)