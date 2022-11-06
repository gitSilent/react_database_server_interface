import express, { json } from "express";
import cors from "cors";
import { createConnection, createPool } from "mariadb";
import bodyParser from "body-parser";

function users(req, res) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
}

const app = express();

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);
app.use(express.urlencoded({ extended: true }));

const pool = createPool({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "library",
  bigIntAsNumber: true,
  insertIdAsNumber: true,
});

// app.get("/get/allBooks", async (req, res) => {
//   let connection = await pool.getConnection();
//   const response = await connection.query(
//     "SELECT * from books",
//     (err, data) => {
//       console.log(data);
//     }
//   );
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.send(response);
// });

// app.get("/get/allAuthors", async (req, res) => {
//   let connection = await pool.getConnection();
//   const response = await connection.query(
//     "SELECT * from authors",
//     (err, data) => {
//       console.log(data);
//     }
//   );
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   res.send(response);
// });

app.get("/get/:table", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
    const table = req.params.table;
    let connection = await pool.getConnection();
    res.send(await connection.query(
      `SELECT * from ${table}`,
      (err, data) => {
      }
  ))
  connection.end()
})

app.post("/post/:table", async (req, res) => {
  try{

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    let connection = await pool.getConnection();
    let body = req.body;
    const table = req.params.table;
    let keys = [];
    let values = [];
    Object.entries(body)
    .forEach((el,index)=>{
      keys.push(el[0]);

      if(Number(el[1])){
        values.push(Number(el[1]));
      }else if(el[1].trim() != ""){
        values.push(JSON.stringify(el[1]));
      }
    })
    console.log(keys)
    console.log(values)
    const post = await connection.query(
      `insert into ${table}(${keys.join(',')}) values (${values.join(',')})`,
      (err, data) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        if (err) throw err;
        console.log(data);
      }
    );
    
    res.json(post);
    res.status(200)
  }catch(er){
      res.status(400).json({message:""});
  }

  });

// app.post("/post/book", async (req, res) => {
//     console.log(req.body)
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   let connection = await pool.getConnection();
//   let book_info = req.body;

//   const post = await connection.query(
//     `insert into books (title_book,id_ganre,id_author,qty_books)
//     values (${JSON.stringify(book_info.title_book)},
//         ${book_info.id_ganre},
//         ${book_info.id_author},
//         ${book_info.qty_books}
//     )`, 
//     (err, data) => {
//       res.setHeader("Access-Control-Allow-Origin", "*");
//       res.setHeader("Access-Control-Allow-Credentials", "true");
//       if (err) throw err;
//       console.log(data);
//     }
//   );

//   res.json(post);
// });

app.put("/put/moving", async (req, res) => {
  let connection = await pool.getConnection();
  let moving_info = req.body;

  const put = await connection.query(
    `update moving set date_in=${JSON.stringify(
      moving_info.date_in
    )} where id_note = ${moving_info.id_note}`,
    (err, data) => {
      console.log(data);
    }
  );
  res.json(put);
});

// mysql.format()

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
