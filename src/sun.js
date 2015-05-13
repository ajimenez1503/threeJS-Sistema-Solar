function Sun(radius){
this.resolution=25;
this.geometry=new THREE.SphereGeometry(radius,this.resolution,this.resolution);
this.material=new THREE.MeshPhongMaterial({color: 0xaaaa00}); //basic?
//this.material.emmissive= new THREE.Color(200,200,0);
this.mesh= new THREE.Mesh(this.geometry,this.material);
this.mesh.position.x = 0;
this.mesh.position.y = 0;
this.mesh.position.z = 0;
this.mesh.castShadow=false;
this.mesh.name = "Sun";


this.draw=function(scene){
	scene.add(this.mesh);
};

//this.planetas = [];
};
