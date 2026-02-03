use("school");

db.teachers.find();

// db.teachers.findOneAndUpdate(
//     {name : "Hridoy Kumar Saha"},
//     {$set:{
//         name : "HKS Hridoy",
//         age : 40,
//         salary : 50000
//     }},
//     {_id:0, age:0},
// )

// db.teachers.findOneAndUpdate(
//     {name : "HKS Hridoy"},
//     {$set:{
//         name : "HKS Kumar",
//         age : 85,
//         salary : 40000
//     }},
//     {
//         returnDocument : "after",
//         projection : {name:1, age : 1, _id:0},
//         upsert : true,
//         sort : {age : 1}
//     }

// )

// db.teachers.findOneAndReplace(
//     {_id : ObjectId('697bba6dce46d49e1e83d029')},
//     {
//         name : "Ringku Singh",
//         age : 25,
//         salary : 150000
//     }
// )

// db.teachers.findOneAndDelete(
//     {name : "Ringku Singh"},
//     {projection :{_id : 0}}
// )

// db.teachers.findOneAndDelete(
//     {name : {$regex:/Das$/}},
//     {returnDocument:"after", sort : {age:1}}
// )
