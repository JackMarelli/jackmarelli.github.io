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
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

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

  //SOLO RESIZABLE
  interact('.resizable').resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    listeners: {
      move(event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)

        // update the element's style
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
        target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 100, height: 50 }
      })
    ],

    inertia: true
  });

  //DRAGGABLE E RESIZABLE
  interact('.draggable-resizable')
    .resizable({
      // resize from all edges and corners
      edges: { left: true, right: true, bottom: true, top: true },

      listeners: {
        move(event) {
          var target = event.target
          var x = (parseFloat(target.getAttribute('data-x')) || 0)
          var y = (parseFloat(target.getAttribute('data-y')) || 0)

          // update the element's style
          target.style.width = event.rect.width + 'px'
          target.style.height = event.rect.height + 'px'

          // translate when resizing from top or left edges
          x += event.deltaRect.left
          y += event.deltaRect.top

          console.log("coordinate: " + parseInt(x) + ", " + parseInt(y));

          /*
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
          */

          
          let startReplacePos = target.style.transform.search("translate");
          let endReplacePos = target.style.transform.search(escapeRegExp(")"));
          console.log("start e end string translate: "+startReplacePos + " " + endReplacePos);

          let exTranslate = target.style.transform.substring(startReplacePos, endReplacePos);
          let newTranslate = 'translate(' +  parseInt(x) + 'px, ' +  parseInt(y) + 'px) ';
          target.style.transform.replace(exTranslate, newTranslate);
          console.log("paci was here");
          console.log("exTranslate: "+exTranslate);
          console.log("newTraslate: "+ newTranslate);
          
         
          //target.style.transform = 'translate(' + x + 'px, ' + y + 'px) ';

          target.setAttribute('data-x', x)
          target.setAttribute('data-y', y)
          target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
        }
      },
      modifiers: [
        // keep the edges inside the parent
        interact.modifiers.restrictEdges({
          outer: 'parent'
        }),

        // minimum size
        interact.modifiers.restrictSize({
          min: { width: 80, height: 80 },
          max: { width: 300, height: 300 }
        })
      ],

      inertia: true
    })
    .draggable({
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
      autoScroll: true,

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

/*
interact('.drag-rotate')
  .draggable({
  onstart: function (event) {
    const element = event.target;
    const rect = element.getBoundingClientRect();

    // store the center as the element has css `transform-origin: center center`
    element.dataset.centerX = rect.left + rect.width / 2;
    element.dataset.centerY = rect.top + rect.height / 2;
    // get the angle of the element when the drag starts
    element.dataset.angle = getDragAngle(event);
  },
  onmove: function (event) {
    var element = event.target;
    var center = {
      x: parseFloat(element.dataset.centerX) || 0,
      y: parseFloat(element.dataset.centerY) || 0,
    };
    var angle = getDragAngle(event);

    // update transform style on dragmove
    element.style.transform = 'rotate(' + angle + 'rad' + ')';
  },
  onend: function (event) {
    const element = event.target;

    // save the angle on dragend
    element.dataset.angle = getDragAngle(event);
  },
})

function getDragAngle(event) {
  var element = event.target;
  var startAngle = parseFloat(element.dataset.angle) || 0;
  var center = {
    x: parseFloat(element.dataset.centerX) || 0,
    y: parseFloat(element.dataset.centerY) || 0,
  };
  var angle = Math.atan2(center.y - event.clientY,
                         center.x - event.clientX);

  return angle - startAngle;
} */