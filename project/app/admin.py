from django.contrib import admin
from.models import *

# Register your models here.
class ReactTest(admin.ModelAdmin):
    display = ("name", "department")

admin.site.register(React, ReactTest)