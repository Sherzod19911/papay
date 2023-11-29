const Member = require("../models/Member");


let memberController = module.exports;
const jwt = require('jsonwebtoken');
const assert = ("assert");
const Definer = require("../lib/mistake");

memberController.signup = async (req, res) => {
try{
console.log("POST:cont/signup");
const data = req.body, //requestni body qismidan malumot olamiz.

member = new Member(),

 new_member =  await member.signupData(data);

 //TODO 


//console.log("new member:",new_member );
res.json({state: "succeed", data:new_member});
res.send("done");
} catch(err) {
console.log(`ERROR, cont/signup, ${err.message}`);
res.json({state: 'fail',message: err.message});
}
};


memberController.login = async(req, res) => {
  try{
    console.log("POST:cont/login");
    const data = req.body, //requestni badiy qismidan malumot olamiz.
    //console.log(`body:::`,req.body);
    member = new Member(),
    result= await member.loginData(data);

    console.log("result:", result);

    const token = memberController.createToken(new_member);
    //console.log("token:", token);  
    res.cookie('access_token', token, {
      maxAge: 6* 3600*1000, 
      httpOnly: true
    });
  
    res.json({state: 'succeed', data: new_member});
    //res.send("done");
    } catch(err) {
    console.log(`ERROR, cont/login, ${err.message}`);
    res.json({state: 'fail',message: err.message});
    }
};

memberController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifadasiz");
};

memberController.createToken  = (result) => {
  try {
    const upload_data = {
      _id: result._id,
      mb_nick: result.mb_nick,
      my_type: result.mb_type
    };

    const token = jwt.sign(
      upload_data,
      process.env.SECRET_TOKEN,
      {expiresIn: "6H",
    });

    assert.ok(token,Difiner.auth_err2);
    return token
  } catch(err) {
    throw err;
  }
}
