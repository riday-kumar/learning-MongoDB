use("university");

db.players.find();

// db.players.aggregate([
//   {
//     $addFields: {
//       fullName: {$concat: ["$firstName"," ","$lastName"]},
//       totalRuns: {$sum:"$runs"},
//       firstName:"$$REMOVE",
//       lastName:"$$REMOVE",
//     }
//   }
// ])

// db.players.aggregate([
//   {
//     $addFields: {
//       fullName: {$concat:["$firstName"," ","$lastName"]},
//       city : {
//         $ifNull:["$city","$$REMOVE"]
//       }
//     }
//   }
// ])

// db.players.aggregate([
//   {
//     $addFields: {
//       fullName: {$concat:["$firstName"," ","$lastName"]},
//       city :{
//         $cond:{
//           if:{
//             $eq:["$city","Cumilla"],
//           },
//           then:"$$REMOVE",
//             else:"$city"
//         }
//       }
//     }
//   }
// ])

// db.players.aggregate([
//   {$match:{_id:ObjectId("6982178816a22745bf1a31a0")}},
//   {
//     $addFields: {
//       fullName: {$concat:["$firstName"," ","$lastName"]},
//       "profile" : {age : 30}
//     }
//   }
// ])

// db.players.aggregate([
//   {$match:{_id:ObjectId("6982178816a22745bf1a31a0")}},
//   {
//     $addFields: {
//       fullName: {$concat:["$firstName"," ","$lastName"]},
//       runs : {$concatArrays:["$runs",[70,40]]}
//     }
//   }
// ])

// db.players.aggregate([
//   {$match:{_id:ObjectId("6982178816a22745bf1a31a0")}},
//   {
//     $addFields: {
//       fullName: {$concat:["$firstName"," ","$lastName"]},
//       totalRun : {$sum:"$runs"},
//       averageRun : {$avg:"$runs"}
//     }
//   }
// ])

db.players.aggregate([{ $unwind: "$runs" }]);

// db.players.aggregate([
//   {
//     $project: {
//       fullName : {$concat:["$firstName","-","$lastName"]},
//       _id:0
//     }
//   }
// ])
