'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProjectSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  date: { type: Date, default: Date.now },
  projectName: String,
  mainImage: {type: String, default: 'http://placehold.it/300x200'},
  projectDescription: String,
  category: String,
  location: String
});

export default mongoose.model('Project', ProjectSchema);
