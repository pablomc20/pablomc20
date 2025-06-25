FROM nginx:alpine
LABEL org.opencontainers.image.source https://github.com/pablomc20/pablomc20

# Copiar archivos estáticos a nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]

