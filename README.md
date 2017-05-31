# dboxjs examples

## Instalación
Primero que nada, clona o descarga este proyecto. 

Las dependencias del proyecto se instalaron usando NPM, que se encuentra dentro de la instalación de Node.js 

### No tengo NPM, ¿qué hago?

Instala la versión adecuada de Node.js para tu computadora, que se encuentra disponible en [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Si tienes una distribución GNU/Linux, puedes hacerlo a través del gestor de paquetes [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/)

### Ok, ya instalé Node, ¿y ahora?

Debido a que se consumen archivos, se requiere montar una instancia de un servidor para poder consumir recursos (por cuestiones de seguridad de JavaScript) 

Recomendamos instalar ```http-server``` por practicidad [https://github.com/indexzero/http-server](https://github.com/indexzero/http-server)

#### Instalación en UNIX
```
sudo npm install -g http-server
```

### Instalación en Windows
Debes ejecutar el programa CMD en modo de administrador (Botón de Windows, CMD -> click derecho -> Ejecutar como administrador)

Una vez que se abre la terminal, ejecutar el comando
```
npm install -g http-server
``` 

## Ok, ya tengo NPM y una instancia de servidor, ¿ahora como visualizo el proyecto?

### 1. Instalar dependencias

Debes ir en la linea de comandos (terminal, CMD) a la carpeta donde descargaste el proyecto
```
cd <-path to folder->
```

Una vez que estás ahí, instalas las dependencias del proyecto
```
npm install 
```

### 2. Iniciar el proyecto (estando en la carpeta de este proyecto)
```
http-server .
```