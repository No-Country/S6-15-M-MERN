# CONTRÁTA

Compañia donde encontraras servicio profesionales para tu hogar, con referencia de clientes reales y con nuestro respaldo y garantía.

## Correr la aplicacion en Local
Ejecuta npm install y npm run dev para instalar y ejecutar depedencias.

instalar dependencias.

- `npm install`

Ejectutar el cliente

- ` npm run dev`

## Correr la aplicacion con Docker en Local (Modo Desarrollo).

##### Ejecutar.

- `Docker compose -f docker-compose.dev.yml build`

- `Docker compose -f docker-compose.dev.yml up`

## Correr la aplicacion con Docker en Produccion (Modo Produccion).

- `Docker compose build`

- `Docker compose up`

## Descripcion de lo Realizado 👍 

### Problema.

Se solicitó realizar una app de servicio profesionales para el hogar . La app debe tener base de datos y responder peticiones CRUD del cliente.

### Solucion

Para el entorno de desarrollo de la app se utilizo node con typeScript y express para la infraestructura del mismo, asimismo se utilizo mongodb como base de datos en la nube y mongoose para generar interaccion con la base de datos al traer informacion; de igual forma se utilizo docker y AWS.

Express – Como infraestructura flexible trabajada en el entorno de desarrollo.
Mongodb – base de datos No relacional.
Node con TypeScript  – entorno de desarrollo.

##### ORM.

Mongoose Para realizar consultas a la base de datos mongodb

###### Paqueterías.

1. Cors – Como mecanismo HTTP para obtener permisos para acceder a recursos seleccionados desde un servidor, en un origen distinto al dominio.

1. dotenv - Permite cargar variables de entorno en proyectos de node js desde un archivo .env

1. nodemon- Te permite monitorear los cambios en el código fuente que se está desarrollando y automáticamente reinicia el servidor.

1. Bcrypt - Es una función de hashing de passwords.

1.  joi - validación de código para Node.js y Express.

1. jsonwebtoken - Son credenciales que pueden otorgar acceso a los recursos.

1. Multer - Es un middleware de node.js para el manejo multipart/form-data, que se usa principalmente para cargar archivos



#### Deploy 🚀
Puedes ver la aplicacion funcionando en produccion mediante este link: [CONTRATÁ](https://contrata.vercel.app/ "CONTRATÁ").

Si llegaste aqui gracias 🙏🏼 me gusta ser leido, Buen Dia.
