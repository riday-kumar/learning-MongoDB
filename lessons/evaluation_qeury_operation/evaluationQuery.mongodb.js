use("school");

// db.teachers.insertMany([
//   {
//     name: "Rahim Uddin",
//     age: 28,
//     salary: 30000,
//     subject: "Math",
//     experience: 4,
//     email: "rahim@gmail.com"
//   },
//   {
//     name: "Karim Ahmed",
//     age: 35,
//     salary: 45000,
//     subject: "Physics",
//     experience: 10,
//     email: "karim@yahoo.com"
//   },
//   {
//     name: "Nusrat Jahan",
//     age: 24,
//     salary: 22000,
//     subject: "English",
//     experience: 2,
//     email: "nusrat@gmail.com"
//   },
//   {
//     name: "Sumon Das",
//     age: 42,
//     salary: 60000,
//     subject: "Chemistry",
//     experience: 15,
//     email: "sumon@school.edu"
//   },
//   {
//     name: "Rina Akter",
//     age: 30,
//     salary: 38000,
//     subject: "Biology",
//     experience: 6,
//     email: "rina@gmail.com"
//   },
//   {
//     name: "Hasan Ali",
//     age: 27,
//     salary: 25000,
//     subject: "ICT",
//     experience: 3,
//     email: "hasan@college.edu"
//   }
// ])

// db.teachers.find({age : {$gt : 35}})

// db.teachers.find({name : {$regex : /spar/i}})
db.teachers.find({ name: { $regex: "^Sp" } });
