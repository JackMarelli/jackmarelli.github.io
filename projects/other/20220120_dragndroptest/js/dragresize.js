import interact from
  'https://cdn.interactjs.io/v1.10.11/interactjs/index.js';

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');

  //SOLO DRAGGABLE
  interact('.draggable').draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: false
      })
    ],
    // enable autoScroll
    autoScroll: false,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end(event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
            Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  });

  //DRAG MOVE LISTENER
  function dragMoveListener(event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    let exTransform = target.style.transform;
    //console.log(exTransform);
    let rotatePos = exTransform.search("rotate");
    //console.log(rotatePos);
    let rotateString = "rotate(0)";
    if (rotatePos != -1) {
      rotateString = exTransform.substring(rotatePos, exTransform.lenght);
    }
    //console.log(rotateString);

    target.style.transform = 'translate(' + x + 'px, ' + y + 'px) ' + rotateString;

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }

  // this function is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener
});