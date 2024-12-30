const Product = require("../model/genreModel");


exports.getAllGenre = async (req,res) => {
    try{
        const products = await Product.getAll();
        title = "List Genre"
        res.render('genre/index',{products,title});
    }catch(err){
        res.status(500).send("Error fetching products");
    }
};
exports.renderCreateForm = (req,res)=>{
    title = "New Genre"
    res.render('genre/create',{title});
};

exports.createGenre = async(req,res)=>{
    try{
        const { name } = req.body;
        await Product.create({ name });
        res.redirect("/genre");
    }catch(err){
        let backurl = '/genre';
        req.flash('error', err.sqlMessage);
        return res.redirect(backurl);
    }
};
exports.deleteGenre = async (req, res) => {
    try {
      await Product.delete(req.params.id);
      res.redirect('/genre');
    } catch (err) {
      res.status(500).send('Error deleting product');
    }
  };
