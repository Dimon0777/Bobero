let a = [];
let b = 0;

function Addm() {

	let x = "Hello ";
	
	let y = document.getElementById("input").value;
	let z = ", how are you doing?";
	let msg = "none";  
	if (y == "Dima")
	{
		msg="inr";
	}
	else
	{
		msg=x+y+z;
	}
	const output = document.getElementById("msg()output");
	output.style.display = "block";
	output.innerHTML =msg;

}

function ADD() {
	a[b]=document.getElementById("input").value;
	b++;
	
	
}

function display(){
	let msg1 = ""; 
	let i =0;
	while (a[i]!=null)
	{
		msg1=msg1+", "+a[i];
		i++;
	}
	msg1=msg1+".";
	msg1=msg1.substring(1,msg1.length);
	const output = document.getElementById("msg()output");
	output.style.display = "block";
	output.innerHTML =msg1;
}

function Remove(){
	a[b-1]=null;
	b=b-1;
}