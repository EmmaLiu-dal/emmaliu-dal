//document.querySelector('h1').textContent = 'Hello world!';
/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

/*document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}*/
 /*let myHTML = document.querySelector('html');
 myHTML.onclick = function(){};*/

 //添加图像切换器
 let myImage = document.querySelector('img');
 
 myImage.onclick = function() {
     let mySrc = myImage.getAttribute('src');
     if(mySrc === 'images/firefox-icon.png') {
         myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

//添加个性化欢迎信息
// 在HTML文件 <script>标签前添加如下代码：
// <button>切换用户</button>

//获取新按钮和标题引用并保存到变量中：
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//设置信息
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了, ' + myName;
  }
}
//添加初始化代码（if ....else)
if (!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla酷毙了，' + storedName;
}
//为按钮设置onclick事件处理器
myButton.onclick = function() {
    setUserName();
}