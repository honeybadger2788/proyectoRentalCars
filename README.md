<div align="center">![logo_4](uploads/9e5afb7096528f250384fcc38b6cc5d1/logo_4.png)</div>

# Proyecto Integrador

![smartmockups_lblip1ik](uploads/3e3e93e51fef8c59f1f9c3277287121b/smartmockups_lblip1ik.jpg)

Link del demo en vivo: http://grupo2-frontend.s3-website.us-east-2.amazonaws.com/

Aplicación fullstack para realizar reserva de autos por los 6 miembros del grupo 2. Desarrollado a lo largo de 2 meses en 4 sprints de dos semanas cada una.

# Objetivos

El objetivo principal es entregar un repositorio de GitLab que incluya todo el código necesario para la aplicación cumpliendo los requisitos del PM, incluyendo el frontend, el backend, y los tests. Además, se configuró el pipeline de CI/CD utilizando el ambiente de AWS proporcionado, para que la aplicación se pueda desplegar y actualizar de forma automatizada.

Como cierre del primer track de la carrera, esperamos haber aplicado lo aprendido a lo largo de dos años y haber adquirido nuevas habilidades en el proceso. Esto incluye habilidades técnicas como el uso de git y todos los conceptos del back, front, testing e infraestructura. Así como habilidades blandas como la comunicación y la colaboración en un equipo.

# Tech Stack

- **Infraestructura**: AWS (Beanstalk, S3, RDS)
- **Front**: Javascript, React
- **Back**: Java, Spring, Hibernate, MySQL
- **Testing**: Selenium IDE, Jest
- **Herramientas**: Git, GitLab, IntelliJ, VS Code 

# Integrantes
Podés conocer más sobre cada integrante del equipo y datos de contacto haciendo click en cada link correspondiente!

- [Ariadna Naya](ariadna-naya) - [Backend developer]
- [Andrea Lin](andrea-lin) - [ Frontend developer ] React | Javascript | Typescript | Redux
  - Implementar los componentes React según los diseños de Figma.
  - Implementar diseño responsive en todos los layout y componentes.
  - Conectar el front con el REST API diseñado por el equipo, para renderizar los detalles del producto y realizar la reserva.
- [Noelia Carosella](noelia-carosella) - [Fullstack developer] React | Javascript | Java | MySql
  - Implementar los componentes React según los diseños de Figma
  - Implementar diseño responsive en todos los layout y componentes
  - Conectar el front con el REST API diseñado por el equipo, para realizar las operación de login, signup y renderizar el listado de reservas por usuario.
  - Diseñar el modelo de Características para aplicar a la base de datos.
  - Aplicar Spring Security y generación de JWT para solicitar autorización en los endpoints requeridos.
  - Desarrollar filtros por ciudad. 
- [Juan Pablo Montivero](juan-pablo-montivero) - [Backend developer | DB Analyst]
  - Diseñar, crear y administrar la base de datos MySql.
  - Crear operaciones CRUD en el backend y conectar modelos con tablas.
  - Implementar endpoints y trabajar en la solución de problemas de integración. 
  - Crear scripts y definir el estado final del DER.
- [Justo Marelli](justo-marelli) - [Backend developer] 
  - Diseñar, crear y administrar la base de datos MySql.
  - Crear operaciones CRUD en el backend y conectar modelos con tablas.
  - Implementar endpoints y trabajar en la solución de problemas de integración.
  - Crear scripts y definir el estado final del DER.
- [Christian Borrás Torres](christian-borras-torres) - [QA engineer]
  - Diseñar e implementar los casos de prueba de la aplicación.
  - Realizar test exploratorios a la aplicación en busqueda de fallos o errores.
  - Hacer la revisión de los endpoints de la API's con Postman. 
  - Implementar pruebas unitarias y funcionales en el Front con Jest.
  - Automatizar los casos de prueba, con el fin de realizar las pruebas de humo y de regresión de la aplicación..


# Metodología de trabajo

### Scrum
El proyecto se realizó con la metodología Scrum, que es un marco de trabajo ágil que se utiliza para el desarrollo de proyectos en equipo. Se basa en la idea de que el equipo se auto-organiza para completar tareas y alcanzar objetivos en un corto período de tiempo llamado sprint. 

Tuvimos 4 Sprints, de dos semanas de duración cada una. El primer Sprint fue el más difícil como también el que más aprendimos, ya que era un formato nuevo para nosotros de trabajar juntos. Con el tiempo mejoramos la comunicación utilizando los encuentros en Zoom, mensajes de Whatsapp, organizando los issues con Gitlab, etc.

### Asignación de roles
La asignación de roles y tareas surgió de forma natural. Si bien todo el equipo es capaz de desempeñar tareas en todas las ramas del proyecto, cada uno tenía una o dos áreas de mayor fortaleza, además de que alguno de los integrantes ya tenían experiencia laboral en alguna de ellas. 

Durante el primer Sprint, entre todos nos pusimos de acuerdo en que rol tomaría cada uno. Las tareas que fue tomando cada uno corresponden a su rol en primer lugar, y en segundo a la disponibilidad de tiempo o carga que cada uno tenía en ese sprint. Hubo sprints donde todos tomamos issues de front, y otros donde todos tomamos issues de back con el fin de balancear la carga laboral. 



# Bitácora
https://docs.google.com/document/d/1N2Ug1tUGgAL8htHlwOsFs8Wruoe6uD0ljbm912jgE0g/edit#heading=h.7mbko7lcogkf

# Documentación técnica

## Componentes y diagramas de la aplicación
![Notes_221213_125204](uploads/a64ed31901332055fb8a1cf8863b3455/Notes_221213_125204.jpg)

La arquitectura de esta aplicación web se basa en el patrón MVC (model-view-controller).

El frontend de la aplicación se encuentra alojado en un servicio de Amazon Web Services (AWS) llamado S3, y está desarrollado en React, HTML, CSS y Javascript. Los usuarios acceden a la aplicación web mediante un navegador web, y pueden realizar peticiones a través del frontend a los endpoints de la API REST del backend.

El backend de la aplicación se encuentra en un servidor EC2 de AWS y está desarrollado en Java y Spring. Este servidor se encarga de recibir las peticiones del frontend y realizar consultas y modificaciones en la base de datos MySQL, que se encuentra en un servicio de AWS llamado RDS. Una vez completada la operación, el backend envía una respuesta al cliente que realizó la petición inicial.

En resumen, esta arquitectura de aplicación web se divide en tres partes principales: el frontend, el backend y la base de datos. Los usuarios acceden al frontend a través de un navegador web, y realizan peticiones a los endpoints del backend para obtener o modificar información en la base de datos. El backend se encarga de recibir y procesar las peticiones y de enviar una respuesta al cliente.

## Estructura y diagrama de la infraestructura

![image](uploads/94b10a082f4c247bcfee938f7ecd33cf/image.png)

Amazon S3 es un servicio de almacenamiento en la nube altamente duradero y escalable. Se puede usar para almacenar una amplia gama de datos, incluidos texto, imágenes, videos y artefactos de aplicaciones.

Amazon Elastic Beanstalk es una plataforma como servicio (PaaS) totalmente administrada que facilita la implementación, ejecución y escalado de aplicaciones web. Admite una variedad de marcos y lenguajes de programación, incluidos Java, Node.js, PHP y Ruby on Rails.

Amazon RDS es un servicio de base de datos administrado que facilita la configuración, el funcionamiento y el escalado de una base de datos relacional en la nube. Admite motores de bases de datos populares, como MySQL, PostgreSQL y Microsoft SQL Server.

En esta infraestructura, el bucket S3 se usa para almacenar el frontend mientras que la aplicación backend se ejecuta en una (o más) instancias EC2 y usa la base de datos RDS para almacenar la información necesaria para la app. Esta configuración permite una alta disponibilidad y escalabilidad, ya que el depósito de S3 y la base de datos de RDS pueden manejar automáticamente el aumento del tráfico y las necesidades de almacenamiento de datos.

En general, esta infraestructura proporciona una solución segura, escalable y de alta disponibilidad para hospedar una aplicación web y almacenar sus datos en la nube.

## Estructura y diagrama de la base de datos

La base de datos se construyó con MySQL y se utilizó el framework Hibernate como herramienta de mapeo objeto-relacional (ORM) para agilizar la relación con el backend de Java. Actualmente, funciona en la nube mediante el servicio de bases de datos relacionales de Amazon (Amazon RDS). 
Las tablas principales, según las necesidades del negocio de alquiler de autos, son Car y Users, que mantienen entre sí una relación ManyToMany mediada por la tabla Booking. El resto de las tablas se ordenan alrededor de la relación principal, según el siguiente esquema:
![EER_Diagram_-_DHBooking](uploads/ca1ecb6e39eb6abae0aeec4436affe4d/EER_Diagram_-_DHBooking.png)


### Creación de la base de datos

La creación de la estructura de la base de datos ocurre al ejecutar el software por primera vez, aunque sin datos precargados. Para asegurar un correcto funcionamiento, se recomienda ejecutar el siguiente script para añadir datos dummy a la BD una vez creada:
[DumpDHBookingOnlyData.sql](uploads/1b244464311dc32f76e93ac16e9fd559/DumpDHBookingOnlyData.sql)

Si se prefiere crear la base de datos completa junto a los datos dummy antes de realizar la primera ejecución del software, puede ejecutarse este script en lugar del anterior:
[DumpDHBookingStructureData.sql](uploads/7a2ab58a2784fe88f3b2028bc4ce0722/DumpDHBookingStructureData.sql)

## Ambiente de desarrollo
### Buenas prácticas a la hora de desarrollar
El repositorio está divido en dos principales carpetas: backend y frontend, con el respectivo código. También se organizó los archivos en carpetas siguiendo las buenas prácticas que aprendimos en clase.

Para mantener la consistencia, nos pusimos de acuerdo para que el proyecto esté todo programado en inglés.

Para cada issue, nueva funcionalidad o bug fix, creamos ramas nuevas desde development para despues abrir un merge request.

### Buenas prácticas respecto a los commits, merges y el uso de branches
Luego de tener inconvenientes durante la primera semana con Git, se armó este documento para guiar en el proceso de colaboración con Git. <br>
[gitFlow__1_.txt](uploads/74f745c57725bc9021a272f9489697c7/gitFlow__1_.txt)

## Documentación Testing

Sprint 1
* [Documento de pruebas](Documento-de-pruebas)
* [Notas](Notas)

Sprint 2
* [Documento de pruebas Sprint 2](Documento-de-pruebas-Sprint-2)
* [Test Exploratorio](Test-Exploratorio)
* [Archivos de Selenium](Archivos-de-Selenium)

Sprint 3
* [Documento de pruebas Sprint 3](Documento-de-pruebas-Sprint-3)
* [Test Exploratorio Sprint 3](Test-Exploratorio-Sprint-3)
* [Pruebas de Selenium](Pruebas-de-Selenium)

Sprint 4
* Reporte final testing: 

https://drive.google.com/file/d/1jtJwhVAlWrXFCO3KIl__3pptgWqK5Srv/view?usp=sharing

* Métrica de casos de prueba:

![casos_de_uso](uploads/db698e958092e95472d02f7823fc8063/casos_de_uso.png)

* Test Suites Jest:
![jest_tests](uploads/12e91d9fcd9583bceccf5ce2b23ba90b/jest_tests.png)

* Pruebas Selenium IDE: [Proyecto_Integrador.side](uploads/7b304ea86f2ed552e84b00dbc39f8297/Proyecto_Integrador.side)

* Cobertura: [index.html](uploads/dcdb4a50a4e16bd93a42368338e3c8cb/index.html)
 ![coverage](uploads/6e420b5af0c3cc415f05ad425ec79cca/coverage.png)

## Documentación Postman
- Sprint 1: https://documenter.getpostman.com/view/17796629/2s8YemwEyW
- Sprint 2: https://documenter.getpostman.com/view/17796629/2s8YsoyuSV
- Sprint 3: https://documenter.getpostman.com/view/17796629/2s8YsoyuSV
- Sprint 4: https://documenter.getpostman.com/view/24048087/2s8YzUxMFG
