# ExamenFrontEndPayNau - Angular App

Esta es la aplicación frontend del proyecto **ExamenFrontEndPayNau**, desarrollada en Angular. Esta aplicación proporciona una interfaz de usuario para gestionar personas (crear, leer, actualizar y eliminar).

## Requisitos previos

Antes de ejecutar esta aplicación, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 16 o superior): [Descargar Node.js](https://nodejs.org/)
- **Angular CLI**: Ejecuta el siguiente comando para instalar Angular CLI:

  npm install -g @angular/cli

  
ExamenFrontEndPayNau
├── /src                # Código fuente de la aplicación Angular
│   ├── /app            # Componentes, servicios y módulos de la app
│   │   ├── app.component.ts    # Componente principal
│   │   ├── app.component.html  # Plantilla principal de la app
│   │   ├── person.service.ts    # Servicio para gestionar personas
│   │   ├── person.model.ts      # Modelo de datos para personas
│   └── main.ts         # Punto de entrada de la aplicación
├── angular.json        # Configuración del proyecto Angular
├── package.json        # Dependencias del proyecto
└── tsconfig.json       # Configuración de TypeScript


## Pasos
Paso: 1
git clone https://github.com/jmunozoutmulti/examen_frontendpaynau.git

Paso 2:
cd ExamenFrontEndPayNau

Paso 3:
npm install

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

ng serve

Luego, abre tu navegador y navega a http://localhost:4200/.


## Ejecución de Pruebas
Para ejecutar las pruebas, utiliza el siguiente comando:

ng test
