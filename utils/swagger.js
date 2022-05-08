const swaggerJsDoc = require('swagger-jsdoc');

module.exports = swaggerJsDoc({
    definition:{
        openapi:'3.0.0',
        info:{
            title:'CourtCanva Apis Documentation',
            version:'1.0.0',
            contact:{
                name:'John',
                email:'jzeva1213@gmail.com'
            },
            description:'This is the API documentation for CourtCanva'
        }
    },
    apis:['controllers/*.js'],
})