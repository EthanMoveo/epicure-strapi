/**
 * authentication router
 */

export default {
    routes: [
      {
        method: 'POST',
        path: '/authentications/login',
        handler: 'authentication.login',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'GET',
        path: '/authentications',
        handler: 'authentication.find',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'GET',
        path: '/authentications/:id',
        handler: 'authentication.findOne',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'POST',
        path: '/authentications',
        handler: 'authentication.create',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'PUT',
        path: '/authentications/:id',
        handler: 'authentication.update',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'DELETE',
        path: '/authentications/:id',
        handler: 'authentication.delete',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  