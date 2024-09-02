let names =[];
let numbers =[]; 
let trashTitle = [];
let trashTask = [];

load();





        
function render(){
         let content = document.getElementById('content');
         content.innerHTML="";
  
  
          for(let i=0; i<names.length;i++){
               const name =names[i];
              const number = numbers[i];
    
             content.innerHTML +=  
                  `<div class="card">
                      <a href="#" onclick="moveToTrash(${i})" >X</a> 
                     <div class="contentPost-style">
                        <h2>${name}</h2><br>${number} 
                      </div>
                    </div>`
          }
          renderTrash();
    

} 

function renderTrash(){
      let content= document.getElementById('waste-Basket');
      content.innerHTML ="";
      for(let i =0; i < trashTitle.length; i++ ){
          const name = trashTitle[i];
          const  number = trashTask[i];
          content.innerHTML +=`
    
              <div class="card">
               <b>${name}</b> <br />
                ${number} <br/>
                <button onclick="trashFinal(${i})">Yes, Delete</button>
                <button onclick="reinstate(${i})">Restore</button>
              </div>`;
      }

}
  
function addnote(){
      let name = document.getElementById('name').value;
      let  number = document.getElementById('telefon').value;
      if(document.getElementById('name').value ==""){
           alert('please type in the title');
      } 
        else{ 
              if(document.getElementById('telefon').value==""){
              alert('pleast type in your note');}
              else{
                   names.push(name);
                   numbers.push(number);
                  render();
                  save_arrays();
                  document.getElementById('name').value ="";
                  document.getElementById('telefon').value="";
                  

                  }
            }
}

function moveToTrash(i){
      trashTitle.push(`${names[i]}`);
      trashTask.push(`${numbers[i]}`); 
      names.splice(i,1); 
      numbers.splice(i,1);
      save_arrays();
      render();
      
}


function trashFinal(i) {
  trashTitle.splice(i, 1);
  trashTask.splice(i, 1);


 renderTrash();
 save_arrays();

}

function reinstate(i) {
          names.push(trashTitle[i]);
          trashTitle.splice(i, 1);
          numbers.push(trashTask[i]);
          trashTask.splice(i, 1);
   
         render();
         save_arrays();
}

  

   
 
function save_arrays() {
    let namesAsText = JSON.stringify(names);
    let trashTitleAsText = JSON.stringify(trashTitle);
    let numbersAsText = JSON.stringify(numbers);
    let trashTaskAsText = JSON.stringify(trashTask);

    localStorage.setItem('trashTitle', trashTitleAsText);
    localStorage.setItem('names', namesAsText);
    localStorage.setItem('numbers', numbersAsText);
    localStorage.setItem('trashTask', trashTaskAsText);

  } 



  function load() {

    let namesAsText = localStorage.getItem("names");
    let numbersAsText = localStorage.getItem("numbers");
     let trashTitleAsText = localStorage.getItem("trashTitle");
     let trashTaskAsText = localStorage.getItem("trashTask");
    if (namesAsText && numbersAsText && trashTitleAsText  && trashTaskAsText) {
      
      names = JSON.parse(namesAsText); 
      numbers = JSON.parse(numbersAsText);
      trashTask = JSON.parse(trashTaskAsText);
      trashTitle = JSON.parse(trashTitleAsText);
    }
  } 

  function closetrash() {
  document.getElementById("waste").classList.add("d-none");
}
function enterNote(text){
  document.getElementById('notes').classList.remove('f-none');
  
}
function opentrash() {
  document.getElementById("waste").classList.remove("d-none");
}



















/*


let names =[];
let numbers =[]; 
let trashTitle = [];
let trashTask = [];

load();





        
function render(){
         let content = document.getElementById('content');
         content.innerHTML="";
  
  
          for(let i=0; i<names.length;i++){
               const name =names[i];
              const number = numbers[i];
    
             content.innerHTML +=  
                  `<div class="card">
                      <a href="#" onclick="moveToTrash(${i})" >X</a> 
                     <div class="contentPost-style">
                        <h2>${name}</h2><br>${number} 
                      </div>
                    </div>`
          }
          renderTrash();
    

} 

function renderTrash(){
      let content= document.getElementById('waste-Basket');
      content.innerHTML ="";
      for(let i =0; i < trashTitle.length; i++ ){
          const name = trashTitle[i];
          const  number = trashTask[i];
          content.innerHTML +=`
    
              <div class="card">
               <b>${name}</b> <br />
                ${number} <br/>
                <button onclick="trashFinal(${i})">Yes, Delete</button>
                <button onclick="reinstate(${i})">Restore</button>
              </div>`;
      }

}
  
function addnote(){
      let name = document.getElementById('name').value;
      let  number = document.getElementById('telefon').value;
      if(document.getElementById('name').value ==""){
           alert('please type in the title');
      } 
        else{ 
              if(document.getElementById('telefon').value==""){
              alert('pleast type in your note');}
              else{
                   names.push(name);
                   numbers.push(number);
                  render();
                  save_arrays();
                  document.getElementById('name').value ="";
                  document.getElementById('telefon').value="";
                  

                  }
            }
}

function moveToTrash(i){
      trashTitle.push(`${names[i]}`);
      trashTask.push(`${numbers[i]}`); 
      names.splice(i,1); 
      numbers.splice(i,1);
      save_arrays();
      render();
      
}


function trashFinal(i) {
  trashTitle.splice(i, 1);
  trashTask.splice(i, 1);
  renderTrash();
  save_arrays();

}

function reinstate(i) {
          names.push(trashTitle[i]);
          trashTitle.splice(i, 1);
          numbers.push(trashTask[i]);
          trashTask.splice(i, 1);
   
         render();
         save_arrays();
}

  

   
 
function save_arrays() {
    let namesAsText = JSON.stringify(names);
    let trashTitleAsText = JSON.stringify(trashTitle);
    let numbersAsText = JSON.stringify(numbers);
    let trashTaskAsText = JSON.stringify(trashTask);

    localStorage.setItem('trashTitle', trashTitleAsText);
    localStorage.setItem('names', namesAsText);
    localStorage.setItem('numbers', numbersAsText);
    localStorage.setItem('trashTask', trashTaskAsText);

  } 



  function load() {

    let namesAsText = localStorage.getItem("names");
    let numbersAsText = localStorage.getItem("numbers");
     let trashTitleAsText = localStorage.getItem("trashTitle");
     let trashTaskAsText = localStorage.getItem("trashTask");
    if (namesAsText && numbersAsText && trashTitleAsText  && trashTaskAsText) {
      
      names = JSON.parse(namesAsText); 
      numbers = JSON.parse(numbersAsText);
      trashTask = JSON.parse(trashTaskAsText);
      trashTitle = JSON.parse(trashTitleAsText);
    }
  } 

  function closetrash() {
  document.getElementById("waste").classList.add("d-none");
}
function enterNote(text){
  document.getElementById('notes').classList.remove('f-none');
  
}
function opentrash() {
  document.getElementById("waste").classList.remove("d-none");
}*/