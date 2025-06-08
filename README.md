#  Solemne 2

## Integrantes
* Sebastian Valbuena
* Benjamín Maldonado
* Francisco Noman
  
Este repositorio contiene el código fuente del frontend para un panel de control web, diseñado como MVP para gestionar proyectos y avances. La interfaz ha sido estilizada con un diseño profesional y claro. Entre sus funciones se encuentran:
1. Visualizar el estado de cada proyecto (En progreso, Finalizado, Atrasado).
2. Filtrado de proyectos por cliente.
3. Filtrado de proyectos por nombre.
4. Filtrado de proyectos por prioridad.
5. Filtrado de proyectos por estado.
6. Visualizar el seguimiento porcentual en cada proyecto.
7. Notificaciones de entregas atrasadas.
8. Información relevante de proyectos.

   
- Diseñado en Angular
- Control de versiones con Git
- Preparado para el despliegue con Docker

---

## Despliegue local del proyecto
1. **En una terminal clonar el repositorio usando:**

   `git clone https://github.com/Valbuena-Maldonado-Noman/solemne-2.git`

2. **Navegar a la carpeta donde se encuentra el proyecto con:**

   `cd solemne-2`

3. **Instalar dependencias:**

   `npm install`

4. **Ejecutar servidor de desarrollo:**

   `ng serve`

5. **Para acceder a la aplicación abrir en el navegador:**

    [http://localhost:4200](http://localhost:4200)

---

## Despliegue con Docker 
1. **En una terminal clonar el repositorio usando:**

   `git clone https://github.com/Valbuena-Maldonado-Noman/solemne-2.git`

2. **Navegar a la carpeta del proyecto (donde está el `Dockerfile`):**

   `cd solemne-2`
   
3. **Construir la imagen:**

   `docker build -t solemne-2 .`
   
4. **Ejecutar el contenedor:**

   `docker run -p 8080:80 solemne-2`
   
5. **Acceder desde el navegador:**

    [http://localhost:8080](http://localhost:8080)
   
6. **Para detener el contenedor:**

    `docker stop <solemne-2>`
   
7. **Para eliminar el contenedor:**

    `docker rm <solemne-2>`

---

## Dockerfile utilizado
```dockerfile
# Etapa 1: Construcción de la app Angular
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servir con nginx
FROM nginx:alpine

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar los archivos compilados del frontend
COPY --from=build /app/dist/proyecto/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

## Configuración Nginx utilizada
Archivo para que el despliegue en Docker funcione correctamente en Angular (Debe estar en la raiz del proyecto junto al Dockerfile):
```
worker_processes 1;

events {
  worker_connections 1024;
}

http {
  include       mime.types;
  default_type  application/octet-stream;
  sendfile        on;
  keepalive_timeout  65;

  server {
    listen 80;

    location / {
      root /usr/share/nginx/html;
      index index.html;
      try_files $uri $uri/ /index.html;
    }
  }
}
```
