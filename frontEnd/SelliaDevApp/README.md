# Proyecto de Chat en React Native con Expo y Backend Node.js

## Descripción

Este proyecto es una aplicación de chat híbrida, construida utilizando **React Native con Expo** para el frontend y **Node.js** para el backend. La aplicación ofrece una interfaz de chat similar a WhatsApp, con integración de un servicio de mensajería como **WhatsApp API** para enviar y recibir mensajes. Además, la aplicación maneja la interacción de los usuarios con emojis, mensajes en tiempo real a través de **WebSockets**, y tiene una funcionalidad de autenticación para el login de los usuarios, utilizando **JSON Web Tokens (JWT)** para la gestión segura de sesiones y **cifrado de contraseñas** para proteger la información de los usuarios.

## Tecnologías Utilizadas

### Frontend

- **React Native**: Para la construcción de la interfaz de usuario nativa tanto en dispositivos móviles como en la web.
- **Expo**: Herramienta que facilita el desarrollo con React Native proporcionando características como previsualización en tiempo real, compilación sin necesidad de configuración compleja y más.
- **Socket.io**: Para la comunicación en tiempo real entre el cliente y el servidor, gestionando la recepción de mensajes en tiempo real.
- **SASS/LESS**: Para la gestión de estilos con preprocesadores de CSS, brindando una mejor organización de los estilos en el proyecto.
- **EmojiPicker**: Integración de un selector de emojis para enriquecer la experiencia de mensajería.
- **React Navigation**: Utilizado para la gestión de las rutas dentro de la aplicación.
- **React Context API**: Para la gestión de estado global y la compartición de datos como la información del usuario a lo largo de los componentes.
- **JWT (JSON Web Token)**: Sistema de autenticación basado en tokens, que permite a los usuarios autenticarse y mantener su sesión de forma segura.

### Backend

- **Node.js**: Plataforma para la creación del servidor backend.
- **Express.js**: Framework minimalista para Node.js que facilita la creación de servidores web.
- **JWT (JSON Web Token)**: Sistema de autenticación basado en tokens, que permite a los usuarios autenticarse y mantener su sesión de forma segura.
- **Cifrado de Contraseñas**: Cifrado seguro de las contraseñas de los usuarios para proteger su información en la base de datos, utilizando **bcrypt**.
- **WhatsApp API**: Integración de WhatsApp como sistema de mensajería para la aplicación.
- **Socket.io**: Para la comunicación en tiempo real en el backend, permitiendo que el servidor empuje mensajes a los clientes.

## Funcionalidades

### 1. **Autenticación Segura de Usuario**
   - La aplicación permite a los usuarios registrarse e iniciar sesión utilizando un sistema de autenticación basado en tokens JWT.
   - Las contraseñas de los usuarios se cifran usando bcrypt antes de ser almacenadas en la base de datos, garantizando la seguridad de la información.
   - Los tokens JWT permiten que el backend autentique cada solicitud realizada por un usuario, asegurando que solo usuarios autenticados tengan acceso a la aplicación.

### 2. **Mensajería en Tiempo Real**
   - Los mensajes se envían y reciben en tiempo real utilizando WebSockets y **Socket.io**.
   - La integración con la **WhatsApp API** permite enviar mensajes a través de WhatsApp, y la aplicación recibe notificaciones sobre nuevos mensajes.

### 3. **Envío de Mensajes**
   - Los usuarios pueden enviar mensajes de texto y emojis a través de la aplicación.
   - Se incluye un selector de emojis que facilita la inserción de emojis en los mensajes.

### 4. **Lista de Conversaciones**
   - Los usuarios pueden ver una lista de conversaciones previas.
   - Cada conversación tiene un historial de mensajes que se muestra en la interfaz.

### 5. **Interfaz de Usuario**
   - La interfaz está optimizada tanto para dispositivos móviles como para escritorio utilizando el ancho de la pantalla.
   - Los componentes son reutilizables y la aplicación sigue un patrón de diseño modular, separando la lógica de la presentación.

### 6. **Notificaciones**
   - La aplicación recibe notificaciones de nuevos mensajes a través de WebSockets, sin necesidad de actualizar la página.

## Evidencias Version Mobile

<img src="./assets/images/Captura%20de%20pantalla%202024-11-06%20012343.png" alt="Logo del Proyecto" width="200"/>
<img src="./assets/images/Captura de pantalla 2024-11-06 012439.png" alt="Logo del Proyecto" width="200"/>
<img src="./assets/images/Captura de pantalla 2024-11-06 012531.png" alt="Logo del Proyecto" width="200"/>
<img src="./assets/images/Captura de pantalla 2024-11-06 013009.png" alt="Logo del Proyecto" width="200"/>
<img src="./assets/images/Captura de pantalla 2024-11-06 013138.png" alt="Logo del Proyecto" width="200"/>
<img src="./assets/images/Captura de pantalla 2024-11-06 013321.png" alt="Logo del Proyecto" width="200"/>
<img src="./assets/images/Captura de pantalla 2024-11-06 013413.png" alt="Logo del Proyecto" width="200"/>

## Evidencias Version Desktop

<img src="./assets/images/Captura de pantalla 2024-11-06 013505.png" alt="Logo del Proyecto" width="400"/>
<img src="./assets/images/Captura de pantalla 2024-11-06 013535.png" alt="Logo del Proyecto" width="400"/>
<img src="./assets/images/Captura de pantalla 2024-11-06 013551.png" alt="Logo del Proyecto" width="400"/>
<img src="./assets/images/Captura de pantalla 2024-11-06 013608.png" alt="Logo del Proyecto" width="400"/>
<img src="./assets/images/Captura de pantalla 2024-11-06 013625.png" alt="Logo del Proyecto" width="400"/>
<img src="./assets/images/Captura de pantalla 2024-11-06 013716.png" alt="Logo del Proyecto" width="400"/>
<img src="./assets/images/Captura de pantalla 2024-11-06 013745.png" alt="Logo del Proyecto" width="400"/>


# Notas de la Versión

Este proyecto utiliza algunos endpoints públicos para facilitar el desarrollo y pruebas, tales como **https://dummyjson.com** y **https://jsonplaceholder.typicode.com**. Estos servicios se integran durante el inicio de sesión, y se emplean credenciales de prueba para un consumo adecuado de estos recursos.

## Configuración de Integraciones

### 1. Configuración de Facebook Graph API
Para la integración de la API de Facebook Graph, es necesario configurar los siguientes parámetros:
- **Token de acceso**: Permite la autenticación y autorización de solicitudes.
- **Webhook**: Necesario para recibir notificaciones en tiempo real y responder a eventos específicos.

La configuración de estos elementos garantiza una conexión confiable con los servicios de Facebook.

### 2. Integración con OpenAI
El proyecto incluye código preconfigurado para el consumo de la API de OpenAI. Sin embargo, es necesario realizar configuraciones adicionales, como:
- **API Key**: Se requiere una clave de acceso válida para utilizar los servicios de OpenAI.
- **Configuración de puntos de acceso**: Asegura que las solicitudes se realicen correctamente.

También se ha implementado, aunque comentado, un bot para casos de uso específicos, permitiendo su activación y personalización según necesidades.

### 3. Conexión en Tiempo Real con Socket.io
La aplicación cuenta con integración para conexiones en tiempo real mediante **Socket.io**, lo cual facilita la interacción instantánea entre usuarios y servicios.

