use("school");

// db.createCollection("books",{
//     validator:{
//         $jsonSchema:{
//             bsonType:"object",
//             title: "Books Object Validation",
//             required:["title", "author","publishedDate","distributor","price"],
//             properties:{
//                 title:{
//                     bsonType:"string",
//                     description:"Book Title must be a string and required"
//                 },
//                 author:{
//                     bsonType:"string",
//                     description:"Author must be a string and required"
//                 },
//                 publishedDate:{
//                     bsonType:"date",
//                     description:"Published Date must be a Date and required"
//                 },
//                 distributor:{
//                     bsonType:"array",
//                     items:{
//                         bsonType:"string"
//                     },
//                     description:"Distributor must be an Array and required"
//                 },
//                 price:{
//                     bsonType:"int",
//                     minimum: 1,
//                     description:"Book Price must be integer and required"
//                 },
//                 additionalInfo:{
//                     bsonType: "object",
//                     properties:{
//                         authorEmail:{
//                             bsonType:"string",
//                             pattern:"^.+@.+\\..+$",
//                             description:"Author email must be a valid email address"
//                         },
//                         authorPhone:{
//                             bsonType:"string",
//                             pattern:"^[0-9]{11}$",
//                             description:"Phone number must be exactly 11 digits"
//                         }
//                     }
//                 }
//             }
//         }
//     }
// })

// db.books.insertOne({
//     title:"Anondo Dhara",
//     author: "Bebak Saha",
//     publishedDate: new Date("2020-06-12"),
//     distributor: ['PuthiNiloy', 'Panjeri'],
//     price: 300,
//     additionalInfo:{
//         authorEmail:"bebak@gmail.com",
//         authorPhone: "01234567891"
//     }
// })

db.books.find();
