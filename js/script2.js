fetch("./js/data.json")
  .then((response) => response.text())
  .then((text) => {
    const myList = JSON.parse(text);
    console.log(myList) 

const iddoc = document.querySelector("#IDcard")
    //    Text.innerHTML += 
    iddoc.innerHTML += `
    <li>Name : ${myList.name}</li>
    <li>Age : ${myList.age}</li>
    <li>school : ${myList.school}</li>
    <li>Skill : ${myList.Skill}</li>
    `
    });

// fetch("./js/data.json")
//   .then((response) => response.text())
//   .then((text) => {
//     const myList = JSON.parse(text);
//     console.log(myList)
// });