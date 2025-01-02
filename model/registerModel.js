const db = require("../config/database");

class Register {
    // static async getAll(){
    //     const [rows] = await db.query('SELECT * FROM genre');
    //     return rows;
    // }
    static async create(data){
        const result = await db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)",[data.name,data.email, data.password]);
        return result;
    }
}

module.exports = Register;