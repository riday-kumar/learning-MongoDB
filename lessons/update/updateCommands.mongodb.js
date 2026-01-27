use("school");

db.personal.find();

// use of ----> $inc
// db.personal.updateOne(
//     {_id : ObjectId('696ba22526e3fde7d01e2623')},
//     {$inc : {
//         age : 25
//     }}
// )

// use of ----> $mul
// db.personal.updateOne(
//     {_id: ObjectId("69784c631783d3b6e3d4bfeb")},
//     {$mul:{
//         age:2
//     }}
// )

// use of ----> $unset
// selected all the document : {}
// db.personal.updateMany(
//     {},
//     {$unset:{
//         married:""
//     }}
// )

// use of ----> $rename
// db.personal.updateMany(
//     {},
//     {$rename: {"hobbies":"my_hobbies"}}
// )

// use of ----> $currentDate
// db.personal.updateMany(
//     {},
//     {$currentDate:{
//         "lastModified" : true
//     }}
// )

// use of ----> $min
// db.personal.updateOne(
//     {_id: ObjectId('696ba16b26e3fde7d01e2622')},
//     {
//         $min:{
//             age :20
//         }
//     }
// )

// use of ----> $max
// db.personal.updateOne(
//     {_id: ObjectId('696ba0db26e3fde7d01e2621')},
//     {
//         $max:{
//             age :30
//         }
//     }
// )

// Array update method

// use of ----> $addToSet
// db.personal.updateOne(
//     {_id: ObjectId('696ba0db26e3fde7d01e2621')},
//     {
//         $addToSet:{"my_hobbies" : "programming"}
//     }
// )

// use of ----> $push
// db.personal.updateOne(
//     {_id: ObjectId('696ba0db26e3fde7d01e2621')},
//     {$push: {
//         "my_hobbies" : {
//             $each:["playing", "reading","coding"]
//         }
//     }}
// )

// use of ----> $pop
// db.personal.updateOne(
//     {_id: ObjectId('696ba0db26e3fde7d01e2621')},
//     {$pop: {
//         "my_hobbies" : 1
//     }}
// )

// use of ----> $pull ; if 'sports' matched then it will be removed
// db.personal.updateOne(
//     {_id: ObjectId('696ba0db26e3fde7d01e2621')},
//     {$pull: {
//         "my_hobbies" : "sports"
//     }}
// )

// use of ----> $pullAll ; if multiple value wants to delete in an array
// db.personal.updateOne(
//     {_id: ObjectId('696ba0db26e3fde7d01e2621')},
//     {$pullAll: {
//         "my_hobbies" : ["flute","music"]
//     }}
// )

// use of ---->replaceOne
// db.personal.replaceOne(
//     {_id: ObjectId('69784c631783d3b6e3d4bfeb')},
//     {
//         name:"MS Dhoni",
//         age : 37,
//         dob: new Date("1988-05-01"),
//         weight:80.54,
//         kids:1,
//         address:{
//             street:"ak road",
//             city : "dhaka",
//             zip:20002
//         }

//     }
// )
