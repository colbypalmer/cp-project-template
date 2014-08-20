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

GOOGLE_ACCOUNT_CODE = "UA-XXXXXXX-XX"