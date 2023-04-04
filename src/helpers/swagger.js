const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "APIs Document Axel Gonzalez",
    description: "Hola.",
    termsOfService: "",
    contact: {
      name: "Edgar Axel Gonzalez Martinez",
      email: "axel-canelo@hotmail.com",
      url: "https://axel-gonzalez.web.app/",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/api/v1/estadisticas": {
      get: {
        tags: ["Estadisticas"],
        summary: "Obtienes unas estadisticas de los libros leidos.",
        parameters: [],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Estadisticas",
            },
          },
        },
      },
    },
    "/api/v1/books-read": {
      get: {
        tags: ["BooksRead"],
        summary: "Obtener todos los libros leídos.",
        responses: {
          200: {
            description: "Lista de todos los libros leídos.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/BooksRead",
              },
            },
          },
        },
      },
      post: {
        tags: ["BooksRead"],
        summary: "Agregar un libro leído.",
        parameters: [
          {
            name: "book",
            in: "body",
            description: "Datos del libro leído.",
            required: true,
            schema: {
              $ref: "#/definitions/BooksRead",
            },
          },
        ],
        responses: {
          200: {
            description: "Libro agregado correctamente.",
            schema: {
              $ref: "#/definitions/BooksRead",
            },
          },
        },
      },
    },
    "/api/v1/books-read/{id}": {
      get: {
        tags: ["BooksRead"],
        summary: "Obtener un libro leído por ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID del libro leído.",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Libro encontrado.",
            schema: {
              $ref: "#/definitions/BooksRead",
            },
          },
          404: {
            description: "Libro no encontrado.",
          },
        },
      },
      put: {
        tags: ["BooksRead"],
        summary: "Actualizar un libro leído por ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID del libro leído.",
            required: true,
            type: "string",
          },
          {
            name: "book",
            in: "body",
            description: "Datos actualizados del libro leído.",
            required: true,
            schema: {
              $ref: "#/definitions/BooksRead",
            },
          },
        ],
        responses: {
          200: {
            description: "Libro actualizado correctamente.",
            schema: {
              $ref: "#/definitions/BooksRead",
            },
          },
          404: {
            description: "Libro no encontrado.",
          },
        },
      },
      delete: {
        tags: ["BooksRead"],
        summary: "Eliminar un libro leído por ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID del libro leído.",
            required: true,
            type: "string",
          },
        ],
        responses: {
          204: {
            description: "Libro eliminado correctamente.",
          },
          404: {
            description: "Libro no encontrado.",
          },
        },
      },
    },
    "/api/v1/books-no-read": {
      get: {
        tags: ["BooksNoRead"],
        summary: "Obtener todos los libros No leídos.",
        responses: {
          200: {
            description: "Lista de todos los libros leídos.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/BooksNoRead",
              },
            },
          },
        },
      },
      post: {
        tags: ["BooksNoRead"],
        summary: "Agregar un libro No leído.",
        parameters: [
          {
            name: "book",
            in: "body",
            description: "Datos del libro leído.",
            required: true,
            schema: {
              $ref: "#/definitions/BooksNoRead",
            },
          },
        ],
        responses: {
          200: {
            description: "Libro agregado correctamente.",
            schema: {
              $ref: "#/definitions/BooksNoRead",
            },
          },
        },
      },
    },
    "/api/v1/books-no-read/{id}": {
      get: {
        tags: ["BooksNoRead"],
        summary: "Obtener un libro No leído por ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID del libro leído.",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Libro encontrado.",
            schema: {
              $ref: "#/definitions/BooksNoRead",
            },
          },
          404: {
            description: "Libro no encontrado.",
          },
        },
      },
      put: {
        tags: ["BooksNoRead"],
        summary: "Actualizar un libro No leído por ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID del libro leído.",
            required: true,
            type: "string",
          },
          {
            name: "book",
            in: "body",
            description: "Datos actualizados del libro leído.",
            required: true,
            schema: {
              $ref: "#/definitions/BooksNoRead",
            },
          },
        ],
        responses: {
          200: {
            description: "Libro actualizado correctamente.",
            schema: {
              $ref: "#/definitions/BooksNoRead",
            },
          },
          404: {
            description: "Libro no encontrado.",
          },
        },
      },
      delete: {
        tags: ["BooksNoRead"],
        summary: "Eliminar un libro No leído por ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID del libro No leído.",
            required: true,
            type: "string",
          },
        ],
        responses: {
          204: {
            description: "Libro eliminado correctamente.",
          },
          404: {
            description: "Libro no encontrado.",
          },
        },
      },
    },
  },
  definitions: {
    BooksRead: {
      type: "object",
      properties: {
        title: {
          type: "string",
          description: "Título del libro.",
          example: "El código Da Vinci",
          required: true,
        },
        start_date: {
          type: "string",
          format: "date",
          description: "Fecha de inicio de la lectura.",
          example: "2022-03-25",
        },
        end_date: {
          type: "string",
          format: "date",
          description: "Fecha de finalización de la lectura.",
          example: "2022-03-29",
        },
        qualification: {
          type: "number",
          description:
            "Calificación otorgada al libro en una escala del 1 al 5.",
          example: 4,
        },
        review: {
          type: "string",
          description: "Reseña del libro.",
          example: "Me gustó mucho el libro, es muy interesante.",
        },
        id_open_library: {
          type: "string",
          description: "ID del libro en Open Library.",
          example: "OL123456M",
        },
        info_open_library: {
          type: "object",
          description:
            "Información adicional del libro obtenida de Open Library.",
          example: {
            editorial: ["Editorial XYZ"],
            pages: 500,
            authors: "Dan Brown",
          },
        },
      },
    },
    BooksNoRead: {
      type: "object",
      properties: {
        title: {
          type: "string",
          description: "Título del libro.",
          example: "El código Da Vinci",
          required: true,
        },
        id_open_library: {
          type: "string",
          description: "ID del libro en Open Library.",
          example: "OL123456M",
        },
        info_open_library: {
          type: "object",
          description:
            "Información adicional del libro obtenida de Open Library.",
          example: {
            publishers: ["Editorial XYZ"],
            pages: 500,
            authors: "Dan Brown",
          },
        },
      },
    },
    Estadisticas: {
      type: "object",
      properties: {
        books_read: { type: "number" },
        pages_read_total: { type: "number" },
        pages_read_average: { type: "number" },
        qualification_total: { type: "number" },
        qualification_average: { type: "number" },
      },
    },
  },
};

export default swaggerDocument;
