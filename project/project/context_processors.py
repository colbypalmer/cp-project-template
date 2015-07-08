from django.conf import settings

def global_settings(request):
    if hasattr(settings, 'GOOGLE_ACCOUNT_CODE'):
        gaq = settings.GOOGLE_ACCOUNT_CODE
    else:
        gaq = None
    return {
        'GOOGLE_ACCOUNT_CODE': gaq
    }