use("school");

db.teachers.find().count();

// db.teachers.find({
//     $and :[{age : {$lt : 25}},
//         {salary : {$gt : 25000}}]
// })

// db.teachers.find({
//     $and : [{age : {$gt : 25}},
//         {age : {$lt : 30}}]
// },{_id:0, name:1, salary:1}).sort({age : 1})

// db.teachers.find({
//     $or:[{age : {$eq : 40}},{salary : {$gt : 60000}}]
// }).sort({salary : 1})

// db.teachers.find({
//     $nor:[{age : {$eq : 40}},{salary : {$gt : 60000}}]
// }).sort({salary : 1})

// db.teachers.find({
//     age : {$not : {$lt : 40}}
// })

// db.teachers.deleteOne({
//     $and : [{name : "Jane"},{age : 26}]
// })
