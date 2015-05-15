function Planeta(radius,textura,distancia){
	this.resolution=25;
	this.geometry=new THREE.SphereGeometry(radius,this.resolution,this.resolution);
	this.material=new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(textura) });
	this.mesh= new THREE.Mesh(this.geometry,this.material);
	this.mesh.position.x = distancia;
	this.mesh.position.y = 0;
	this.mesh.position.z = 0;
	this.mesh.castShadow=false;
	this.mesh.name = "Planeta";

	//objeto intermedio para realizar transformaciones
	this.transformacion=new THREE.Object3D();

	this.animar=function(step){
		this.mesh.rotation.y=step;
		this.transformacion.rotation.y=step;
	};

	this.draw=function(scene){
		scene.add(this.transformacion);
		this.transformacion.add(this.mesh);
	};

	//this.satelites = [];
};
