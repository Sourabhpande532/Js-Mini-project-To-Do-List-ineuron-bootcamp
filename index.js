const userInput = document.querySelector(".input");
const userClickBtn = document.querySelector(".addButton");

userClickBtn.addEventListener("click", ()=>{
 if(userInput.value === ""){
     alert("Please Enter Your scheduled 📝📝")
 }else{
     showInfo();
 }
})

function showInfo(){
 let createList = document.createElement("div");
 createList.className = "item";
 console.log(createList);

 let creatModifyInput = document.createElement("input");
 creatModifyInput.classList.add("user_input");
 creatModifyInput.setAttribute("readonly","readonly");
 creatModifyInput.type = "text";
 creatModifyInput.value = userInput.value;
 console.log(creatModifyInput);

 //edit
 let editButton = document.createElement("button");
 editButton.innerHTML = "EDIT";
 editButton.className = "editButton";
 console.log(editButton);

 // delete
 let deleteButton = document.createElement("button");
 deleteButton.innerText = "DELETE";
 deleteButton.className = "deleteButton";
 console.log(deleteButton);

 createList.appendChild(creatModifyInput);
 createList.appendChild(editButton);
 createList.appendChild(deleteButton);
 document.querySelector(".container").appendChild(createList);

 editButton.addEventListener("click",()=>{
 if(editButton.innerHTML === "EDIT"){
 creatModifyInput.removeAttribute("readonly");
 creatModifyInput.focus();
 editButton.innerHTML = "SAVE"
 creatModifyInput.style.color = "red"
 }else{
     creatModifyInput.setAttribute("readonly","readonly"); //it work like boolean
     editButton.innerHTML = "EDIT";
     creatModifyInput.style.color = "white";
 }
 });

 deleteButton.addEventListener("click",()=>{
 let askOnetime = confirm("Are you Sure 🤨🤨");
 if(askOnetime){
     document.querySelector(".container").removeChild(createList);
 }    
 })
 userInput.value = "";
}