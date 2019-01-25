var sk = "secretkey";
	var myInput = document.getElementById("psw");
	var comment = document.getElementById("comment")
	function validate() {
		if (comment == "") {
			alert("comment is empty");
				
			return;
		}
		if (sk == myInput) {
			console.log("success");
		}
	};