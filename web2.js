document.addEventListener("DOMContentLoaded",function(){
    var trangthai="duoi100";
    var hieuungmenu=document.querySelector('.navbar');
    var hieuungbienmat=document.querySelector('.navbar_small1');
    var hieuungs1=document.querySelector('.s1');
    var vitris1=hieuungs1.offsetTop-700;
    var trangthais1="duoi";
    var hieuungs2=document.querySelector('.s2');
    var vitris2=vitris1+700;
    var trangthais2="duoi";
    window.addEventListener('scroll',function(){
        console.log(this.window.pageYOffset);
        if(this.window.pageYOffset>100){
            if(trangthai="duoi100"){
                hieuungmenu.classList.add('navbarnho');
                hieuungbienmat.classList.add('thunho');
                trangthai="tren100";
            }
        }
        else if(this.window.pageYOffset<=100){
            if(trangthai="tren100"){
                hieuungmenu.classList.remove('navbarnho');
                hieuungbienmat.classList.remove('thunho');
                trangthai="duoi100";
            }
        }
        if(this.window.pageYOffset>vitris1){
            if(trangthais1=="duoi"){
                trangthais1="tren";
                hieuungs1.classList.add('dilen');
            }
        }
        if(this.window.pageYOffset<=vitris1){
            if(trangthais1=="tren"){
                trangthais1="duoi";
                hieuungs1.classList.remove('dilen');
            }
        }
        if(this.window.pageYOffset>vitris2){
            if(trangthais2=="duoi"){
                trangthais2="tren";
                hieuungs2.classList.add('zoom');
            }
        }
        if(this.window.pageYOffset<=vitris2){
            if(trangthais2=="tren"){
                trangthais2="duoi";
                hieuungs2.classList.remove('zoom');
            }
        }
        
        
    })
})