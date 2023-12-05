function validate() {
	let email = document.getElementById("email");

	email.addEventListener("change", change);

	function change(e) {
		const regex = new RegExp("^[a-z]+@[a-z]+.[a-z]+", "g");

		let isMatching = regex.test(e.target.value);

		if (!isMatching && e.target.value.length > 0) {
			e.target.classList = "error";
		} else {
            e.target.classList.remove('error');
        }
	}
}
