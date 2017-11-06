var mongoose    = require('mongoose');
var log         = require('./log')(module);

mongoose.connect('mongodb://localhost/test1');
var db = mongoose.connection;

db.on('error', function (err) {
  log.error('connection error:', err.message);
});
db.once('open', function callback () {
  log.info("Connected to DB!");
});

var Schema = mongoose.Schema;

// Schemas
/*var Images = new Schema({
                          kind: {
                            type: String,
                            enum: ['thumbnail', 'detail'],
                            required: true
                          },
                          url: { type: String, required: true }
                        });

var Article = new Schema({
                           title: { type: String, required: true },
                           author: { type: String, required: true },
                           description: { type: String, required: true },
                           images: [Images],
                           modified: { type: Date, default: Date.now }
                         });*/

var Subscribe = new Schema({
                           firstName: { type: String, required: true },
                           lastName: { type: String, required: true },
                           email: { type: String, required: true },
                           startSubscribeDate: { type: Date, required: true },
                           modified: { type: Date, default: Date.now }
                         });

// validation
/*Article.path('title').validate(function (v) {
  return v.length > 5 && v.length < 70;
});*/

// var ArticleModel = mongoose.model('Article', Article);
var SubscribeModel = mongoose.model('Subscribe', Subscribe);

// module.exports.ArticleModel = ArticleModel;
module.exports.SubscribeModel = SubscribeModel;