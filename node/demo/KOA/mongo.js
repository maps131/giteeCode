const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema
var info = new Schema({

})
const Cat = mongoose.model('info', info);

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));