module.exports = {
  openapi: "3.0.0",
  info: {
    // API informations (required)
    title: "Mini blog", // Title (required)
    version: "1.0.0", // Version (required)
    description: "Mini blog API", // Description (optional)
  },
  basePath: "/", // Base path (optional)
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};
