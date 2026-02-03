use("school");

// db.teachers.updateMany(
//     {subject : {$exists : false}},
//     {$set:{
//         subject : "English"
//     }}
// )

// db.teachers.aggregate([
//     {$match: {
//       age : {$gt : 20}
//     }}
// ])

// db.teachers.aggregate([
//     {$match: {
//       $and : [
//         {age : {$gt : 20}},
//         {subject : "English"}
//       ]
//     }}
// ])

// db.teachers.aggregate([
//     {
//         $match: {
//           age : {$lt :30}
//         }
//     },
//     // {$count: 'names'},
//     {$sort: {
//       age: 1, name : 1
//     }},
//     {
//         $project: {
//           _id : 0,
//           name : 1,
//           salary : 1
//         }
//     }
// ])

// db.teachers.aggregate([
//     {$sort: {
//       age: 1,
//       name: 1
//     }},
//     {$project: {
//       name: 1,
//       age : 1,
//       subject : 1,
//       _id : 0,
//       isValidAge : {$gt : ["$age" ,20]}
//     }}
// ])

// db.teachers.aggregate([
//     {$sortByCount:
//       "$subject"
//     }
// ])

// db.teachers.aggregate([
//     {$match: {
//       age : {$gt : 20}
//     }},
//     {$sort : {age : 1}},
//     {$project : {name :1, age : 1, salary:1, _id:0}},
//     {$skip: 2},
//     {$limit: 1},
// ])

db.teachers.aggregate([
  {
    $sample: {
      size: 2,
    },
  },
]);
