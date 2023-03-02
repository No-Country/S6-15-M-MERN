import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "CONTRATA API DOCUMENTATION",
    version: "1.0.7",
    description: "API to hire professionals"
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
    {
      url: "https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com",
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      user: {
        type: "object",
        required: ["name", "email", "password", "professional"],
        properties: {
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
          birthdate: {
            type: "string"
          },
          phonecontact: {
            type: "number"
          },
          country: {
            type: "string"
          },
          city: {
            type: "string"
          },
          terms: {
            type: "string"
          },
          idgoogle: {
            type: "string"
          },
          avatarURL: {
            type: "string",
          },
          job: {
            type: "string",
          },
          postalCode: {
            type: "number"
          },
          minimumquantityprice: {
            type: "number",
            min: 0
          },
          professional: {
            type: "boolean",
          },
        },
      },
      job: {
        type: "object",
        required: ["service", "title","description", "jobImageUrl"],
        properties: {
          service: { type: "string" },
          title: { type: "string" },
          description: { type: "string" },
          jobImageUrl: { type: "string" }
        },
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);