from sense_hat import SenseHat
from firebase_admin import credentials, firestore
import firebase_admin
import time

COLLECTION = 'raspberry'
DOCUMENT = 'dashboard'

cred = credentials.Certificate("./config/key.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
pi_ref = db.collection(COLLECTION).document(DOCUMENT)

sense = SenseHat()

def update_sensor_data():
    while True:
        sensor_dict = {
            'sensor': {
                'humidity': {},
                'accelero': {},
                'compass': {},
                'gyro': {},
                'temp': {},
            }
        }

        humidity = sense.get_humidity()
        accelero = sense.get_accelerometer()
        compass = sense.get_compass()
        gyro = sense.get_gyroscope()
        temp = sense.get_temperature()

        sensor_data = sensor_dict['sensor']

        sensor_data['humidity'] = humidity
        sensor_data['accelero'] = accelero
        sensor_data['compass'] = compass
        sensor_data['gyro'] = gyro
        sensor_data['temp'] = temp

        pi_ref.set(sensor_dict)

        # Every 5 minutes
        time.sleep(60 * 5)

update_sensor_data()