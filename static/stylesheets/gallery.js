window.onload = () => {
	let all = document.getElementsByClassName("zoomD"),
		lightbox = document.getElementById("lightbox"),
		outer = document.getElementsByClassName("outer");

	if (outer.length > 0) {
		for (let i of outer) {
			i.onclick = () => {
				for (var j = 0; j < all.length; j++) {
					if (i == outer[j]) {
						let clone = all[j].cloneNode(true);
						clone.className = "";
						lightbox.innerHTML = "";
						lightbox.appendChild(clone);
						lightbox.className = "show";
					}
				}
			};
		}
	}

	lightbox.onclick = () => (lightbox.className = "");
};
