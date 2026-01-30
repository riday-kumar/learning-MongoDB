use("school");

// db.teachers.find({name : {$exists : true}})
db.teachers.find({ age: { $type: ["int", "double"] } });
