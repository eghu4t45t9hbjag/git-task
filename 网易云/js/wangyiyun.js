const btn = document.getElementById("denglu")
btn.onclick = function(){
    window.location.href = '/login.html' 
};

var imgs = document.querySelectorAll("ul > li");
var points = document.querySelectorAll("ol > li");
var index = 0;

function changeOne(type){
     imgs[index].className = ''
     points[index].className = ''

     if(type === true){
          index++;
     }
    
     else if(type === false){
         index--;
     }
     
     else{
         index = type;
     }
     if(index >= imgs.length){
         index = 0
     }
     else if(index < 0){
        index = imgs.length - 1
     }
     imgs[index].className='first'
     points[index].className = 'first'
    }


   
    

var banner = document.querySelector('.banner')
banner.onclick = function(e){
     if(e.target.className === 'left'){
     changeOne(false)
     }
     
     if(e.target.className === 'right'){
     changeOne(true)
     }
     if(e.target.dataset.name === "point"){
         var i = e.target.dataset.i - 0
         changeOne(i)
     } 
}
   
setInterval(function(){
    changeOne(true)
},4000)




   


    



   

   

   