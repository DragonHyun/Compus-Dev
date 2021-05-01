const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Test API',
            version: '1.0.0',
            description: 'Test API with expressssssssss',
        },
    },
    apis: ['/Routes/*']
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs
}