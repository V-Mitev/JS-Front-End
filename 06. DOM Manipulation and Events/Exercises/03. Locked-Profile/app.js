function lockedProfile() {
	const buttons = Array.from(document.getElementsByTagName("button"));

	for (const button of buttons) {
		button.addEventListener("click", showInformation);
	}

	function showInformation(e) {
        let btn = e.target;
		let profile = btn.parentElement;

        let childrens = profile.children;

        let lockInput = childrens[2];
        let info = childrens[9];

        if (lockInput.checked) {
            return;
        }

        if (btn.textContent === "Show more") {
            info.style.display = 'block';

            btn.textContent = "Hide it";
        } else {
            info.style.display = 'none';
            
            btn.textContent = "Show more";
        }
	}
}
