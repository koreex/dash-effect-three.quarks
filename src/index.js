import _ from 'lodash';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


let scene, camera, renderer;

function init() {

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 10;

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("black");

    document.body.appendChild(renderer.domElement);

    var controls = new OrbitControls(camera, renderer.domElement);

}

function setupScene() {

	var mesh = new THREE.Mesh(
		new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0xff0000 })
	);

	scene.add(mesh);

}

function animate() {

    requestAnimationFrame(animate);

    renderer.render(scene, camera);

}

(function () {

    init();

    setupScene();

    animate();

})();
