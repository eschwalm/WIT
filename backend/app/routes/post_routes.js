var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  //CREATE
  app.post('/posts', (req, res) => {
    const post = {
      img: req.body.img,
      description: req.body.description,
      answers: [],
      created_at: Date.now()
    };

    db.collection('posts').insert(post, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  //INDEX
  app.get('/posts', (req, res) => {
    db.collection('posts').find();
  });

  //SHOW
  app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('posts').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  //DELETE
  app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('posts').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Post ' + id + ' deleted!');
      }
    });
  });
};
