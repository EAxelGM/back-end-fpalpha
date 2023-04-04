Backend realizado por [Axel Gonzalez](https://axel-gonzalez.web.app/) con [`ExpressJS`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Teconologias utilizadas

- MongoDB
- NodeJs con ExpressJS
- Nodemon
- Joi
- Mongoose
- Swagger UI

## Descripcion corta sobre este proyecto

Este Back-End se compone de 2 CRUD mas una una ruta extra donde obtenemos estadisticas

Más información sobre las rutas y/o documentacion de cada una de ellas aqui: [Swagger UI Doc API](https://back-end-books-x7gq7zmvhq-uc.a.run.app/api-docs/) 👈 desplegado en produccion. La primer carga puede ser un poco lenta ya que esta guardado en un Docker con 0 instancias, basicamente es esperar hasta que el back-end encienda por si solo.

## Ejecución de este proyecto en local

Es necesario clonar este repositorio o descargar el .zip

```
git clone https://github.com/EAxelGM/back-end-fpalpha.git
```

Una vez clonado este repositorio es necesario instalar las dependencias

```
cd back-end-fpalpha
npm install
```

por ultimo para la ejecución de este proyecto es

```
npm run dev
```

Si queremos compilar el proyecto para despues desplegarlo a produccion seria:

```
npm run build
```

y para ejecutar el compilado

```
npm run start
```

### Proyecto Front-End

Para obtener mas información sobre el front-end que esta realizado en NextJS 13 aqui dejo el enlace al proyecto 👉 [Link](https://github.com/EAxelGM/front-end-fpalpha)

Ambos proyectos, tanto como este y como el front-end son repositorios publicos.
