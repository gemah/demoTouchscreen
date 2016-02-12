/* Script de ativação do Swipebox e adequação da página às funcionalidades */

;( function( $ ) {
    $( '.swipebox' ).swipebox();
} )( jQuery );

//Retira funcionalidade padrão da tag <a> (entra em conflito com a solução encontrada com swipebox)
var links = document.querySelectorAll('a');

for(var j=0; j<links.length; j++){
    links[j].addEventListener('click', function(event){
        event.preventDefault();
    });
}