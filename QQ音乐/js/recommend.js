let xhr = new XMLHttpRequest();
xhr.open('get','http://124.221.249.219:8000/api/recommendations');
xhr.send();
xhr.onload = function(){
    let res = JSON.parse(xhr.responseText)
    console.log(res)
                    }




let xhr1 = new XMLHttpRequest();
xhr1.open('get','http://124.221.249.219:8000/api/recommendations');
xhr1.send();
xhr1.onload = function(){
        let res1 = JSON.parse(xhr1.responseText)



        //官方歌单
        let offImg0 = document.querySelector('.list0')
        let offImg1 = document.querySelector('.list1')
        let offImg2 = document.querySelector('.list2')
        let offImg3 = document.querySelector('.list3')
        let offImg4 = document.querySelector('.list4')
        let offImg5 = document.querySelector('.list5')

         offImg0.src = res1.offical[0].cover
         offImg1.src = res1.offical[1].cover
         offImg2.src = res1.offical[2].cover
         offImg3.src = res1.offical[3].cover
         offImg4.src = res1.offical[4].cover
         offImg5.src = res1.offical[5].cover



         //达人歌单
         let peoImg0 = document.querySelector('.plist0')
         let peoImg1 = document.querySelector('.plist1')
         let peoImg2 = document.querySelector('.plist2')
         let peoImg3 = document.querySelector('.plist3')
         let peoImg4 = document.querySelector('.plist4')
         let peoImg5 = document.querySelector('.plist5')

         peoImg0.src = res1.tatsujin[0].cover
         peoImg1.src = res1.tatsujin[1].cover
         peoImg2.src = res1.tatsujin[2].cover
         peoImg3.src = res1.tatsujin[3].cover
         peoImg4.src = res1.tatsujin[4].cover
         peoImg5.src = res1.tatsujin[5].cover
        


        //专区
        let secImg0 = document.querySelector('.slist0')
        let secImg1 = document.querySelector('.slist1')
        let secImg2 = document.querySelector('.slist2')
        let secImg3 = document.querySelector('.slist3')
        let secImg4 = document.querySelector('.slist4')
        let secImg5 = document.querySelector('.slist5')
        let secImg6 = document.querySelector('.slist6')
        let secImg7 = document.querySelector('.slist7')
        let secImg8 = document.querySelector('.slist8')

        secImg0.src = res1.column[0].background
        secImg1.src = res1.column[1].background
        secImg2.src = res1.column[2].background
        secImg3.src = res1.column[3].background
        secImg4.src = res1.column[4].background
        secImg5.src = res1.column[5].background
        secImg6.src = res1.column[6].background
        secImg7.src = res1.column[7].background
        secImg8.src = res1.column[8].background

       
                    }
                    