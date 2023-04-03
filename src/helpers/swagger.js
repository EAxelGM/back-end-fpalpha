const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "APIs Document",
    description: "your description here",
    termsOfService: "",
    contact: {
      name: "Tran Son hoang",
      email: "son.hoang01@gmail.com",
      url: "https://hoangtran.co",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  paths: {
    "/api/v1/books": {
      get: {
        tags: ["Books"],
        summary: "Get all books in system",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Books",
            },
          },
        },
      },
    },
  },
  definitions: {
    Book: {
      required: ["name", "_id", "companies"],
      properties: {
        _id: {
          type: "string",
          uniqueItems: true,
        },
        /* isPublic: {
          type: "boolean",
        }, */
        title: {
          type: "string",
        },
        /* books: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              amount: {
                type: "number",
              },
            },
          },
        },
        companies: {
          type: "array",
          items: {
            type: "string",
          },
        }, */
      },
    },
    Books: {
      type: "array",
      $ref: "#/definitions/Book",
    },
  },
};

export default swaggerDocument;
