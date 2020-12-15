//680px
document.getElementById("l").style.left="-100%";
        let t = document.createTextNode("\u00D7");
        document.getElementById("y").append(t);
        document.getElementById("m").onclick=function () {
            document.getElementById("l").style.left="0%";
        }
        document.getElementById("y").onclick=function () {
            document.getElementById("l").style.left="-100%"; 
        }
if (window.innerWidth>=760){
    document.getElementById("m").style.display="none";
}else{
    document.querySelectorAll("nav>a").forEach((el)=>{
        el.style.display="none"
    })
}
