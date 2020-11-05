let body = document.querySelector('body');
var checkbox = document.querySelector('#dark-mode')
		checkbox.addEventListener("click", terms_change)

function terms_change(){
    //If it is checked.
    if(body.style.backgroundColor == 'white'){
        alert('you atived the page darkmode');
				checkbox.checked = true;
							body.style.backgroundColor = '#121519';
    }
    //If it has been unchecked.
    else{
        alert('you atived the page lightmode');
				checkbox.checked = false;
				body.style.backgroundColor = 'white';
							
    }
}
   