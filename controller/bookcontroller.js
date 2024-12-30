const Product = require("../model/bookModel");
const upload = require('../config/multer');

exports.getAllProducts = async (req,res) => {
    try{
        const products = await Product.getAll();
        title = "List product"
        res.render('book/index',{products,title});
    }catch(err){
        res.status(500).send("Error fetching products");
    }
};

exports.renderCreateForm = (req,res)=>{
    title = "New Product"
    res.render('book/create',{title});
};

exports.createProduct = async(req,res)=>{
    try{
        const { name,genre, price ,description, amount} = req.body;
        let image_path = "";
        // If there's an uploaded file, set the image path
        if (req.file) {
            image_path = `/uploads/${req.file.filename}`;
        }
        await Product.create({ name,genre,price, description,amount, image: image_path });
        res.redirect("/book");
    }catch(err){
        let backurl = '/book';
        req.flash('error', err.sqlMessage);
        return res.redirect(backurl);
    }
};


exports.renderEditForm = async (req, res) => {
    try {
      const product = await Product.getById(req.params.id);
      title = "Edit Product";
      if (product) {
        res.render('book/edit', { product,title });
      } else {
        res.status(404).send('Product not found');
      }
    } catch (err) {
      res.status(500).send('Error fetching product');
    }
};

// Update product
exports.updateProduct = async (req, res) => {
    try {
        const { name,genre, price ,description, amount } = req.body;
        let image_path = "";

        if (req.file) {
            image_path = `/uploads/${req.file.filename}`;
        }
        else{
            const product = await Product.getById(req.params.id);
            image_path = product.image;
            
        }
        await Product.update(req.params.id, { name,genre,price, description,amount, image: image_path  });
        
        res.redirect('/book');
    } catch (err) {
      res.status(500).send('Error updating product');
    }
  };
  
  // Delete product
  exports.deleteProduct = async (req, res) => {
    try {
      await Product.delete(req.params.id);
      res.redirect('/book');
    } catch (err) {
      res.status(500).send('Error deleting product');
    }
  };