from sense_hat import SenseHat
import csv
import time
import datetime
sense = SenseHat()
# Define red and green color
red = (255, 0, 0)
green = (0, 255, 0)
# Take readings from the 3 sensors
while(True):
  humidity=sense.get_humidity()
  temperature=sense.get_temperature()
  pressure=sense.get_pressure()
  # Round the values to one decimal place
  humidity=round(humidity, 1)
  temperature=round(temperature, 1)
  pressure=round(pressure, 1)
  humidity=humidity + 5
  temperature = (temperature * 9/5) + 27
  # Create the message to show on SenseHat
  message = str(humidity)
  # Rotate SenseHat screen if needed (0, 90, 180, 270)
  sense.set_rotation(0)
  # Display the message on SenseHat screen
  #sense.show_message(message, scroll_speed=0.1,text_colour=red)
  #Clear SenseHat screen
  sense.clear()
  with open('humidity.csv', mode='a') as csvFile:
      csvWriter = csv.writer(csvFile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
      csvWriter.writerow([str(humidity),str(int(time.time()))+"000",str(temperature),str(pressure)])
  time.sleep(10)