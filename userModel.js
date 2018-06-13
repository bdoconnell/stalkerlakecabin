// var mongoose = require("mongoose");

// // Save a reference to the Schema constructor
// var Schema = mongoose.Schema;

// // Using the Schema constructor, create a new UserSchema object
// // This is similar to a Sequelize model
// var UserSchema = new Schema({
//   // `username` must be of type String
//   // `username` will trim leading and trailing whitespace before it's saved
//   // `username` is a required field and throws a custom error message if not supplied

//   firstName: {
//     type: String,
//     trim: true,
//     required: "First Name is Required"
//   },
//   // `lastName` must be of type String
//   // `lastName` will trim leading and trailing whitespace before it's saved
//   // `lastName` is a required field and throws a custom error message if not supplied
//   lastName: {
//     type: String,
//     trim: true,
//     required: "Last Name is Required"
//   },

//   cellPhone: {
//     type: String,
//     trim: true,
//     required: "Cell Phone number is Required",
//     // match: "^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$",
//   },


//   // `email` must be of type String
//   // `email` must be unique
//   // `email` must match the regex pattern below and throws a custom error message if it does not
//   // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
//   email: {
//     type: String,
//     unique: true,
//     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
//   },
//   // `date` must be of type Date. The default value is the current date
//   userCreated: {
//     type: Date,
//     default: Date.now
//   }
// });

// // This creates our model from the above schema, using mongoose's model method
// var User = mongoose.model("User", UserSchema);

// // Export the User model
// module.exports = User;












