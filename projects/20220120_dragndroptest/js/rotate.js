let noteId;
let nodeToRotate;

document.onmousedown = function (e) {
    console.log("mouse down");
    nodeToRotate = e.target;
    noteId = nodeToRotate.id;
    console.log(noteId);
}

document.onkeydown = function (e) {

    console.log(noteId);
    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = document.getElementById(noteId).getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top;
    console.log('Element is ' + offset + ' vertical pixels from <body>');

    switch (e.keyCode) {
        case 37:
            str = 'Left Key pressed!';
            if (nodeToRotate != null) {
                let newTransform = nodeToRotate.style.transform + " rotate(-10deg)";
                console.log(newTransform);
                nodeToRotate.style.transform = newTransform;
            }
            break;
        case 38:
            str = 'Up Key pressed!';
            if (nodeToRotate != null) {
                let newTransform = nodeToRotate.style.transform + " rotate(10deg)";
                console.log(newTransform);
                nodeToRotate.style.transform = newTransform;
            }
            break;
        case 39:
            str = 'Right Key pressed!';
            if (nodeToRotate != null) {
                let newTransform = nodeToRotate.style.transform + " rotate(10deg)";
                console.log(newTransform);
                nodeToRotate.style.transform = newTransform;
            }
            break;
        case 40:
            str = 'Down Key pressed!';
            if (nodeToRotate != null) {
                let newTransform = nodeToRotate.style.transform + " rotate(-10deg)";
                console.log(newTransform);
                nodeToRotate.style.transform = newTransform;
            }
            break;
    }

    console.log(str);
};