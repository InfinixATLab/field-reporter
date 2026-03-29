from django.db import models

class Report(models.Model):
    # Definindo as opções de Status conforme pedido
    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('RESOLVED', 'Resolved'),
    ]

    title = models.CharField(max_length=100)
    description = models.TextField()
    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='PENDING' # PENDING fica como padrão
    )
    created_at = models.DateTimeField(auto_now_add=True) # Útil para saber quando foi criado

    def __str__(self):
        return f"{self.title} - {self.status}"