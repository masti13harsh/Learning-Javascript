<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Testing objects</title> 
		<script type="text/javascript">
			var car = {
				name: "Audi",
				model: "A4",
				color: "Black",
				numberOfTyres: "4"
			};
			function displayCar() {
				var carPara = document.getElementById("carObject");
				carPara.innerHTML = car.name + " " + car.model + " " + car.color + " " + car.numberOfTyres;
			}
		</script>
	</head>
	<body>
		<h1>Object Test</h1>
		<button onclick="displayCar()">Click Me</button>
		<p id="carObject"></p>
	</body>
</html>
