let chairs = response.content.availableseat;
chairs.forEach((v,i) => {
	console.log("Deck " + (i+1));
	console.log("---------------------------");
	let maxColumns = 0;
	v.forEach((v2, i2) => {
		maxColumns = (maxColumns > v2.length) ? maxColumns : v2.length;
	})
	v.forEach((v2, i2) => {
		let rows = [];
		for(let ii = 0; ii < maxColumns; ii++){
			rows.push("_");
		}

		v2.forEach((v3, i3) => {
			if(v3.Column == "A"){
				rows[0] = "A";
			}
			if(v3.Column == "B"){
				rows[1] = "B";
			}
			if(v3.Column == "C"){
				rows[2] = "C";
			}
			if(v3.Column == "D"){
				rows[3] = "D";
			}
			if(v3.Column == "E"){
				rows[4] = "E";
			}
		})

		console.log("| " +rows.join(" | ") + " |");
	})
}) 