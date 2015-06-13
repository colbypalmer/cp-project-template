DEBUG = True

ADMINS = (
    ('Zaphod Beeblebrox', 'hoopyfrood@heartofgold.com'),
)

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '^lkajsdlfkjaoif09ijoi23092309i02[93ip2j3[r29u3[0923jorij'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'db_name_here',
        'USER': 'db_user_here',
        'PASSWORD': 'db_password_here',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

EMAIL_HOST = ''
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
EMAIL_PORT = 587
DEFAULT_FROM_EMAIL = 'My Site Admin <me@myproject.com>'

# Because message cookies and BrowserSync don't play nicely
MESSAGE_STORAGE = 'django.contrib.messages.storage.session.SessionStorage'

GOOGLE_ACCOUNT_CODE = "UA-XXXXXXX-XX"