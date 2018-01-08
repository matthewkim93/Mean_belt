const mongoose = require('mongoose')
var Poll = mongoose.model('Poll')

module.exports ={
    index:(request,response) =>{
      Poll.find({})
        .then(polls => response.json(polls))
        .catch(error => console.log(error))
    },
    create:(request,response) => {
      Poll.create(request.body)
        .then(poll => response.json(poll))
        .catch(error => {
          response.send(400, {error:error})
          console.log(error)
        })
    },
    destroy:(request,response) => {
      Poll.remove({_id:request.params.id})
        .then(poll => response.json(poll))
        .catch(error => console.log(error))
    },
    get:(request,response) => {
      Poll.findOne({_id:request.params.id})
        .then(poll => response.json(poll))
        .catch(error => console.log(error))
    },
    vote:(request,response) => {
      console.log('voting in server....')
      Poll.findByIdAndUpdate({_id:request.params.id},request.body)
        .then(poll => response.json(poll))
        .catch(error => console.log(error))
    }
}
