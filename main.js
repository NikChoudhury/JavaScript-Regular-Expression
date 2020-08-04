


// Regular Expressions


var userName = document.getElementById("userName"); 
var errorMessage = document.getElementById("errorMessage");

userName.addEventListener("input", function(e){
	// console.log(e.target.value);
	var pattern = /^@[\w,_,0-9]{5,20}$/
	var curentValue = e.target.value
	var vaildValue = pattern.test(curentValue);  //Vailidity Check
	// console.log(vaildValue)

	if (vaildValue) {
		errorMessage.style.display = "none";
	}else {
		errorMessage.style.display = "block";
	}
})