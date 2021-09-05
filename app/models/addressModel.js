// "use strict"

// var mongoose = require('mongoose');
// try{
//     var mongoConnect=require('/etcre('./services/communicateServices');
//     // var appDetails=require('../../common/appData');

// var dbCreds={
//     userName:"mahendra",
//     userSecret:"test",
//     database:"users",
//     access:"readWrite",
//     applicationId:"t001"
// }

// var connectionObject=mongoConnect.getConnection(dbCreds.userName,dbCreds.userSecret,dbCreds.database,dbCreds.access,dbCreds.applicationId,mongoose);
// var connection=connectionObject.connection;

// var addressSchema = mongoose.Schema({
//         addressId: {
//                 type: 'Number',
//                 required: true,
//                 unique: true
//         },
//         addressType: {
//                 type: 'String',
//                 required: true
//         },
//         userId: {
//                 type: 'Number',
//                 required: true,
//         },
//         name: {
//                 type: 'String',
//                 required: true
//         },
//         number: {
//                 type: 'String',
//                 required: true
//         },
//         alternateNumber: {
//                 type: 'String',
//         },
//         address: {
//                 type: 'String',
//                 required: true
//         },
//         area: {
//                 type: 'String',
//                 required: true
//         },
//         instructions: {
//                 type: 'String',
//                 default: "NA"
//         },
//         city: {
//                 type: 'String',
//                 required: true
//         },
//         state: {
//                 type: 'String',
//                 required: true
//         },
//         country: {
//                 type: 'String',
//                 required: true
//         },
//         pincode: {
//                 type: 'String',
//                 required: true
//         },
//         isDefault: {
//                 type: 'Number',
//                 required: true
//         },
//         isDeleted: {
//                 type: 'Number',
//                 required: true
//         },
//         isConfirmed: {
//                 type: 'Number',
//                 required: true
//         },
//         confirmedBy: {
//                 type: 'String',
//                 required: true
//         },
//         isNumberVerified: {
//                 type: 'Number',
//                 required: true
//         },
//         addedBy: {
//                 type: 'String',
//                 required: true
//         },
//         dateAdded: {
//                 type: 'Number',
//                 required: true
//         },
//         dateDeleted: {
//                 type: 'Number'
//         },
//         geoLocation: {
//                 latitude: Number,
//                 longitude: Number
//         }
// });

// // var citySchema = mongoose.Schema({
// //     cityId:{type: Number},
// //     cityName: {type: String},
// //     stateId: {type: Number},
// //     stateName: {type: String},
// //     abbreviation: {type: String}
// // });

// // var stateSchema = mongoose.Schema({
// //     stateId:{type: Number},
// //     stateName:{type: String},
// //     abbrevation: {type: String},
// //     countryId: {type: Number}
// // });

// // var counterSchema = mongoose.Schema({
// //     counterName: {
// //         type: 'String',
// //         required: true,
// //         unique: true
// // 	},
// // 	counterSeq: {
// //         type: 'Number',
// //         required: true
// // 	}
// // });

// var addressObject={
//     addressModel:connection.model('address', addressSchema, 'addresses'),
// //     cityModel:connection.model('city', citySchema, "cities"),
// //     stateModel:connection.model('state', stateSchema, "states"),
// //     counterModel:connection.model('counters', counterSchema, 'counters')
// }

// module.exports = addressObject;
