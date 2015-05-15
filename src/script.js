var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var tierra;
var transformacionTierra;
var step=0;
var sol;

main();

function renderScene() {

	step+=0.01;
	tierra.animar(step);
	requestAnimationFrame(renderScene);
	renderer.render(scene, camera);
}

function main() {


	renderer.setClearColor(0xFFFFFF,1.0);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMapEnabled = true;
	renderer.setSize(window.innerWidth, window.innerHeight);

//add ejes
	var axes = new THREE.AxisHelper( 20 );
	scene.add(axes);

//add sol
	sol = new Sun(4,'img/sun.jpg');
	sol.draw(scene);


//Add planeta
	tierra= new Planeta(2,'img/earth.jpg',20);
	tierra.draw(scene);


//añadimos la luz
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( -40, 60, -10 );
spotLight.castShadow=true;
scene.add( spotLight );


// Añadir camara
camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);

$("#canvas").append(renderer.domElement);

renderScene();
}
