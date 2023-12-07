function encodeAndDecodeMessages() {
	let mainChildrens = document.getElementById("main").children;

	let encodeButton = mainChildrens[0].children[2];
	let decodeButton = mainChildrens[1].children[2];

	encodeButton.addEventListener("click", encode);
	decodeButton.addEventListener("click", decode);

	let encodeTextArea = mainChildrens[0].children[1];
	let decodeTextArea = mainChildrens[1].children[1];

	function encode() {
        decodeTextArea.value = '';

		for (let char of encodeTextArea.value.split("")) {
			decodeTextArea.value += String.fromCharCode(char.charCodeAt() + 1);
		}

		encodeTextArea.value = "";
	}

	function decode() {
        let decodedMessage = '';

		for (let char of decodeTextArea.value.split('')) {
			decodedMessage += String.fromCharCode(char.charCodeAt() - 1);
		}

        decodeTextArea.value = decodedMessage;
	}
}
