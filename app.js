let input = document.querySelector("#task");
let taskbtn = document.querySelector(".add-task");
let list = document.querySelector(".task-list");
let editTask = document.querySelector(".edit-task");
editTask.style.display="none";

taskbtn.addEventListener("click", function (){
      let task = document.createElement("li");
     task.classList.add("li");
    
     let delbtn = document.createElement("i");
     let editbtn = document.createElement("i");
     let div = document.createElement("div");
     div.classList.add("task-text");
     div.innerText = input.value;
     delbtn.classList.add("fa-solid","fa-trash");
     editbtn.classList.add("fa-regular","fa-pen-to-square")
     delbtn.setAttribute("id","del");
     editbtn.setAttribute("id","edit");
     let checkbox = document.createElement("input");
     checkbox.setAttribute("type","checkbox");
     checkbox.setAttribute("id","done")
 
    task.appendChild(checkbox);
    task.appendChild(div);
    task.appendChild(editbtn);
     task.appendChild(delbtn);
      list.appendChild(task);
      console.log("task added");
      input.value = "";
});

list.addEventListener("click", function (ele){
    console.log(ele.target);
    console.log("btn was clicked");
    // list.removeChild(ele.target.parentElement);
    if(ele.target.id=="del"){
        let par = ele.target.parentElement;
        par.remove();
    }
    if(ele.target.type == "checkbox"){
        let par = ele.target.parentElement;
        if(ele.target.checked == true){
            par.classList.add("complete");
          let icon =  ele.target.nextElementSibling.nextElementSibling ;
           icon.style.display = "none";
           icon.nextElementSibling.style.display = "none";
            console.dir(par);
        }
        else{
            par.classList.remove("complete");
           let icon =  ele.target.nextElementSibling.nextElementSibling ;
           icon.style.display = "";
           icon.nextElementSibling.style.display = "";
        }
    }
    if(ele.target.id=="edit"){
        let task = ele.target.previousElementSibling;
        taskbtn.style.display = "none";
        editTask.style.display="";
        console.log(task);
        input.value = task.innerText;
        editTask.onclick = function () {
          console.log(task)
          task.innerText = "";
          task.append(input.value);
          editTask.style.display= "none";
          taskbtn.style.display = "";
          input.value ="";
        }
    
    }
    
})




// let delbtns = document.querySelectorAll(".del");
// for(btn of delbtns){
//         btn.addEventListener("click", function (){
//             let par = this.parentElement;
//             console.log(par);
//         });
// }