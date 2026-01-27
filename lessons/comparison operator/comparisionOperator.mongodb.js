use("school");

// db.teachers.find()

// Find all the teachers who get more than 5000 in salary and sort them according to the ascending order of salary.
// db.teachers.find({salary: {$gt : 50000}}).sort({salary:1})

// Get all the teachers who are more then or equal to 20 years old
// db.teachers.find({age : {$gte:20}}).sort({age : 1})

// get that teachers who are 25 years old
// db.teachers.find({age : {$eq:25}})

// get that teachers who are less then 25 years old
// db.teachers.find({age : {$lt:25}})

// get that teachers who get salary 30000 or 5000
// db.teachers.find({salary:{$in:[30000, 46000]}})

// get that teachers who are not 40 years old
// db.teachers.find({age : {$ne: 40}})

// show all the teachers data without 'Isan Kisan'
// db.teachers.find({name:{$ne:"Isan Kisan"}})

// get that teachers who are less then 25 years old
// db.teachers.find({age : {$lt : 25}})

// who are less or equal to 20 years old and updated salary will be 50000

db.teachers.updateMany({ age: { $lte: 20 } }, { $set: { salary: 50000 } });
