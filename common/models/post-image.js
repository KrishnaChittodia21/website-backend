'use strict';
const sharp = require('sharp');

module.exports = function(PostImage) {
  PostImage.remoteMethod(
    'upload', {
      description: 'Uploads a file',
      accepts: [{
        arg: 'ctx',
        type: 'Object',
        http: {
          source: 'context',
        },
      },
      {
        arg: 'options',
        type: 'Object',
        http: {
          source: 'query',
        },
      },
      {
        arg: 'access_token',
        type: 'string',
      },
      {
        arg: 'post_id',
        type: 'string',
      },
      ],
    }
  );
};
