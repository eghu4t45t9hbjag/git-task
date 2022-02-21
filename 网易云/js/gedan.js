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


window.onload = function(){

const btn1 = document.getElementById('choice')
const cato = document.querySelector('.cato')
btn1.onclick = function(){
    if(cato.style.display === 'block')
       cato.style.display='none';
       else
       cato.style.display='block';
}
}





    var xhr = new XMLHttpRequest();
    xhr.open('get','http://redrock.udday.cn:2022/playlist/catlist');
    xhr.send();
    xhr.onload = function(){
       var res = JSON.parse(xhr.responseText)
       console.log(res)
       
           var tr0 = document.getElementById('category0')
           var tr1 = document.getElementById('category1')
           var tr2 = document.getElementById('category2')
           var tr3 = document.getElementById('category3')
           var tr4 = document.getElementById('category4')

          /* for(var i=0;i<res.sub.length;i++){

                

       if(res.sub[i].category == '0'){  
        var td0 = document.createElement('td')
        
        td0.innerHTML = res.sub[i].name
        tr0.appendChild(td0)
       }
       else if(res.sub[i].category == '1'){
        var td = document.createElement('td')
        td.innerHTML = res.sub[i].name
        tr1.appendChild(td)
        }
        else if(res.sub[i].category == '2'){
            var td = document.createElement('td')
            td.innerHTML = res.sub[i].name
            tr2.appendChild(td)
            }
            else if(res.sub[i].category == '3'){
                var td = document.createElement('td')
                td.innerHTML = res.sub[i].name
                tr3.appendChild(td)
                }
                else{
                    var td = document.createElement('td')
                    td.innerHTML = res.sub[i].name
                    tr4.appendChild(td)
               }
              
       }*/
              var a0 = document.createElement('a')
               a0.innerHTML = res.sub[3].name
               a0.href = '/gedan/huayu.html'
               var td0 = document.createElement('td')
               td0.appendChild(a0)
               tr0.appendChild(td0)
               

               var a1 = document.createElement('a')
               a1.innerHTML = res.sub[8].name
               a1.href = '/gedan/oumei.html'
               var td1 = document.createElement('td')
               td1.appendChild(a1)
               tr0.appendChild(td1)  

               var a2 = document.createElement('a')
               a2.innerHTML = res.sub[17].name
               a2.href = '/gedan/hanyu.html'
               var td2 = document.createElement('td')
               td2.appendChild(a2)
               tr0.appendChild(td2) 
               
               
               /*var a2 = document.createElement('a')
               a2.innerHTML = res.sub[1].name
               a2.innerHTML = '#'
               var td2 = document.createElement('td')
               td2.appendChild(a)
               tr0.appendChild(td)

               var a = document.createElement('a')
               a.innerHTML = res.sub[1].name
               a.innerHTML = '#'
               var td = document.createElement('td')
               td.appendChild(a)
               tr0.appendChild(td)

               var a = document.createElement('a')
               a.innerHTML = res.sub[1].name
               a.innerHTML = '#'
               var td = document.createElement('td')
               td.appendChild(a)
               tr0.appendChild(td)

               var a = document.createElement('a')
               a.innerHTML = res.sub[1].name
               a.innerHTML = '#'
               var td = document.createElement('td')
               td.appendChild(a)
               tr0.appendChild(td)*/
    }

    

    
    
