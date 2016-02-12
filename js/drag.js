/* 
  Arquivo relativo às funcionalidades do odo Drag 'n Drop, 
  especificamente. Baseado no módulo interact.js (http://interactjs.io/)
*/

  // Atribui funcionalidade Drag 'n Drop a elementos draggable
  interact('.draggable')
  .draggable({
    // Habilita inércia ao soltar o elemento
    inertia: true,
    // Mantém o elemento dentro de sua área
    restrict: {
      restriction: '#show',
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },

    // Chama a função dragMoveListener ao mover o elemento
    onmove: dragMoveListener,

  });
  
  // Atribui funcionalidade de redimensionamento a elementos draggable
  interact('.draggable')
  .draggable({ // Implmenta funcionalidade de arrastamento
    onmove: window.dragMoveListener
  })
  .resizable({ //Implmenta redimensionando junto com 'resizemove'
    edges: { left: true, right: true, bottom: true, top: true }
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // Atualiza o estilo (altura e largura) do elemento
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // Translada do topo e da esquerda quando redimensionando
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);    
    
  })
  .on('dragstart', function (event){ //Implementa trazer a imagem à frente assim que ela for arrastada
    var target = event.target;
    target.style.zIndex = (Number(target.style.zIndex) + 2);
  })
  .on('dragend', function (event){ //Implementa reduzir em 1 nível a image assim que ela terminar de ser arrastada
    var target = event.target;
    target.style.zIndex = (Number(target.style.zIndex) - 1);
  });

  function dragMoveListener (event) {
    var target = event.target,
        // Mantém o elemento posicionado de acordo com os atributos data-x/data-y
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // Translada (movimenta) o elemento
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // Atualiza a posição de acordo com os atributos
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }