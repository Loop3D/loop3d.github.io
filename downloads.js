let downloads = (function () {
	pub = {};

	makePub = (title, authors, link) => {
		return `<div class="w-container">
				  <div class="w-richtext">
					<br>
					<h3>${title}</h3>
					<blockquote>${authors}
					<a download href="${link}">
						Download - DOI
					</a>
					</blockquote>

				  </div>
				</div>
		`;
	};

	makeHTML = (title, desc, img, linux, windows) => {
		return `
			<div class="w-container">
				<div class="section-heading">
					<h2 class="section-title">${title}</h2>
					<div class="med-divider"></div>
				</div>
				<div class="div-block-3">
					<div class="w-layout-grid grid-2">
						<div
							id="w-node-_692d1ba7-8679-958a-1047-64c9fcf6c5be-a6e0a827"
							class="w-layout-grid grid-3"
						>
							<div
								id="w-node-aef5b7eb-3e62-846c-2fcf-2389da3cd13c-a6e0a827"
							>
								${desc}
							</div>
							<div
								id="w-node-_1a3d4477-4d3c-b4cf-d67a-46a5d0cf627c-a6e0a827"
								class="w-layout-grid grid-4"
							>
								<a
									id="w-node-c74467e5-7e49-12fc-e821-696cdf3dd9a1-a6e0a827"
									href="${linux}"
									class="button-2 w-button"
									>x64 Linux</a
								>
								<a
									id="w-node-_1312a822-9347-be65-d59f-c9bd47a9336f-a6e0a827"
									href="${windows}"
									class="button-3 w-button"
									>x64 Windows</a
								>
							</div>
						</div>
						<div
							id="w-node-_48fb8d7a-6eda-967e-6dda-b3919c2e6a38-a6e0a827"
						></div>
						<img
							src="${img}"
							loading="lazy"
							id="w-node-_6671e186-3c17-77ae-892f-d82bb0a81b90-a6e0a827"
							sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
							alt=""
						/>
					</div>
				</div>
			</div>
		`;
	};

	pub.setup = () => {
		$.ajax({
			type: "GET",
			url: "downloads.json",
			data: {
				get_param: "value",
			},
			dataType: "json",
			async: false,

			success: function (data) {
				let leaderSection = $("#main-area");
				let pubsSection = $("#other-area");
				software = data.software;
				publications = data.publications;

				software.forEach((item) => {
					leaderSection.append(
						makeHTML(
							item.title,
							item.desc,
							item.img,
							item.linux,
							item.windows
						)
					);
				});

				publications.forEach((item) => {
					pubsSection.append(
						makePub(item.title, item.authors, item.link)
					);
				});

				console.log(publications);
			},
		});
	};

	return pub;
})();

$(document).ready(downloads.setup);
