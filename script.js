document.getElementById("btn").addEventListener('click',function function_name(argument) {
	const currentWeight = document.getElementById("currentWeight").value;
	const currentHeight = document.getElementById("currentHeight").value;
	const goalWeight = document.getElementById("goalWeight").value;
	const age = document.getElementById("age").value;

	const activityLevel = document.querySelector('input[name="activityLevel"]:checked')?.value;
	const sex = document.querySelector('input[name=sex]:checked')?.value;

	if(currentWeight && currentHeight && goalWeight && age && activityLevel && sex){
		const queryString = `?currentWeight=${currentWeight}
							&currentHeight=${currentHeight}
							&goalWeight=${goalWeight}
							&age=${age}
							&activityLevel=${activityLevel}
							&sex=${sex}`;

		window.location.href = `result.html${queryString}`;
	}

	else{
		alert("Please Fill out all the credentials");
	}

})