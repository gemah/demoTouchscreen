var btns, show; //Variáveis para captar botões e espaços de exibição

//Inicializa as variáveis e prepara as divs onde serão mostradas as fotos
function init(){
    
    btns = document.querySelectorAll('button');
    show = document.getElementsByClassName('right-show');
	for(var i=0; i<show.length; i++){
        show[i].style.display = 'none';
    }

}

//Adiciona eventos a cada botão
function buttonEventDef(){

    for(var i=0; i<btns.length; i++){
        
        (function(){
            var thisIndex = i;

            btns[i].addEventListener('click', function(){
                this.classList.remove('side-button');
                this.classList.add('clicked-button');
                show[thisIndex].style.display = 'initial';

                for(var j=0; j<btns.length; j++){
                    if(j != thisIndex){
                        btns[j].classList.remove('clicked-button');
                        btns[j].classList.add('side-button');
                        show[j].style.display = 'none';
                    }
                }

            });
        })();

    }

}

window.onload = init();
buttonEventDef();
document.getElementById('preload').style.display = 'none';