const btn = document.getElementById("denglu")
btn.onclick = function(){
    window.location.href = '/login.html' 
};

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
    var nickname = document.getElementById("showname")
    nickname.innerText = info.name+'    您好!'
  if(nickname.innerText = info.name+'    您好!'){
      btn.style.display='none'
  }




  var xhr = new XMLHttpRequest()
  xhr.open('get','http://redrock.udday.cn:2022/playlist/highquality/tags')
  xhr.send()
  
  xhr.onload = function(){
      var res = JSON.parse(xhr.responseText)
      console.log(res)
      console.log(res.tags[0].name)
      var tag = res.tags[0].name

      var xhr1 = new XMLHttpRequest()
     xhr1.open('get','http://redrock.udday.cn:2022/top/playlist/highqualit?cat='+tag)
     xhr1.send()
      xhr1.onload = function(){
          var res1 = JSON.parse(xhr1.responseText)
          console.log(res1)

          var img2 = document.getElementById('img2')
            img2.src = res1.playlists[2].coverImgUrl
          var name = document.getElementById('name')
          name.innerHTML = res1.playlists[2].name
           
            

          let id = res1.playlists[2].id
          let xhr2 = new XMLHttpRequest()
          xhr2.open('get','http://redrock.udday.cn:2022/playlist/detail?id=7050074027')
          xhr2.send()
          xhr2.onload = function(){
                var res2 = JSON.parse(xhr2.responseText)
                console.log(res2.playlist.tracks)
                var songs = document.getElementById('songs')
                for(var i=0;i<res2.playlist.tracks.length;i++){
                    console.log(res2.playlist.tracks[i].id)
                    console.log(res2.playlist.tracks[i].name)
                    var id = res2.playlist.tracks[i].id
                    var a = document.createElement('a')
                    a.href = 'http://redrock.udday.cn:2022/song/url?id='+id;
                    console.log(a.href.innerHTML)
                    a.innerHTML = res2.playlist.tracks[i].name
                    songs.appendChild(a)
                    a.style.display='block'

                } 



          
          }
           
          
      
      }	
      
  }
 
