const Product = require("../model/registerModel");


// exports.getAllGenre = async (req,res) => {
//     try{
//         const products = await Product.getAll();
//         title = "Register"
//         res.render('user/login',{products,title});
//     }catch(err){
//         res.status(500).send("Error fetching products");
//     }
// };
exports.renderCreateForm = (req,res)=>{
    title = "Register"
    res.render('user/login',{title});
};

exports.createGenre = async(req,res)=>{
    try{
        const { name,email,password } = req.body;
        await Product.create({ name, email, password });
        res.redirect("/user");
    }catch(err){
        let backurl = '/user';
        req.flash('error', err.sqlMessage);
        return res.redirect(backurl);
    }
};