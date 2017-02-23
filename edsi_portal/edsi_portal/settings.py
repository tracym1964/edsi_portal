import os
from kombu import Exchange, Queue

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'assets'),
)

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
    }
}

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.9/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '_@03wpis*kbh*qnv(wo$9aix*xy+6v7v=+8rglond#+i#3$i_6'
#SECRET_KEY = os.environ['SECRET_KEY']

# SECURITY WARNING: don't run with debug turned on in production!
#DEBUG = os.environ['DEBUG']
DEBUG = 'True'
ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_celery_beat',

    # third party apps
    'rest_framework',
    'rest_framework.authtoken',

    # main application
    'edsi_portal',
    'webpack_loader',

    # sub applications
    'structures.apps.StructuresConfig',
    'lenders.apps.LendersConfig',
    'vendors.apps.VendorsConfig',
    'borrowers.apps.BorrowersConfig',
    'history.apps.HistoryConfig',
    'batch.apps.BatchConfig',
]

MIDDLEWARE_CLASSES = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
            # SECURITY WARNING: don't run with debug turned on in production!
            'debug': DEBUG,
        },
    },
]

ROOT_URLCONF = 'edsi_portal.urls'
WSGI_APPLICATION = 'edsi_portal.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.9/ref/settings/#databases

# Database Condocker-composeuration
#DATABASES = {
#    'default': {
#        'ENGINE': 'django.db.backends.mysql',
#        'NAME': os.environ['DB_NAME'],
#        'USER': os.environ['DB_USER'],
#        'PASSWORD': os.environ['DB_PASS'],
#        'HOST': os.environ['DB_SERVICE'],
#        'PORT': os.environ['DB_PORT'],
#    },
#}
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'BILL',
        'USER': 'dbuser',
        'PASSWORD': 'fGsltw5Hg',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    },
}


# Password validation
# https://docs.djangoproject.com/en/1.9/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework.parsers.JSONParser',
    ),
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    ),
    'PAGINATE_BY': 10,
}

# Internationalization
# https://docs.djangoproject.com/en/1.9/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Redis
REDIS_PORT = 6379
REDIS_DB = 0
# REDIS_HOST = os.environ['REDIS_HOST']
REDIS_HOST = 'redis'

# RABBIT_HOSTNAME = os.environ['RABBIT_HOSTNAME']
RABBIT_HOSTNAME = 'rabbit'

RABBIT_ENV_VHOST = None

if RABBIT_HOSTNAME.startswith('tcp://'):
    RABBIT_HOSTNAME = RABBIT_HOSTNAME.split('//')[1]

# BROKER_URL = env('BROKER_URL', '')
BROKER_URL = None
if not BROKER_URL:
    BROKER_URL = 'amqp://{user}:{password}@{hostname}/{vhost}/'.format(
        user='admin',
        password='mypass',
        hostname=RABBIT_HOSTNAME,
        vhost=RABBIT_ENV_VHOST)
#    BROKER_URL = 'amqp://{user}:{password}@{hostname}/{vhost}/'.format(
#        user=os.environ['RABBIT_USER'],
#        password=os.environ['RABBIT_PASS'],
#        hostname=RABBIT_HOSTNAME,
#        vhost=RABBIT_ENV_VHOST)
# We don't want to have dead connections stored on rabbitmq, so we have to negotiate using heartbeats
BROKER_HEARTBEAT = '?heartbeat=30'
if not BROKER_URL.endswith(BROKER_HEARTBEAT):
    BROKER_URL += BROKER_HEARTBEAT

BROKER_POOL_LIMIT = 1
BROKER_CONNECTION_TIMEOUT = 10

# Celery configuration

# configure queues, currently we have only one
CELERY_DEFAULT_QUEUE = 'default'
CELERY_QUEUES = (
    Queue('default', Exchange('default'), routing_key='default'),
)

# Sensible settings for celery
CELERY_ALWAYS_EAGER = False
CELERY_ACKS_LATE = True
CELERY_TASK_PUBLISH_RETRY = True
CELERY_DISABLE_RATE_LIMITS = False

# By default we will ignore result
# If you want to see results and try out tasks interactively, change it to False
# Or change this setting on tasks level
CELERY_IGNORE_RESULT = True
CELERY_SEND_TASK_ERROR_EMAILS = False
CELERY_TASK_RESULT_EXPIRES = 600

# Set redis as celery result backend
CELERY_RESULT_BACKEND = 'redis://%s:%d/%d' % (REDIS_HOST, REDIS_PORT, REDIS_DB)
CELERY_REDIS_MAX_CONNECTIONS = 1

# Don't use pickle as serializer, json is much safer
CELERY_TASK_SERIALIZER = "json"
CELERY_RESULT_SERIALIZER = "json"
CELERY_ACCEPT_CONTENT = ['application/json']

CELERYD_HIJACK_ROOT_LOGGER = False
CELERYD_PREFETCH_MULTIPLIER = 1
CELERYD_MAX_TASKS_PER_CHILD = 1000

# Added for celery beat scheduler
CELERYBEAT_SCHEDULER = 'django_celery_beat.schedulers.DatabaseScheduler'


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.9/howto/static-files/

STATIC_URL = '/static/'

# Borrowed from Ryko project -- possible authorization template?
SESSION_AUTH_COMPANY = 'auth_company'
SESSION_AUTH_REGION = 'auth_region'
SESSION_AUTH_TERRITORY = 'auth_territory'
SESSION_AUTH_CUSTOMER = 'auth_customer'
SESSION_AUTH_ORGANIZATION = 'auth_organization'
