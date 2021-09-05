getUserDetails: async function(userId){
    var redisStrData;
    var redisData;
    var redisKey="app.home.user."+userId;
    
    try{

        redisStrData=await redis.getKey(redisKey);

        if(redisStrData){
            redisData=JSON.parse(redisStrData);
            return redisData;
        }else{
            
        }

    }catch(e){
        console.log("Redis error ---"+e);
    }

    
    var filters={
        "userId":Number(userId)
    };
    
    var data=[];

    try{


        var data=await userModel.find(filters).read('secondaryPreferred').lean();

        try{
            var redisDataStr=JSON.stringify(data);
            redis.setKey(redisKey,redisDataStr,86400)
        }catch(e){
            console.log("redis error ---"+e);
        }

    }catch(e){
        console.log(e);
        data=[]
    }

    return data;
}