const Product = require("../model/genreModel");
const Book = require("../model/bookModel");

exports.getListProduct = async (req,res) => {
    try{
        const products = await Product.getAll();
        const books = await Book.latestBook();
        // const images = await Book.idImage();
        // const images = id ? await Book.idImage(id) : [];
        title = "home"
        res.render('index/index',{books,title,products});
    
    }catch(err){
        res.status(500).send("Error fetching products");
    }
}