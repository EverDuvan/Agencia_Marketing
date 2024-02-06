import os
import environ

env = environ.Env()
environ.Env.read_env()

key = os.environ.get('CORS')


print(key)