/*let xhr = new XMLHttpRequest();
xhr.open('get','http://124.221.249.219:8000/api/hot');
xhr.send();
xhr.onload = function(){
    let res = JSON.parse(xhr.responseText)
    console.log(res)
                    }


let xhr4 = new XMLHttpRequest();
xhr4.open('get','http://124.221.249.219:8000/api/search?keyword=' + '海阔天空');
xhr4.send();
xhr4.onload = function(){
    let res4 = JSON.parse(xhr4.responseText)
    console.log(res4)
                    }*/

                        
//热门搜索
let xhr3 = new XMLHttpRequest();
xhr3.open('get','http://124.221.249.219:8000/api/hot');
xhr3.send();
xhr3.onload = function(){
    let res3 = JSON.parse(xhr3.responseText)
    let songs_container  = document.querySelector('.hotSearch-content')
    for(let i=0;i<res3.length;i++){
        let a = document.createElement('a')
        a.style.fontSize = '21px'
        a.style.background = '#FFFFFF'
        a.style.margin = '0px 17.5px 17.5px 0px'
        a.style.padding = '0px 17.5px'
        a.style.color = '#1A1A1A'
        a.style.height = '42px'
        a.style.borderRadius = '10px 10px 10px 10px'
        a.innerHTML = res3[i]
        songs_container.appendChild(a)
    }
                    }



                    //点击垃圾箱，消除搜索历史并且把所有的历史记录删除，
                    let  dustbin = document.querySelector('.dustbin')
                    let  hotSearch1 = document.querySelector('.hotSearch1')
                    dustbin.addEventListener("click",function(){
                        hotSearch1.style.display = 'none'
                    });
                    let search1 = document.querySelector('.search1')
                    let search2 = document.querySelector('.search2')
                    search1.addEventListener("click",function(){
                        search1.style.display = 'none'
                        search2.style.display = 'block'
                    });


                    //搜索框
                    let songsShow = document.querySelector('.songsShow')
                    let hotHis = document.querySelector('.hot-his')
                    let searchInp = document.querySelector('.search-bar2')
                    let hisSearchContent = document.createElement('div')
                    hisSearchContent.style.width = '601px'
                    hisSearchContent.style.margin = '0px 28px'
                    searchInp.oninput = function(){
                        let b = this.value
                        let xhr5 = new XMLHttpRequest();
                        xhr5.open('get','http://124.221.249.219:8000/api/search?keyword='+this.value);
                        xhr5.send();
                        xhr5.onload = function(){
                            let res5 = JSON.parse(xhr5.responseText)
                            console.log(res5)
                           for(let k=0;k<res5.length;k++){
                               
                               let div1 = document.createElement('div')
                               let div2 = document.createElement('div')
                               let h3 = document.createElement('h3')
                               let p = document.createElement('p')
                               let span = document.createElement('span')

                               div1.style.width = '601px'
                               div1.style.height = '73.6px'
                               div2.style.width = '657.6px'
                               div2.style.height = '73.6px'
                               div2.style.margin = '0px 0px 28px'
                               div2.style.padding = '0px 28px'
                               h3.style.width = '601px'
                               h3.style.height = '35px'
                               h3.style.fontSize = '28px'
                               h3.style.color = '#1A1A1A'
                               p.style.width = '601px'
                               p.style.height = '28px'
                               p.style.margin = '10.5px 0px 0px'
                               span.style.width = '42px'
                               span.style.height = '27.2px'
                               span.style.color = '#1A1A1A80'
                               span.style.fontSize = '21px'
                               span.style.margin = '0px 14px 0px 0px'
 
                               songsShow.appendChild(div2)
                               div2.appendChild(div1)
                               div1.appendChild(h3)
                               div1.appendChild(p)
                               p.appendChild(span)
                                   
                                h3.innerHTML = res5[k].title

                                if(res5[k].artist.length === 1)
                                     {
                                          span.innerHTML = res5[k].artist
                                     }
                                else if(res5[k].artist.length === 2){
                                           span.innerHTML = res5[k].artist[0] + '/' + res5[k].artist[1]
                                     }
                                else{
                                           span.innerHTML = res5[k].artist[0] + '/' + res5[k].artist[1] + '/' + res5[k].artist[2]
                                    }                        
                           }
                        }


                            

                        document.onkeydown = function(event){
                            if(event.keyCode==13){
                                // 事件
                        let a = document.createElement('a')
                        a.style.fontSize = '21px'
                        a.style.background = '#FFFFFF'
                        a.style.margin = '0px 17.5px 17.5px 0px'
                        a.style.padding = '0px 17.5px'
                        a.style.color = '#1A1A1A'
                        a.style.height = '42px'
                        a.style.borderRadius = '10px 10px 10px 10px'
                        a.innerHTML =  b
                         hisSearchContent.appendChild(a)
                        hotSearch1.appendChild(hisSearchContent)

                        if(hotSearch1.style.display = 'none'){
                            hotSearch1.style.display = 'block'
                        }

                       a.addEventListener("click",function(){
                            songsShow.style.display='block'
                            hotHis.style.display='none'
                        })
                    }


                     //点击叉叉页面返回热门搜索
                          let chacha = document.querySelector('.chacha')
                          console.log(chacha)
                          chacha.addEventListener ('click',function(){
                          songsShow.style.display='none'
                          hotHis.style.display='block'
                             })
                }
        }

       
                    
