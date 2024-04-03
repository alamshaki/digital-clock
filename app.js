let demo = document.querySelector("#demo");

let  v  = () =>{
   let date = new Date().toLocaleTimeString().toUpperCase();
  demo.innerText = date;
}


setInterval(() =>{
    v()
},1000)