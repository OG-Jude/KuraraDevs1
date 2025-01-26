const btng = document.getElementById('btng');
const btnt = document.getElementById('btnt');
const btnh = document.getElementById('btnh');
const btns = document.getElementById('btns');
const calc = document.querySelector('.calculate');

const gv = document.getElementById('g');
const hv = document.getElementById('h');
const sv = document.getElementById('s');
const tv = document.getElementById('t');

let answr = document.getElementById('answr');
let answr2 = document.getElementById('answr2');
let answr3 = document.getElementById('answr3');
let siun = document.getElementById('siun');

const ph1 = document.querySelector('.phs1');
const ph2 = document.querySelector('.phs2');
ph2.style.visibility = 'hidden';
btng.addEventListener('click', hideg);
function hideg() { 
    g = true;
    s = false;
    t = false;
    h = false;

    ph1.style.visibility = 'hidden';
    ph1.style.height = '2px';
     
    calc.style.visibility = 'visible';
    gv.style.visibility = 'hidden';
    hv.style.visibility = 'visible';
    tv.style.visibility = 'visible';
    sv.style.visibility = 'visible';
    siun.textContent = "KJ/mol";
 }

 btnt.addEventListener('click', hidet);
 function hidet() { 
     g = false;
     s = false;
     t = true;
     h = false;

     ph1.style.visibility = 'hidden';
     ph1.style.height = '2px';
      
     calc.style.visibility = 'visible';
     tv.style.visibility = 'hidden';
     gv.style.visibility = 'visible';
    hv.style.visibility = 'visible';
    sv.style.visibility = 'visible';
    siun.textContent = "k";
  }

  btns.addEventListener('click', hides);
  function hides() { 
      s = true;
      g = false;
      t = false;
      h = false;
  
      ph1.style.visibility = 'hidden';
      ph1.style.height = '2px'
      
      calc.style.visibility = 'visible';
      sv.style.visibility = 'hidden';
      gv.style.visibility = 'visible';
    tv.style.visibility = 'visible';
    hv.style.visibility = 'visible';
    siun.textContent = "J/k";
   }

   btnh.addEventListener('click', hideh);
function hideh() { 
    h = true;
    s = false;
    t = false;
    g = false;

    ph1.style.visibility = 'hidden';
    ph1.style.height = '2px'
    
    calc.style.visibility = 'visible';
    hv.style.visibility = 'hidden';
    gv.style.visibility = 'visible';
    tv.style.visibility = 'visible';
    sv.style.visibility = 'visible';
    siun.textContent = "J";
 }


function slv () {
     let g = Number(document.getElementById('g').value);
     let t = Number(document.getElementById('t').value);
     let h = Number(document.getElementById('h').value);
     let s = Number(document.getElementById('s').value);

     if (g = true){
        g = h-t*s;
         answr.textContent = g;

               //--- ph2 
        if (g>0){
           
            answr2.textContent = 'non-Spontaneous';
            answr3.textContent = "Reaction Direction = Reverse";
            
        };

        if (g<0){
            
            answr2.textContent = 'Spontaneous';
            answr3.textContent = "Reaction Direction = Forward";
            
        };

        if (g==0){
             
            answr2.textContent = '@ Equilibrium';
            answr3.textContent = "[Products] = [Reactants]";
            
        };





     }; 


     if (h = true) {
      let k = t*s;
        h = k+g;
        answr.textContent = h;
     }; 


     if (s = true){
       s = (h-g)/t ;
       answr.textContent = s;
       
     } ;


     if (t = true){
        t = (h-g)/s ;
        answr.textContent = t;
      };






    console.log(g);

    ph1.style.visibility = 'visible';
    ph1.style.height = 'auto';
     
    ph2.style.visibility = 'hidden';
    calc.style.visibility = ' hidden';
    hv.style.visibility = 'hidden';
    gv.style.visibility = 'hidden';
    tv.style.visibility = 'hidden';
    sv.style.visibility = 'hidden';

console.log(g);
   
}






calc.addEventListener('click', slv);