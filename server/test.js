'use strict';

var models = require('./server.js').models;

// models.Profile.findOrCreate({
//   name: 'dollu22',
// },
// (err, profile) => {
//   if (err) {
//     console.log('There was an error while creating a record');
//   } else if (profile) {
//     profile.email = 'dollu@gmail.com';
//     profile.save((updateError, updated) => {
//       console.log('updated?', updated);
//     });
//   }
// });

// var toSave = [
//   {name: 'kannu1', email: 'kannu1@gmail.com'},
//   {name: 'kannu2', email: 'kannu2@gmail.com'},
//   {name: 'kannu3', email: 'kannu3@gmail.com'},
//   {name: 'kannu4', email: 'kannu4@gmail.com'},
//   {name: 'kannu5', email: 'kannu5@gmail.com'},
//   {name: 'kannu6', email: 'kannu6@gmail.com'},
//   {name: 'kannu7', email: 'kannu7@gmail.com'},
//   {name: 'kannu8', email: 'kannu8@gmail.com'},
//   {name: 'kannu9', email: 'kannu9@gmail.com'},
//   {name: 'kannu10', email: 'kannu10@gmail.com'},
//   {name: 'kannu11', email: 'kannu11@gmail.com'},
//   {name: 'kannu12', email: 'kannu12@gmail.com'},
//   {name: 'kannu13', email: 'kannu13@gmail.com'},
//   {name: 'kannu14', email: 'kannu14@gmail.com'},
//   {name: 'kannu15', email: 'kannu15@gmail.com'},
//   {name: 'kannu16', email: 'kannu16@gmail.com'},
//   {name: 'kannu17', email: 'kannu17@gmail.com'},
// ];

// toSave.map((obj) => {
//   models.Profile.create(obj, (err, created) => {
//     console.log('created?', created);
//   });
// });

var filter = {
  where: {
    email: {like: 'xyz'},
  },
  order: 'id ASC',
  limit: 10,
  skip: 0,
  fields: {
    email: true,
  },
  // include: {
  //   relation: 'Posts',
  //   scope: {
  //     limit: 5,
  //     order: 'date DESC',
  //     include: {
  //       relation: 'image',
  //       limit: 1,
  //       where: {type: 'thumbnail'},
  //     },
  //   },
  // },
};

models.Profile.findById('5f18b7d12c357a4b5b37cb7d', filter, (err, result) => {
  console.log('found?', result);
});
