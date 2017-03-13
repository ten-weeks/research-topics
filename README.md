# Research-topics

## ***Validation:***
The Validation data is to make sure that your application is stable and secure. hapi allows this functionality by using the module joi.
 #### Type of validation:
  - Input validation : validate if query parameters are satisfied the condition, as in example below:
  ```js
  server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello ' + request.params.name + '!');
    },
    config: {
        validate: {
            params: {
                name: Joi.string().min(3).max(10)
            }
        }
    }
});
  ```
  - Headers validation
  - Path parameters validation
  - Query parameters validation
  - Payload data validation, as example below:
   ```js
   server.route({
     method : 'POST',
     path : '/form',
     handler : function(req, reply ){
       var email = req.payload.email;
       reply('My eamil is : '+ email);

     },
     config :{
       validate : {
         payload :{
           email : Joi.string().email().required(),
           password : Joi.number().integer().required()

         }
       }
     }
   });
   ```

   ## ***Validation:***
   
