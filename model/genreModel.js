const db = require("../config/database");

class Genre {
    static async getAll(){
        const [rows] = await db.query('SELECT * FROM genre');
        
        return rows;
    }
    static async create(data){
        const result = await db.query("INSERT INTO genre (name) VALUES (?)",[data.name]);
        return result;
    }
    static async delete(id) {
        const result = await db.query('DELETE FROM genre WHERE id = ?', [id]);
        return result;
    }
}

module.exports = Genre;