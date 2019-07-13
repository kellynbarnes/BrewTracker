const Fermenter = require("../Models/FermenterModel");

exports.update =  function update(request, response) {
    const newBatch = request.body;
    const findTank = {'tank': newBatch.tank};
    const updateTank = {'$set': {
            'number': newBatch.number,
            'style' : newBatch.style,
            'tankTemp': newBatch.tankTemp,
            'runOff': newBatch.runOff,
            'status': newBatch.status
            },
            '$push': {'bbls': newBatch.batch, 
                      'brix': newBatch.brix}
        }      
    Fermenter.findOneAndUpdate(findTank, updateTank, (err) => {
        if (err) return console.error(err);
        return response.sendStatus(200)
    })  
}

exports.list =  function list(request, response) {
    Fermenter.find({}, (err, fermenter) => {
        if (err) return console.error(err);
        return response.json(fermenter);
    })    
}
  