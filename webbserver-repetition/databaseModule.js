const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});
const namnListaSchema = new mongoose.Schema({
  names: Array,
});

const NamnLista = mongoose.model("NamnLista", namnListaSchema);

exports.SaveNameList = (names) => {
  var namnList = NamnLista({
    names: names,
  });

namnList.save();
};

exports.ShowNameList = async () => {
  return await NamnLista.find({});
};