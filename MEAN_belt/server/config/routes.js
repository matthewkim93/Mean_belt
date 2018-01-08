var pollController = require('../controllers/polls.js')
var path=require('path')

module.exports=function(app){
  app
  .get('/api/poll',pollController.index)
  .post('/api/poll',pollController.create)
  .delete('/api/poll/:id',pollController.destroy)
  .get('/api/poll/:id',pollController.get)
  .put('/api/poll/:id',pollController.vote)
  .all('*',(req,res,next) => {
    res.sendFile(path.resolve('./belt-angular/dist/index.html'))
  })
}
