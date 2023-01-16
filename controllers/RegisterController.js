import User from "../models/User.js"
import jwt from "jsonwebtoken"


export const Register = async (req,res) => {
    
    try {
          const user =  await User.create({
            nom:req.body.nom,
            prenom:req.body.prenom,
            email:req.body.email,
            password:req.body.password,
           }) 
           res.status(200).json({user})
    } catch (err) {
        res.status(404).send("something went wrong");
        console.log(err);
    }
}


export const Login = async (req,res) => {
  const user =  await User.findOne({email : req.body.email, password: req.body.password});



  if(user) {
     const token = jwt.sign({
      nom: user.nom,
      email: user.email
    
     },'secret123')
     console.log({user:token});
    return res.json({status: 200, user:token});

  } else {
    return res.json({status: "error", user:false})
  }

}