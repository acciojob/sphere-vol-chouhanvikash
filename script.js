function volume_sphere() {
    //Write your code here
	  event.preventDefault();
let r = parseFloat(document.getElementById("radius").value);

	
let v=(4/3)*3.14*r*r*r;
let volume=document.getElementById("volume");
	volume.value = v;
	
  
} 

// window.onload = document.getElementById('MyForm').onsubmit =
// volume_sphere;
window.onload = function() {
  document.getElementById('MyForm').onsubmit = volume_sphere;
}

