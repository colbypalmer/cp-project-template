from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
admin.autodiscover()

from utils.views import DirectTemplateView

handler500 = 'views.server_error'

urlpatterns = patterns('',
                       url(r'^$', DirectTemplateView.as_view(template_name='homepage.html'), name='home'),
                       url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^robots.txt$', DirectTemplateView.as_view(template_name='robots.txt')),
                       url(r'^humans.txt$', DirectTemplateView.as_view(template_name='humans.txt')),
                       )
