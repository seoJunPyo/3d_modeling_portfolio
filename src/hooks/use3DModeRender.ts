import React from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const use3DModeRender = () => {
	const ref = React.useRef<HTMLCanvasElement>(null);

	React.useEffect(() => {
		if (!ref.current) return;

		const scene = new THREE.Scene();
		scene.background = new THREE.Color('white');

		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.5,
			1000
		);

		const controls = new OrbitControls(camera, ref.current);

		controls.position0.set(0, 20, 100);
		controls.update();

		const light = new THREE.DirectionalLight(0x404040); // soft white light
		light.position.set(1, 1, 0);
		scene.add(light);

		const renderer = new THREE.WebGLRenderer({
			canvas: ref.current,
			antialias: true,
		});
		renderer.setSize(window.innerWidth, window.innerHeight);

		const gltfLoader = new GLTFLoader();
		gltfLoader.load('/data/adamHead/adamHead.gltf', (object) => {
			scene.add(object.scene);
		});

		camera.position.z = 1;

		const animate = () => {
			requestAnimationFrame(animate);

			controls.update();
			renderer.render(scene, camera);
		};

		animate();
	}, [ref]);

	return ref;
};

export default use3DModeRender;
