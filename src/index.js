import _ from 'lodash';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { MuzzleFlashDemo } from './muzzleFlashDemo.js';


let scene, camera, renderer, clock;
let demo;

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

    clock = new THREE.Clock();

}

function setupScene() {

	var mesh = new THREE.Mesh(
		new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0xff0000 })
	);

    demo = new MuzzleFlashDemo();

    scene = demo.initScene();

	scene.add(mesh);

}

function animate() {

    requestAnimationFrame(animate);

    var delta = clock.getDelta();

    demo.render(delta);

    renderer.render(scene, camera);

}

(function (){

    init();
    setupScene();
    animate();

})();
