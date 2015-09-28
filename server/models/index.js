'use strict';

var _ = require('lodash'),
  fs = require('fs'),
  path = require('path'),
  Sequelize = require('sequelize'),
  db = require('../../config').db;

var seqOpts = {
  dialect: 'mysql',
  host: db.host,
  logging: false,
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    underscored: true,
    freezeTableName: true
  }
};

function createSequelize() {
  if (!_.isObject(db)) {
    return;
  }
  return new Sequelize(db.name, db.username, db.password, seqOpts);
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function(directory) {
    var sequelize = createSequelize(),
      directoryPath = __dirname + '/' + directory;
    db[directory] = {};

    fs.readdirSync(directoryPath)
      .forEach(function(file) {
        var model = sequelize['import'](path.join(directoryPath, file)),
          name = _.camelCase(model.name);
        db[directory][name] = model;
      });

    db[directory].sequelize = sequelize;
  });

db.Sequelize = Sequelize;

module.exports = db;
