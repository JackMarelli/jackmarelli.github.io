import "./style.css";
import * as THREE from "three";
import { RedFormat } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//SETUP
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

//CYL
const geometry = new THREE.CylinderGeometry(5, 5, 20, 50);
const material = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  wireframe: true,
});
const cyl = new THREE.Mesh(geometry, material);
cyl.position.x = 0;
cyl.position.y = 10;
cyl.position.z = 0;

//POINT LIGHT
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(30, 30, 30);

//AMBIENT LIGHT
const ambientLight = new THREE.AmbientLight(0x404040);

//CONTROLS
//const controls = new OrbitControls(camera, renderer.domElement);

//HELPERS
const gridHelper = new THREE.GridHelper(200, 50);
const lightHelper = new THREE.PointLightHelper(pointLight);

scene.add(cyl);
scene.add(ambientLight, pointLight);
scene.add(gridHelper, lightHelper);

//ANIMATE
function animate() {
  requestAnimationFrame(animate);

  //ROTATE CYL
  /*
  cyl.rotation.x += 0.01;
  cyl.rotation.y += 0.005;
  cyl.rotation.z += 0.03;
  */

  //controls.update();
  renderer.render(scene, camera);
}

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  cyl.rotation.x = t * -0.0001;
  cyl.rotation.y = t * -0.0001;
  cyl.rotation.z = t * -0.0005;

  //camera.position.x = t * -0.01;
  //camera.position.y = t * -0.02;
  camera.position.z = t * -0.03;
}

document.body.onscroll = moveCamera;
animate();
