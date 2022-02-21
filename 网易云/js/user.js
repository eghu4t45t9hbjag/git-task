// 获取到我们传过来的参数  接收参数
let id = window.location.search.slice(1);
console.log(id);
// 应为我们是把本地存储数据的长度来当做id的所有我们可以通过id获取说有的数据
let key = localStorage.key(id); // 获取对应的key钥匙
let data = localStorage.getItem(key); // 再通过key获取对应的数据
console.log(data); // 这是是字符串
let info = JSON.parse(data) // 将字符串转换为对象
console.log(info); // 对象

    // 获取昵称
    document.getElementById("showname").innerText = info.name+'    您好!'
 
  
function showDataByURL() {
    var len = document.getElementById("fileDemo").files.length;
    console.info(len);
    var resultFile = document.getElementById("fileDemo").files;
    console.info(resultFile);
    for (var i = 0; i < len; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(resultFile[i]);
        reader.onload = function (e) {
            var urlData = this.result;
            var img =  document.getElementById("result");
           img.src = urlData;
           if(img.src = urlData){
               var file = document.getElementById('fileDemo')
               file.style.display='none'
           }
        };
    }
}


         




//轮播图  
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

//搜索框

var searchInp = document.getElementById('search')
var listBox = document.getElementById('list-box')

searchInp.addEventListener('click',function(){
        listBox.style.display='block'
})
var add = document.getElementById('addback')
add.onclick = function(){
    listBox.style.display='none'
}


searchInp.oninput = function(){
    var keywords = this.value
    console.log(keywords)
    var xhr = new XMLHttpRequest()
    xhr.open('get','http://redrock.udday.cn:2022/search/suggest?keywords='+keywords)
    xhr.send()
    xhr.onload = function(){
        var res = JSON.parse(xhr.responseText)
        console.log(res.result)
         

        var tr0 = document.getElementById('tr0')
        var tr1 = document.getElementById('tr1')
        var tr2 = document.getElementById('tr2')
        var tr3 = document.getElementById('tr3')
        
        for(var i=0;i<res.result.songs.length;i++){
            var td = document.createElement('td')
            td.innerHTML = res.result.songs[i].name
            tr0.appendChild(td)
        }
       for(var i=0;i<res.result.artists.length;i++){
            var td = document.createElement('td')
            td.innerHTML = res.result.artists[i].name
            tr1.appendChild(td)
        }
        for(var i=0;i<res.result.albums.length;i++){
            var td = document.createElement('td')
            td.innerHTML = res.result.albums[i].name
            tr2.appendChild(td)
        }
        for(var i=0;i<res.result.playlists.length;i++){
            var td = document.createElement('td')
            td.innerHTML = res.result.playlists[i].name
            tr3.appendChild(td)
        }

    }
   
}
