let workPackages = (function () {
	pub = {};

	const openModalButtons = document.querySelectorAll("[data-modal-target]");
	const closeModalButtons = document.querySelectorAll("[data-close-button]");
	const overlay = $("#overlay");

	function openModal(modal) {
		if (modal == null) return;
		modal.classList.add("active");
		overlay.classList.add("active");
	}

	function closeModal(modal) {
		if (modal == null) return;
		modal.classList.remove("active");
		overlay.classList.remove("active");
	}

	makePkg = (title, desc, author, thumbnail, content) => {
		return `
					<div
						id="w-node-_25b018ff-bb9d-73f0-90a0-85096636098a-b3e0a829"
						style="cursor: pointer"
						class="blog-card"
					>
						<div class="cards-image-mask">
							<img
								src="${thumbnail}"
								alt=""
								class="cards-image"
							/>
						</div>
						<h3 class="card-title">${title}</h3>
						<div class="blog_body" style="display: none;"> 
						
						</div>
						<p>
							${desc}
						</p>
					</div>
		`;
	};

	displayPkgs = (pkgs) => {
		pkgs.forEach((post) => {
			let title = post.title;
			let desc = post.desc;
			let author = post.author;
			let thumbnail = post.thumbnail;
			let mdfile = post.content_md;
			let htmlfile = post.content_html;

			//console.log(htmlfile);
			//$.get(htmlfile, (data) => {
			//console.log("DATA:");
			//console.log(data);
			//});

			$(".cards-grid-container").append(
				makePkg(title, desc, author, thumbnail, htmlfile)
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

		$(".blog-card").on("click", (event) => {
			// TODO: Get modal to display blogpost
			let title = $(event.currentTarget).find("h3")[0].innerHTML;
			let body = $(event.currentTarget).find("p")[0].innerHTML;
			console.log(title);
			$(".title")[0].innerHTML = title;
			$(".modal-body")[0].innerHTML = body;
			$("#open-button").click();
		});
	};

	return pub;
})();

$(document).ready(pub.setup);
