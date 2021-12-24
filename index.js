let home = (function () {
	pub = {};

	makeHTML = (name, title, bio, img) => {
		let css_class = img.split("\\").pop().split("/").pop().split(".")[0];
		console.log(css_class)
		return `
            <div role="listitem" class="blog-thumbnail w-dyn-item w-col w-col-4">
              <a href="#" data-w-id="46150442-4efa-9d36-3a4c-20d527e7a6bc" class="thumbnail-wrapper w-inline-block">
                <div class="image-wrapper">
				  <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"  class="thumbnail-image ${css_class}"></div>
                </div>
                <div class="thumbnail-text">
                  <div class="blog-title"></div>
                  <div class="preview-text" style="overflow-y: auto">${bio}</div>
                </div>
                <div class="thumb-details w-clearfix">
                  <div class="author-title">${name}</div>
                </div>
              </a>
            </div>

	`;
	};

	pub.setup = () => {
		$.ajax({
			type: "GET",
			url: "leaders.json",
			data: {
				get_param: "value",
			},
			dataType: "json",
			async: false,

			success: function (data) {
				let leaderSection = $("#leader-section");
				data.forEach((lead) => {
					// console.log(lead);
					leaderSection.append(
						makeHTML(lead.name, lead.title, lead.bio, lead.img)
					);
				});
			},
		});
	};

	return pub;
})();

$(document).ready(home.setup);
