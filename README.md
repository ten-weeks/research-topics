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

   ## ***Authentication:***
   `Authentication` is any process by which a system verifies the identity of a User who wishes to access it.

   `Password encryption` is away to encrypt given password into unreadable characters.

   To implement it inside hapi :
    - install bcrypt and hapi-auth-basic module
     ```js
     npm install bcrypt --save
     npm install hapi-auth-basic --save

     ```


    -
     ```js
         const users = {
        john: {
            username: 'john',
            password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
            name: 'John Doe',
            id: '2133d32a'
        }
        };
       const validate = function (request, username, password, callback) {
        const user = users[username];
        if (!user) {
            return callback(null, false);
        }

        Bcrypt.compare(password, user.password, (err, isValid) => {
            callback(err, isValid, { id: user.id, name: user.name });
        });
      };
     ```
   ## ***Cookies and caching:***
   ## ***Templating with helper functions:***
