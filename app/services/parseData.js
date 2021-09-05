const data = require("../../doc.json");
const redisFunctions = require("../common/redis");

// const value = data.products[0].transactionId;
// // const value = [data.payments.paymentMethods, data.products[0].transactionId];
// console.log(value);

let test = async function () {
  redisFunctions.setKey("file", JSON.stringify(data), 30000);

  let ram = await redisFunctions.getKey("file");
  ram = JSON.parse(ram);
  console.log(`${ram.orderId} , ${JSON.stringify(ram.products)}`);
};
test();

// getUserDetails: async function(userId){
//   var redisStrData;
//   var redisData;
//   var redisKey="app.home.user."+userId;

//   try{

//       redisStrData=await redis.getKey(redisKey);

//       if(redisStrData){
//           redisData=JSON.parse(redisStrData);
//           return redisData;
//       }else{

//       }

//   }catch(e){
//       console.log("Redis error ---"+e);
//   }

//   var filters={
//       "userId":Number(userId)
//   };

//   var data=[];

//   try{

//       var data=await userModel.find(filters).read('secondaryPreferred').lean();

//       try{
//           var redisDataStr=JSON.stringify(data);
//           redis.setKey(redisKey,redisDataStr,86400)
//       }catch(e){
//           console.log("redis error ---"+e);
//       }

//   }catch(e){
//       console.log(e);
//       data=[]
//   }

//   return data;
// }
