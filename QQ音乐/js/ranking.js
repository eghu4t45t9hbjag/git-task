/*/let xhr = new XMLHttpRequest();
xhr.open('get','http://124.221.249.219:8000/api/ranking');
xhr.send();
xhr.onload = function(){
    let res = JSON.parse(xhr.responseText)
    console.log(res)
                    }*/


 let xhr2 = new XMLHttpRequest();
 xhr2.open('get','http://124.221.249.219:8000/api/ranking');
 xhr2.send();
 xhr2.onload = function(){
 let res2 = JSON.parse(xhr2.responseText)
 console.log(res2)

 //获取标题title
 let title0 = document.querySelector('.title0')
 let title1 = document.querySelector('.title1')
 let title2 = document.querySelector('.title2')
 let title3 = document.querySelector('.title3')
 let title4 = document.querySelector('.title4')
 let title5 = document.querySelector('.title5')
 let title6 = document.querySelector('.title6')
 let title7 = document.querySelector('.title7')
 let title8 = document.querySelector('.title8')
 let title9 = document.querySelector('.title9')

 title0.innerHTML = res2[0].title
 title1.innerHTML = res2[1].title
 title2.innerHTML = res2[2].title
 title3.innerHTML = res2[3].title
 title4.innerHTML = res2[4].title
 title5.innerHTML = res2[5].title
 title6.innerHTML = res2[6].title
 title7.innerHTML = res2[7].title
 title8.innerHTML = res2[8].title
 title9.innerHTML = res2[9].title


 //获取排行榜图片
 let ranImg0 = document.querySelector('.ranImg0')
 let ranImg1 = document.querySelector('.ranImg1')
 let ranImg2 = document.querySelector('.ranImg2')
 let ranImg3 = document.querySelector('.ranImg3')
 let ranImg4 = document.querySelector('.ranImg4')
 let ranImg5 = document.querySelector('.ranImg5')
 let ranImg6 = document.querySelector('.ranImg6')
 let ranImg7 = document.querySelector('.ranImg7')
 let ranImg8 = document.querySelector('.ranImg8')
 let ranImg9 = document.querySelector('.ranImg9')

 ranImg0.src = res2[0].cover
 ranImg1.src = res2[1].cover
 ranImg2.src = res2[2].cover
 ranImg3.src = res2[3].cover
 ranImg4.src = res2[4].cover
 ranImg5.src = res2[5].cover
 ranImg6.src = res2[6].cover
 ranImg7.src = res2[7].cover
 ranImg8.src = res2[8].cover
 ranImg9.src = res2[9].cover


 //获取排行榜前三的歌曲名和歌手
 let olItem0 = document.querySelector('.rankingList-item0')
 let olItem1 = document.querySelector('.rankingList-item1')
 let olItem2 = document.querySelector('.rankingList-item2')
 let olItem3 = document.querySelector('.rankingList-item3')
 let olItem4 = document.querySelector('.rankingList-item4')
 let olItem5 = document.querySelector('.rankingList-item5')
 let olItem6 = document.querySelector('.rankingList-item6')
 let olItem7 = document.querySelector('.rankingList-item7')
 let olItem8 = document.querySelector('.rankingList-item8')
 let olItem9 = document.querySelector('.rankingList-item9')

 for(let i=0;i<res2[0].top3.length;i++){
     let div = document.createElement('div')
     let strong  =  document.createElement('strong')
     let span1 = document.createElement('span')
     let span2 = document.createElement('span')
     strong.innerHTML = [i+1] + '.'
     span1.innerHTML  = res2[0].top3[i].title
     if(res2[0].top3[i].artist.length === 1)
     {
         span2.innerHTML = res2[0].top3[i].artist
     }
     else if(res2[0].top3[i].artist.length === 2){
        span2.innerHTML = res2[0].top3[i].artist[0] + '/' + res2[0].top3[i].artist[1]
     }
     else{
        span2.innerHTML = res2[0].top3[i].artist[0] + '/' + res2[0].top3[i].artist[1] + '/' + res2[0].top3[i].artist[2]
     }
     
     div.appendChild(strong)
     div.appendChild(span1)
     div.appendChild(span2)
     div.innerHTML =strong.innerHTML + span1.innerHTML + '-' + span2.innerHTML 
     olItem0.appendChild(div)
 }
 


for(let i=0;i<res2[1].top3.length;i++){
    let div1 = document.createElement('div')
    let strong1  =  document.createElement('strong')
    let span11 = document.createElement('span')
    let span12 = document.createElement('span')
    strong1.innerHTML = [i+1] + '.'
    span11.innerHTML  = res2[1].top3[i].title
    if(res2[1].top3[i].artist.length === 1)
    {
        span12.innerHTML = res2[1].top3[i].artist
    }
    else if(res2[1].top3[i].artist.length === 2){
       span12.innerHTML = res2[1].top3[i].artist[0] + '/' + res2[1].top3[i].artist[1]
    }
    else{
       span12.innerHTML = res2[1].top3[i].artist[0] + '/' + res2[1].top3[i].artist[1] + '/' + res2[1].top3[i].artist[2]
    }
    
    div1.appendChild(strong1)
    div1.appendChild(span11)
    div1.appendChild(span12)
    div1.innerHTML =strong1.innerHTML + span11.innerHTML + '-' + span12.innerHTML 
    olItem1.appendChild(div1)
}


for(let i=0;i<res2[2].top3.length;i++){
    let div2 = document.createElement('div')
    let strong2  =  document.createElement('strong')
    let span21 = document.createElement('span')
    let span22 = document.createElement('span')
    strong2.innerHTML = [i+1] + '.'
    span21.innerHTML  = res2[2].top3[i].title
    if(res2[2].top3[i].artist.length === 1)
    {
        span22.innerHTML = res2[2].top3[i].artist
    }
    else if(res2[2].top3[i].artist.length === 2){
       span22.innerHTML = res2[2].top3[i].artist[0] + '/' + res2[2].top3[i].artist[1]
    }
    else{
       span22.innerHTML = res2[2].top3[i].artist[0] + '/' + res2[2].top3[i].artist[1] + '/' + res2[2].top3[i].artist[2]
    }
    
    div2.appendChild(strong2)
    div2.appendChild(span21)
    div2.appendChild(span22)
    div2.innerHTML =strong2.innerHTML + span21.innerHTML + '-' + span22.innerHTML 
    olItem2.appendChild(div2)
}



for(let i=0;i<res2[3].top3.length;i++){
    let div3 = document.createElement('div')
    let strong3  =  document.createElement('strong')
    let span31 = document.createElement('span')
    let span32 = document.createElement('span')
    strong3.style.color = 'white'
    span32.style.color = 'red'
    strong3.innerHTML = [i+1] + '.'
    span31.innerHTML  = res2[3].top3[i].title
    if(res2[3].top3[i].artist.length === 1)
    {
        span32.innerHTML = res2[3].top3[i].artist
    }
    else if(res2[3].top3[i].artist.length === 2){
       span32.innerHTML = res2[3].top3[i].artist[0] + '/' + res2[3].top3[i].artist[1]
    }
    else{
       span32.innerHTML = res2[3].top3[i].artist[0] + '/' + res2[3].top3[i].artist[1] + '/' + res2[3].top3[i].artist[2]
    }
    
    div3.appendChild(strong3)
    div3.appendChild(span31)
    div3.appendChild(span32)
    div3.innerHTML =strong3.innerHTML + span31.innerHTML + '-' + span32.innerHTML 
    olItem3.appendChild(div3)
}



for(let i=0;i<res2[4].top3.length;i++){
    let div4 = document.createElement('div')
    let strong4  =  document.createElement('strong')
    let span41 = document.createElement('span')
    let span42 = document.createElement('span')
    strong4.style.color = 'white'
    span42.style.color = 'red'
    strong4.innerHTML = [i+1] + '.'
    span41.innerHTML  = res2[4].top3[i].title
    if(res2[4].top3[i].artist.length === 1)
    {
        span42.innerHTML = res2[4].top3[i].artist
    }
    else if(res2[4].top3[i].artist.length === 2){
       span42.innerHTML = res2[4].top3[i].artist[0] + '/' + res2[4].top3[i].artist[1]
    }
    else{
       span42.innerHTML = res2[4].top3[i].artist[0] + '/' + res2[4].top3[i].artist[1] + '/' + res2[4].top3[i].artist[2]
    }
    
    div4.appendChild(strong4)
    div4.appendChild(span41)
    div4.appendChild(span42)
    div4.innerHTML =strong4.innerHTML + span41.innerHTML + '-' + span42.innerHTML 
    olItem4.appendChild(div4)
}




for(let i=0;i<res2[5].top3.length;i++){
    let div5 = document.createElement('div')
    let strong5  =  document.createElement('strong')
    let span51 = document.createElement('span')
    let span52 = document.createElement('span')
    strong5.style.color = 'white'
    span52.style.color = 'red'
    strong5.innerHTML = [i+1] + '.'
    span51.innerHTML  = res2[5].top3[i].title
    if(res2[5].top3[i].artist.length === 1)
    {
        span52.innerHTML = res2[5].top3[i].artist
    }
    else if(res2[5].top3[i].artist.length === 2){
       span52.innerHTML = res2[5].top3[i].artist[0] + '/' + res2[5].top3[i].artist[1]
    }
    else{
       span52.innerHTML = res2[5].top3[i].artist[0] + '/' + res2[5].top3[i].artist[1] + '/' + res2[5].top3[i].artist[2]
    }
    
    div5.appendChild(strong5)
    div5.appendChild(span51)
    div5.appendChild(span52)
    div5.innerHTML =strong5.innerHTML + span51.innerHTML + '-' + span52.innerHTML 
    olItem5.appendChild(div5)
}




for(let i=0;i<res2[6].top3.length;i++){
    let div6 = document.createElement('div')
    let strong6  =  document.createElement('strong')
    let span61 = document.createElement('span')
    let span62 = document.createElement('span')
    strong6.style.color = 'white'
    span62.style.color = 'red'
    strong6.innerHTML = [i+1] + '.'
    span61.innerHTML  = res2[6].top3[i].title
    if(res2[6].top3[i].artist.length === 1)
    {
        span62.innerHTML = res2[6].top3[i].artist
    }
    else if(res2[6].top3[i].artist.length === 2){
       span62.innerHTML = res2[6].top3[i].artist[0] + '/' + res2[6].top3[i].artist[1]
    }
    else{
       span62.innerHTML = res2[6].top3[i].artist[0] + '/' + res2[6].top3[i].artist[1] + '/' + res2[6].top3[i].artist[2]
    }
    
    div6.appendChild(strong6)
    div6.appendChild(span61)
    div6.appendChild(span62)
    div6.innerHTML =strong6.innerHTML + span61.innerHTML + '-' + span62.innerHTML 
    olItem6.appendChild(div6)
}




for(let i=0;i<res2[7].top3.length;i++){
    let div7 = document.createElement('div')
    let strong7  =  document.createElement('strong')
    let span71 = document.createElement('span')
    let span72 = document.createElement('span')
    strong7.style.color = 'white'
    span72.style.color = 'red'
    strong7.innerHTML = [i+1] + '.'
    span71.innerHTML  = res2[7].top3[i].title
    if(res2[7].top3[i].artist.length === 1)
    {
        span72.innerHTML = res2[7].top3[i].artist
    }
    else if(res2[7].top3[i].artist.length === 2){
       span72.innerHTML = res2[7].top3[i].artist[0] + '/' + res2[7].top3[i].artist[1]
    }
    else{
       span72.innerHTML = res2[7].top3[i].artist[0] + '/' + res2[7].top3[i].artist[1] + '/' + res2[7].top3[i].artist[2]
    }
    
    div7.appendChild(strong7)
    div7.appendChild(span71)
    div7.appendChild(span72)
    div7.innerHTML =strong7.innerHTML + span71.innerHTML + '-' + span72.innerHTML 
    olItem7.appendChild(div7)
}




for(let i=0;i<res2[8].top3.length;i++){
    let div8 = document.createElement('div')
    let strong8  =  document.createElement('strong')
    let span81 = document.createElement('span')
    let span82 = document.createElement('span')
    strong8.style.color = 'white'
    span82.style.color = 'red'
    strong8.innerHTML = [i+1] + '.'
    span81.innerHTML  = res2[8].top3[i].title
    if(res2[8].top3[i].artist.length === 1)
    {
        span82.innerHTML = res2[8].top3[i].artist
    }
    else if(res2[8].top3[i].artist.length === 2){
       span82.innerHTML = res2[8].top3[i].artist[0] + '/' + res2[8].top3[i].artist[1]
    }
    else{
       span82.innerHTML = res2[8].top3[i].artist[0] + '/' + res2[8].top3[i].artist[1] + '/' + res2[8].top3[i].artist[2]
    }
    
    div8.appendChild(strong8)
    div8.appendChild(span81)
    div8.appendChild(span82)
    div8.innerHTML =strong8.innerHTML + span81.innerHTML + '-' + span82.innerHTML 
    olItem8.appendChild(div8)
}




for(let i=0;i<res2[9].top3.length;i++){
    let div9 = document.createElement('div')
    let strong9  =  document.createElement('strong')
    let span91 = document.createElement('span')
    let span92 = document.createElement('span')
    strong9.style.color = 'white'
    span92.style.color = 'red'
    strong9.innerHTML = [i+1] + '.'
    span91.innerHTML  = res2[9].top3[i].title
    if(res2[9].top3[i].artist.length === 1)
    {
        span92.innerHTML = res2[9].top3[i].artist
    }
    else if(res2[9].top3[i].artist.length === 2){
       span92.innerHTML = res2[9].top3[i].artist[0] + '/' + res2[9].top3[i].artist[1]
    }
    else{
       span92.innerHTML = res2[9].top3[i].artist[0] + '/' + res2[9].top3[i].artist[1] + '/' + res2[9].top3[i].artist[2]
    }
    
    div9.appendChild(strong9)
    div9.appendChild(span91)
    div9.appendChild(span92)
    div9.innerHTML =strong9.innerHTML + span91.innerHTML + '-' + span92.innerHTML 
    olItem9.appendChild(div9)
}
 }

