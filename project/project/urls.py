from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
from django.views.generic import TemplateView
admin.autodiscover()


handler500 = 'views.server_error'

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='homepage.html'), name='home'),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^robots.txt$', TemplateView.as_view(template_name='robots.txt')),
    url(r'^humans.txt$', TemplateView.as_view(template_name='humans.txt')),
]

