let workPackages = (function () {
	pub = {};

	const openModalButtons = document.querySelectorAll("[data-modal-target]");
	const closeModalButtons = document.querySelectorAll("[data-close-button]");
	const overlay = $("#overlay");

	function openModal(modal) {
		console.log("openModal");
		if (modal == null) return;
		modal.classList.add("active");
		overlay.classList.add("active");
	}

	function closeModal(modal) {
		console.log("closeModal");
		if (modal == null) return;
		modal.classList.remove("active");
		overlay.classList.remove("active");
	}

	makePkg = (title, author, thumbnail, content) => {
		return `
					<div
						id="w-node-_25b018ff-bb9d-73f0-90a0-85096636098a-b3e0a829"
					>
						<div class="cards-image-mask">
							<img
								src="${thumbnail}"
								alt=""
								class="cards-image"
							/>
						</div>
						<h3>${title}</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse varius enim in eros elementum
							tristique.
						</p>
					</div>
		`;
	};

	displayPkgs = (pkgs) => {
		pkgs.forEach((post) => {
			let title = post.title;
			let author = post.author;
			let thumbnail = post.thumbnail;
			let content = post.content_md;

			$(".cards-grid-container").append(
				makePkg(title, author, thumbnail, content)
			);
		});
	};

	pub.setup = () => {
		$.ajax({
			type: "GET",
			url: "blog.json",
			data: {
				get_param: "value",
			},
			dataType: "json",
			async: false,
			success: function (data) {
				let posts = [];
				posts = data.posts;

				displayPkgs(posts);
			},
			error: () => {
				alert("Could not load blog post data.");
			},
		});

		openModalButtons.forEach((button) => {
			button.addEventListener("click", () => {
				const modal = document.querySelector(
					button.dataset.modalTarget
				);
				openModal(modal);
			});
		});

		overlay.on("click", () => {
			const modals = document.querySelectorAll(".modal.active");
			modals.forEach((modal) => {
				closeModal(modal);
			});
		});

		closeModalButtons.forEach((button) => {
			button.addEventListener("click", () => {
				const modal = button.closest(".modal");
				closeModal(modal);
			});
		});
		console.log("here");
	};

	return pub;
})();

$(document).ready(pub.setup);
