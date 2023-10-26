const Member = require("../models/Member");

let memberController = module.exports;
memberController.signup = async (req, res) => {
try{
console.log("POST:cont/signup");
const data = req.body, //requestni body qismidan malumot olamiz.

member = new Member(),

 new_member =  await member.signupData(data);
console.log("new member:",new_member );
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
  
    res.json({state: 'succeed', data:result});
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
