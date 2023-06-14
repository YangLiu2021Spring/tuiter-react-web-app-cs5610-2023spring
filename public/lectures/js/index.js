function add(){
    console.log("ADD");
    const  aDom= document.getElementById("a") ;
    const  bDom = document.getElementById("b") ;
    const a= parseInt(aDom.value);
    const b= parseInt(bDom.value);

    console.log(a,b);

    const  cDom = document.getElementById("c") ;
    cDom.value = a+ b;
}

function subtract(){
    console.log("Subtract");

    const  aDom= document.getElementById("a") ;
    const  bDom = document.getElementById("b") ;
    const a= parseInt(aDom.value);
    const b= parseInt(bDom.value);

    console.log(a,b);

    const  cDom = document.getElementById("c") ;
    cDom.value = a-b;
}










console.log("Hello") ;
const hi = document.getElementById("welcome");
hi.style.color = "red" ;
hi.innerHTML = "Welcome to Web Dev" ;
hi.style.display = "none" ;

document.write("<h2>List use template string </h2>") ;
const grades = [90,100,80,88,94] ;
document.write("<h2>Table of grades </h2>") ;

function tableRow(grade) {
    return(`<tr>
                <td>Grade:</td>
                 <td> ${grade}</td>
            </tr>`)
}

tableRows = grades => grades.map(grade => tableRow(grade)).join('') ;
// return rows;


document.write(`<table border="1">
        ${tableRows(grades)}
                   </table>`) ;

// function tableRow(grades) {
//     //   let rows = grades.map(function(grade){
//     //       return tableRow(grade)
//     //   }).join('')
//
//       let rows = grades.map(grade =>
//           tableRow(grade)).join('')
//
//     // let row = ' ' ;
//
//   // for(let i = 0; i< grades.length; i++) {
//   //   row += tableRow(grades[i]);
//   // }
//
//   return rows;
// }












//   document.write(`<table border="1">
//                       <tr>
//                         <td>${grades[0]}</td>
//                       </tr>
//                       <tr>
//                         <td>${grades[1]}</td>
//                       </tr>
//                       <tr>
//                         <td>${grades[2]}</td>
//                       </tr><tr>
//                         <td>${grades[3]}</td>
//                       </tr><tr>
//                         <td>${grades[4]}</td>
//                       </tr>
//
// </table>`) ;
//
//   document.write(`<label>${grades.length}</label>`);
//   document.write("<ul>");
//   document.write(`<li>${grades[0]}</li>`);
//   document.write(`<li>${grades[1]}</li>`);
//   document.write(`<li>${grades[2]}</li>`);
//   document.write(`<li>${grades[3]}</li>`);
//   document.write(`<li>${grades[4]}</li>`);
//   document.write("</ul>");
//
//   document.write(` <ul>
//                      <li>${grades[0]}</li>
//                      <li>${grades[1]}</li>
//                      <li>${grades[2]}</li>
//                      <li>${grades[3]}</li>
//                      <li>${grades[4]}</li>
//                     </ul>`);
//
//   document.write("<h2>List use for loop  </h2>") ;
//   document.write("<ul>");
//
//   for(let i = 0; i< grades.length; i++) {
//     document.write(`<li>${grades[i]}</li>`)
//   }
//   document.write("</ul>");


