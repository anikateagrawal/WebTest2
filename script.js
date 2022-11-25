//theme script
th = document.querySelectorAll('[name="theme"]');
// console.log(th);
th.forEach((theme) => {
  theme.addEventListener("click", () => localStorage.setItem("theme", theme.id));
});

function app() {
  st = localStorage.getItem("theme");
  th.forEach((theme) => {
    if (theme.id === st) {
      theme.checked = true;
    }
  });
}
document.onload = app();


//api script
document.getElementById('sh').addEventListener("click",display);

function display(){
    var v=document.getElementById('search').value;
    req(v);
}
var data;
function req(s){
    const url="https://api.tvmaze.com/search/shows?q=";
    const xhr=new XMLHttpRequest;
    xhr.onload=function(){
        var c=document.getElementById('m');
        data=JSON.parse(this.response);
        data.forEach((d)=>{
            console.log(d.show.image.original);
            var im=d.show.image.original;
            var div=document.createElement('div');
        // c.appendChild(div);
        div.className='mov';
        div.innerHTML=`<img src="${im}" alt="">`;
        c.appendChild(div);
        })
        // console.log(data);
        
        
        
    }
    xhr.onerror=function(){
        console.log('error');
    }
    xhr.open("GET",url+s);
    xhr.send();
    
}
