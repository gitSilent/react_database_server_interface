// export function fillTable(id) {
//     fetch(`http://127.0.0.1:4000/get/${id}`,)
//       .then((val) => val.json())
//       .then((val) => {
//         const div_table = document.createElement('div')
//         div_table.className="div_table"
//         const table = document.createElement("table");
//         table.className = `table_${id}`;
  
//         let table_header = document.createElement("thead");
//         let tr = document.createElement("tr");
  
//         let table_body = document.createElement("tbody");
  
//         for (let key in val[0]) {
//           const th = document.createElement("th");
//           th.textContent = `${key}`;
//           tr.append(th);
//         }
  
//         table_header.append(tr);
//         table.append(table_header);
  
//         val.forEach((el, index) => {
//           let tr = document.createElement("tr");
//           for (let key in el) {
//             const th = document.createElement("th");
//             th.textContent = el[key];
//             tr.append(th);
//           }
//           table_body.append(tr);
//         });
  
//         table.append(table_body);
  
//         div_table.append(table);
//         document.body.append(div_table);
  
//         console.log(val);
//       });
//   }

  