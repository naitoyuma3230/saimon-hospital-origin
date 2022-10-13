$(function () {
	$(".news-modal-btn").on("click", () => {
		MicroModal.show("modal-1");
	});
});

$(function () {
	$(".coram-list").on("click", () => {
		window.location.href = "coram.html";
	});
});
