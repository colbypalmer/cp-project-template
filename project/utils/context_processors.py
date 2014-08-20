from django.conf import settings


def google_account_info(request):
    return {'GOOGLE_ACCOUNT_CODE': settings.GOOGLE_ACCOUNT_CODE}