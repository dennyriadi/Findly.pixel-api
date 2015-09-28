'use strict';

var dmpModel = require('../../models').dmp,
  RequestHandler = require('../request-handler');

var routePath = '/v1/pixel';

function pixelHandler(req, res, next) {
  var date = req.query.eventDate,
    requestHandler = new RequestHandler(req, res, next);

  requestHandler.serveRequest(
    function() {
      return dmpModel.pixels.pixelByDate(date);
    },
    function(data) {
      return data;
    }
  );
}

module.exports = function(pathPrefix, server) {
  server.get(pathPrefix + routePath, pixelHandler);
};