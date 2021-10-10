buttonRemove1.onclick = function () {
    text.classList.remove('this_test')
    text.classList.add('this_test_remove')
}
buttonRemove2.onclick = function () {
    buttonRemove2.classList.add('this_test_remove')
}
let a = 0;
clickother.onclick = function () {
    menucontrol.classList.remove('block_for_menu')
    menucontrol.classList.add('block_for_menu2')
   
    
}

function openHide(x){
            var u = x.getElementsByTagName('ul'), i = 0;
            while(u[i])
            {
                if(u[i].parentNode == x){
                    if(u[i].style.display == 'none'){
                        u[i].style.display = '';
                    }
                    else{
                        u[i].style.display = 'none';
                    }
                }
                ++i;
            }
        }


function Menu(param) {
    
}