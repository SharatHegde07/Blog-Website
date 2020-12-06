const router=require('express').Router();

let User = require('../models/user.model');

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Erorr:'+err));

});

router.route('/register').post((req,res)=>{
    // console.log(req.body)
    const firstname=req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    console.log({firstname:firstname, lastname:lastname, email:email, password:password});
    const newUser=new User({firstname:firstname, lastname:lastname, email:email, password:password});

    newUser.save()
        .then(()=>res.json('User Added!'))
        .catch(err => res.status(400).json('Erorr :'+ err));

});

router.route('/login').post((req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    User.find({email:email}).then(user =>
        {
            // console.log(res)
            if(user[0].password == password){
                res.json({status:"yes"});
            }
            else{
                res.json({status:"no"});
            }
        }).catch(err => res.json("Not found!"));

});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User Deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports=router;