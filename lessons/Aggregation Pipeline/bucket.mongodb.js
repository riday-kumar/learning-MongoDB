use("university");

db.students.find();

// make a range of student's age

db.students.aggregate([
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [22, 26, 28, 30, 35],
      default: "under Age",
      output: {
        count: { $sum: 1 },
      },
    },
  },
]);
