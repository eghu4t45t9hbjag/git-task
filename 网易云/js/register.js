
// 注册按钮事件
function affirm() {
  // 获取昵称
  let name = document.getElementById("name").value;
  console.log(name);
  // 获取手机号
  let tel = document.getElementById("tel").value;
  console.log(tel);
  // 获取密码
  let pas = document.getElementById("password").value;
  console.log(pas);
  // 获取确认密码
  let affpas = document.getElementById("affirmPassword").value;
  console.log(affpas);
  // 手机号正则表达式
  let myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  if (localStorage.length == 0) { // 判断本地是否有数据  没有的话判断手机号和密码
      if (pas != affpas) {
          alert("第二次输入的密码不相同")
      } else if (!myreg.test(tel)) {
          alert("手机号格式不对")
      } else {
          // 动态向本地添加数据
          let dataLength = localStorage.length // 获取现在已有数据的长度  这个长度用于拼接到本地存储的每个key值中  达到一个动态存储的效果  每条本地存储数据需要一个钥匙   也就是获取这条数据的名称  就是key
          console.log(dataLength);
          // 创建一个对象用于存储用户输入的数据
          let data = {}
          data.name = name; // 向对象添加昵称
          data.tel = tel // 向对象添加手机号
          data.pas = pas // 添加密码
          data.id = dataLength // 添加用户唯一凭证ID
          let info = JSON.stringify(data) // 将对象转化为字符串   因为本地存储只能存储字符串
          console.log(info);
          // 向本地存储数据   第一个参数就是key钥匙  第二个是我们要存储的数据
          localStorage.setItem("key" + dataLength, info);
          // 获取本地存储所有数据 查看是否存到本地
          console.log(localStorage.valueOf());
          // 当存储成功时  启动定时器   两秒钟后跳转到登录页面
          setTimeout(function() {
              window.location.href = "index.html"
          }, 2000)
          alert("存储成功,点击后跳转到登录页面")
      }
  } else {
      for (let i = 0; i < localStorage.length; i++) {
          // 获取所有的key钥匙
          let key = localStorage.key(i)
          console.log(key);
          // 通过key拿到对应的数据进行判断
          let keydata = localStorage.getItem(key); // 拿到对应数据  只不过这时候是字符串
          let keyinfo = JSON.parse(keydata) // 将字符串转化为对象的形式
          console.log(keyinfo);
          // 判断用户输入的信息是否存在
          if (keyinfo.name == name) { // 判断本地存储的数据中是否有相同的昵称
              alert("昵称已存在")
              break;
          } else if (keyinfo.tel == tel) { // 判断本地存储的数据中是否有相同的手机号
              alert("手机号已注册")
              break;
          } else if (pas != affpas) { // 判断两次输入的密码是否相同
              alert("第二次输入的密码不相同")
              break;
          } else if (!myreg.test(tel)) { // 判断手机号的格式
              alert("手机号格式不对")
              break;
          } else {
              // 动态向本地添加数据
              let dataLength = localStorage.length // 获取现在已有数据的长度  这个长度用于拼接到本地存储的每个key值中  达到一个动态存储的效果  每条本地存储数据需要一个钥匙   也就是获取这条数据的名称  就是key
              console.log(dataLength);
              // 创建一个对象用于存储用户输入的数据
              let data = {}
              data.name = name; // 向对象添加昵称
              data.tel = tel // 向对象添加手机号
              data.pas = pas // 添加密码
              data.id = dataLength // 添加用户唯一凭证ID
              let info = JSON.stringify(data) // 将对象转化为字符串   因为本地存储只能存储字符串
              console.log(info);
              // 向本地存储数据   第一个参数就是key钥匙  第二个是我们要存储的数据
              localStorage.setItem("key" + dataLength, info);
              // 获取本地存储所有数据 查看是否存到本地
              console.log(localStorage.valueOf());
              // 当存储成功时  启动定时器   两秒钟后跳转到登录页面
              setTimeout(function() {
                  window.location.href = "/login.html"
              }, 2000)
              alert("存储成功,点击后跳转到登录页面")
              break;
          }
      }
  }
};
// 清空所有数据
function isclear() {
  localStorage.clear()
  console.log(localStorage.valueOf());
};
// 查看所有数据
function examine() {
  console.log(localStorage.valueOf());
}


const cha = document.getElementById("cha")
cha.onclick = function(){
    window.location.href = '/wangyihun.html'
}





