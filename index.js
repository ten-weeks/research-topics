var hapi = require('hapi');
var Joi = require('joi')
var server = new hapi.Server();
server.connection({port:8080});

server.register(require('vision'), function(err) {
    if (err) {
        throw err;
    }
server.route({
  method : 'GET',
  path : '/',
  handler : function(req, reply ){
    reply.view('index');

  }
});

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
server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'template'
    });

});
server.start(function() {
    console.log('listion to 8080', server.info.uri);
});
