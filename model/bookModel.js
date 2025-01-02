const db = require("../config/database");

class Book {
    static async getAll(){
        const [rows] = await db.query('SELECT books.id,books.name,genre.name AS genre,books.amount,books.price,books.description,books.image FROM books JOIN genre ON books.GID = genre.id');
        return rows;
    }

    static async create(data){
        const [genreRows] = await db.query('SELECT id FROM genre WHERE name = ?',[data.genre]);
        let genreid = genreRows[0].id;
        const result = await db.query("INSERT INTO books (name,price, description,image,GID,amount) VALUE (?,?,?,?,?,?)",[data.name, data.price,data.description,data.image,genreid,data.amount]);
        return result;
    }
    static async getById(id) {
        const [rows] = await db.query('SELECT books.id,books.name,genre.name AS genre,books.amount,books.price,books.description,books.image FROM books JOIN genre ON books.GID = genre.id WHERE books.id = ?', [id]);
        return rows[0];
    }

    static async update(id, data) {
        // console.log(data);
        const [genreRows] = await db.query('SELECT id FROM genre WHERE name = ?',[data.genre]);
        let genreid = genreRows[0].id;
        const result = await db.query('UPDATE books SET name = ?, price = ?, description = ?, image = ?, GID = ?, amount= ? WHERE id = ?', [data.name, data.price,data.description,data.image,genreid,data.amount, id]);
        return result;
      }
    
    static async delete(id) {
        const result = await db.query('DELETE FROM books WHERE id = ?', [id]);
        return result;
      }

    static async latestBook(){
        const [rows] = await db.query('SELECT * FROM books ORDER BY id DESC ;');
        
        return rows;
    }

    // static async idImage(){
    //     // const [rows] = await db.query('SELECT image FROM books WHERE GID = ? ORDER BY id DESC limit 1;', [id]);
    //     // console.log("Query Result: ",id);
    //     // console.log("Query Result: ",rows);
    //     const [rows] = await db.query('SELECT * FROM books ORDER BY id DESC ;');
    //     // console.log(rows);
    //     return rows;
    // }
}


module.exports = Book;