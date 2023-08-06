from django.db import models

# Create your models here.
class React(models.Model):
    # CHANGE THIS FIELD LATER ########
    employee = models.CharField(max_length=30)
    department = models.CharField(max_length=200)

