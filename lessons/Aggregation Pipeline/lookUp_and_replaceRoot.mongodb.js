use("university");

// db.createCollection("library")

// db.students.find()

// db.library.insertMany([
//     {_id : 1, book_name : "Math 1st paper", stu_id :4},
//     {_id : 2, book_name : "English Story", stu_id :10},
//     {_id : 3, book_name : "Pather Paichali", stu_id :9},
//     {_id : 4, book_name : "GitanJali", stu_id :2},
// ])

// db.library.find()

// db.library.aggregate([
//     {$lookup: {
//       from: "students",
//       localField: "stu_id",
//       foreignField: "_id",
//       as: "library_student"
//     }}
// ])

// db.students.aggregate([
//     {$lookup: {
//       from: "library",
//       localField: "_id",
//       foreignField: "stu_id",
//       as: "BookTaken"
//     }},
//     {$unwind: {
//       path: "$BookTaken"
//     }}
// ])

db.library.aggregate([
  {
    $lookup: {
      from: "students",
      localField: "stu_id",
      foreignField: "_id",
      as: "library_student",
    },
  },
  {
    $replaceRoot: {
      newRoot: {
        $mergeObjects: [{ $arrayElemAt: ["$library_student", 0] }, "$$ROOT"],
      },
    },
  },
  { $project: { library_student: 0 } },
]);
