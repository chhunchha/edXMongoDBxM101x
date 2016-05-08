var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';

mongodb.MongoClient.connect(uri, function(error, db){
    if(error) {
        console.log(error);
        process.exit(1);
    }
    
    var doc = {
        title: 'Jaws',
        year: 1975,
        director: 'Steven Spielberd',
        rating: 'PG',
        ratings: {
            cirtics: 80,
            audience: 97
        },
        screenplay: ['Peter Ben', 'Carl Gotlieb']
    };
    
    db.collection('movies').insert(doc, function(error, result){
        if(error) {
            console.log(error);
            process.exit(1);
        }
    });
    
    var searchDocs = function(query) {
        db.collection('movies').find(query).toArray(function(error, docs){
            if(error) {
                console.log(error);
                process.exit(1);
            }
            
            console.log('Found docs for query ' + JSON.stringify(query) + ':' + docs.length);
            docs.forEach(function(doc){
                console.log(JSON.stringify(doc));     
            });
            process.exit(0);
        });
    }
    
    // searchDocs({});
    // searchDocs({year: 1976});
    // searchDocs({year: 1975, rating: 'PG'}); // and
    // searchDocs({screenplay: 'Peter Ben'});  // in array
    searchDocs({'ratings.audience': {'$gte': 90}}); // key inside key and gte
})