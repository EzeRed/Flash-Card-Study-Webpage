var express = require('express');

var app = express();
var MongoClient = require('mongodb').MongoClient;

var ObjectId = require('mongodb').ObjectId;
 
var response = require('./response');

//parse request body into js object

app.use(express.json());

var database;


const flashcardLayout = [
    'word',
    'definition',
    'learned'
    ]


app.get('/getAllFlashCards', function(req, res) {
    database.collection('flashCards').find().toArray().then(result => {
       
        res.send({ FlashCards: result});
    });


});
//Add endpoint
app.post('/addFlashCard', function(req, res) {
    let flashCard = {
        word: req.body.word,
        definition: req.body.definition,
        learned: req.body.learned
    }

    if(!flashCard.word) {
    res.status(400);
    res.send(response.error('Word is required.'));
    return;
    }

    if(!flashCard.definition) {
        res.status(400);
        res.send(response.error('Definition is required.'));
        return;
      }


      
      database.collection('flashCards').insertOne(flashCard).then(result => {

        res.send(response.success({ result})); 
          
        }).catch(err => {
            res.send(400);
            res.send(response.error('There was an error adding an album'));
        });

        

});
//Delete endpoint
app.post('/deleteFlashCard', function(req, res){
    
    if(!ObjectId.isValid(req.body._id)) {
        res.status(400);
        res.send(response.error('Need a valid ID'));
        return;
      }

    database.collection('flashCards').deleteOne({_id: new ObjectId(req.body._id)}).then(result => {
    res.send({FlashCard: 'Deleted',result});
        })
    
})
//Update endpoint
app.post('/updateFlashCard', function(req, res) {

    const fullFlashCard = req.body

    if(!ObjectId.isValid(req.body._id)) {
        res.status(400);
        res.send(response.error('ID is not valid'));
        return;
    }
    const missProperties = flashcardLayout.filter(property =>
        !fullFlashCard.hasOwnProperty(property) )
  
    if (missProperties.length > 0) {

       res.status(400);
       res.send(response.UpdateError(`The follwing properites are missing: ${missProperties.join(', ')}`));
       return;
   
   }

   if (fullFlashCard.word == '' || fullFlashCard.definition == '' ) {
       res.status(400);
       res.send(response.UpdateError('Properites cannot be empty'));
       return;
   } 
  
   if (typeof fullFlashCard.learned != 'boolean' ) {
    res.status(400);
    res.send(response.UpdateError('Learned has to be Boolean'));
    return;
}


    database.collection('flashCards').updateOne(
        {_id: new ObjectId(fullFlashCard._id)},
        { $set:{word: fullFlashCard.word,
                definition: fullFlashCard.definition,
                learned: fullFlashCard.learned,
                
            }     
    }
    ).then(result => {
        res.send(response.success({Updated: result}));
    }).catch(err => {
        res.status(500);
        res.send(response.UpdateError(err))
    })
})

app.listen(1124, function() {
    MongoClient.connect('mongodb://127.0.0.1:27017').then(connection => {
    
        database = connection.db('salgado-flash-card');
    });
});