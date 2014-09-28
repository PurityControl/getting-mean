var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

module.exports.locationsCreate = function (req, res) { 
  sendSuccess(res);
};

module.exports.locationsReadOne = function (req, res) { 
  Loc
    .findById(req.params.locationid)
    .exec(function(err, location) {
      if (!location) {
        sendJsonResponse(res, 404, {
          "message": "locationid not found"
        });
        return;
      } else if (err) {
        sendJsonResponse(res, 404, err);
        return;
      }
      sendJsonResponse(res, 200, location);
    });
};

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

var sendSuccess = function (res) {
  sendJsonResponse(res, 200, {"status": "success"});
};
