'use strict';

var pixelsByDate = [
  'SELECT * FROM pixel_events',
  'WHERE eventDate = :eventDate',
  'ORDER BY eventDateTime DESC;'
].join(' ');

module.exports = function(sequelize) {
  var pixels;

  var classMethods = {
    pixelByDate: function(date) {
      return sequelize.query(pixelsByDate, {
        replacements: { 'eventDate': date },
        type: sequelize.QueryTypes.SELECT
      });
    }
  };

  pixels = sequelize.define('pixels', {}, {
    timestamps: false,
    classMethods: classMethods
  });

  return pixels;
};