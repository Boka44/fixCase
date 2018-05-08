(() => {
	console.log("You nosy devil.")
	const convert = (select, text) => {
		text += " ";
		const regex = /[.?!]\s+/g;
		let punctuation = text.match(regex);
		if(punctuation === null) {
			text += " ";
			punctuation = [' ']
		};
		if (select === "standard") {
			let result = [];
			let sentences = text.split(regex);
			sentences.forEach((sentence, indexS) => {
				sentence.trim();
				let words = sentence.split(" ");
				let tempW = [];
				words.forEach((word, index) => {
					let letters = word.split("");
					let tempL = [];
					if(index === 0) { 
						letters.forEach((letter, indexL) => {
							if(indexL === 0) {
								tempL.push(letter.toUpperCase());
							} else {
								tempL.push(letter.toLowerCase());
							}
						})
					} else {
						letters.forEach((letter) => {
						tempL.push(letter.toLowerCase());
						})
					}				
					tempW.push(tempL.join(""));
				})
				result.push(tempW.join(" "))
				result.push(punctuation[indexS])
			})
			result = result.join(" ").replace(/\s+(\W)/g, "$1");
			document.getElementById('result').innerHTML = result;
		}
		
		if (select === "camel") {
			let result = [];
			let sentences = text.split(regex);
			sentences.forEach((sentence, indexS) => {
				sentence.trim();
				let words = sentence.split(" ");
				let tempW = [];
				words.forEach((word, index) => {
					let letters = word.split("");
					let tempL = [];
					if(index !== 0) { 
						letters.forEach((letter, indexL) => {
							if(indexL === 0) {
								tempL.push(letter.toUpperCase());
							} else {
								tempL.push(letter.toLowerCase());
							}
						})
					} else {
						letters.forEach((letter) => {
						tempL.push(letter.toLowerCase());
						})
					}				
					tempW.push(tempL.join(""));
				})
				result.push(tempW.join(""));
				result.push(punctuation[indexS]);
			})
			result = result.join(" ").replace(/\s+(\W)/g, "$1");
			document.getElementById('result').innerHTML = result;
		}
		if (select === "upper") {
			let result = [];
			let sentences = text.split(regex);
			sentences.forEach((sentence, indexS) => {
				sentence.trim();
				let words = sentence.split(" ");
				let tempW = [];
				words.forEach((word, index) => {
					let letters = word.split("");
					let tempL = [];
						letters.forEach((letter) => {
						tempL.push(letter.toUpperCase());
						})
					
					tempW.push(tempL.join(""));
				})
				result.push(tempW.join(" "));
				result.push(punctuation[indexS]);
			})
			result = result.join(" ").replace(/\s+(\W)/g, "$1");
			document.getElementById('result').innerHTML = result;
		}
		if (select === "lower") {
			let result = [];
			let sentences = text.split(regex);
			sentences.forEach((sentence, indexS) => {
				sentence.trim();
				let words = sentence.split(" ");
				let tempW = [];
				words.forEach((word, index) => {
					let letters = word.split("");
					let tempL = [];
						letters.forEach((letter) => {
						tempL.push(letter.toLowerCase());
						})
					
					tempW.push(tempL.join(""));
				})
				result.push(tempW.join(" "));
				result.push(punctuation[indexS]);
			})
			result = result.join(" ").replace(/\s+(\W)/g, "$1");
			document.getElementById('result').innerHTML = result;
		}
	}

	const submit = () => {
		let text = document.getElementsByName('text')[0].value;
		let select = document.getElementById('select').value;
		convert(select, text);
	}
	document.getElementsByName('submit')[0].addEventListener("click", submit);
})();