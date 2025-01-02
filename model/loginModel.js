const db = require("../config/database");

class Login {
      static async Verify(data){
            const [genreRows] = await db.query('SELECT id FROM users WHERE password = ? AND email = ?',[data.password,data.email]);
            if (genreRows.length === 0 || genreRows[0].id == null) {
                throw new Error("Invalid genre: Genre not found or ID is null");
            }
            let genreid = genreRows[0].id;
            const result = await db.query('SELECT name,email FROM users WHERE id = ?', [genreid]);
            return result;
            
        }

}

module.exports = Login;