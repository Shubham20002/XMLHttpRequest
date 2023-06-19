var btn=document.getElementById('getimage');
console.log(btn);
btn.addEventListener('click',getdogimg);

function getdogimg(){
    var xhr=new XMLHttpRequest();
    xhr.open('get','https://dog.ceo/api/breeds/image/random');
    xhr.send();
    xhr.onload=function(){
        // console.log(xhr.response);
        responseobj=JSON.parse(xhr.response);
        var imgurl=responseobj.message;
        document.getElementById('dog-img').setAttribute('src',imgurl)
    }
   

}