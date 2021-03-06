const mongoose = require("mongoose");

const BrewBatchSchema = new mongoose.Schema({
    number: Number,
    style: String,
    tank:String,
    batch: [
      {id: String,
       strikeVolume: Number,
       mashTemp: Number,
       spargeVolume: Number,
       startingBrix: Number,
       kettleVolume: Number,
       whirlPoolVolume: Number,
       fmVolume: Number,
       tankTemp: Number,
       runOffTemp: Number,
       notes: String,
       enter: Boolean,
       submit: Boolean
      }
    ]
  });

const BrewBatch = mongoose.model('BrewBatch', BrewBatchSchema);
module.exports = BrewBatch;