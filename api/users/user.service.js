const pool = require("../../config/database");

module.exports = {
  // inserting data into database
  // create: (data, callBack) => {
  //   pool.query(
  //     `insert into students(r_id, roll_no, PRN, name, email, password, branch, year) 
  //               values(?,?,?,?,?,?,?,?)`,
  //     [
  //       data.rollId,
  //       data.rollNo,
  //       data.prn,
  //       data.name,
  //       data.email,
  //       data.password,
  //       data.branch,
  //       data.year
  //     ],
  //     (error, results, fields) => {
  //       if (error) {
  //         callBack(error);
  //       }
  //       return callBack(null, results);
  //     }
  //   );
  // },
  getUserByUserEmail: (email, callBack) => {console.log(email);
    pool.query(
      'select * from faculty where email = ?',
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    ); 
  },
  getUserByUserId: (rollId, callBack) => {
    pool.query(
      `select * from students where r_id = ?`,
      [rollId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      'select r_id, roll_no, PRN, name, email, password, branch, year from students',
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update students set  roll_no=?, PRN=?, name=?, email=?, password=?, branch=?, year=? where r_id = ?`,
      [
        
        data.rollNo,
        data.prn,
        data.name,
        data.email,
        data.password,
        data.branch,
        data.year,
        data.rollId
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from students where r_id = ?`,
      [data.rollId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};