const Product = require("../model/loginModel");

exports.verifyUser = async(req,res)=>{
    try{
        const { password, email } = req.body;
        user = await Product.Verify({ password, email });
        res.send("/login");
        // return user;
    }catch(err){
        let backurl = '/login';
        req.flash('error', err.sqlMessage);
        return res.redirect(backurl);
    }
};
