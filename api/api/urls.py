from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from report.views import ReportViewSet

# O Router cria automaticamente os endpoints da API
router = DefaultRouter()
router.register(r'reports', ReportViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),  # Endereços em /api/reports/
]
