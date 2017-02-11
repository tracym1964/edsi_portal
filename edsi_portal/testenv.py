import os
import environ

root = environ.Path(__file__)
env = environ.Env(DEBUG=(bool, False),) # set default values and casting
environ.Env.read_env()  # reading .env file

print 'DB_NAME=' + env('DB_NAME')
print 'DB_USER=' + env('DB_USER')
print 'DB_PASS=' + env('DB_PASS')
print 'PORT=' + env('DB_PORT'),