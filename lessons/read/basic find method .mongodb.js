use("school");

// db.teachers.insertMany([
//     { name: 'Alice', age: 25, salary: 45000 },
//     { name: 'Bob', age: 30, salary: 52000 },
//     { name: 'Charlie', age: 28, salary: 48000 },
//     { name: 'David', age: 35, salary: 65000 },
//     { name: 'Eva', age: 27, salary: 47000 },
//     { name: 'Frank', age: 40, salary: 72000 },
//     { name: 'Grace', age: 32, salary: 59000 },
//     { name: 'Helen', age: 29, salary: 51000 },
//     { name: 'Ian', age: 34, salary: 63000 },
//     { name: 'Jane', age: 26, salary: 46000 },
// ])

// db.teachers.find();
// db.teachers.findOne({age: 25})
// db.teachers.find({age: 25})

// find with projection
// db.teachers.find(
//     {salary: 25000},
//     {_id:0, name:1, salary:1}
// )

// find with projection || using ----> projection() method
// db.teachers.find({salary: 25000}).projection({name:1, age:1, _id:0})

// use of ----> count()
// db.teachers.find({salary : {$gt:50000}}).count()

// use of ----> sort()
// db.teachers.find({age : 25}).sort({name : 1})
// db.teachers.find({age : 25},{name:1, salary:1, _id:0}).sort({salary : 1})

// find() with limit()
// db.teachers.find().limit(4).skip(0);

// find() with limit() and skip()
// db.teachers.find().limit(4).skip(4)
