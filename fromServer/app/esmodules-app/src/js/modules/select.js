export default async function (PATCH, DELETE, COMPLETE, url) {
	PATCH(
		document.querySelectorAll(".editBtn"),
		document.querySelectorAll(".saveBtn"),
		document.querySelectorAll(".listsBlockItemContent"),
		url
	);
	DELETE(
		document.querySelectorAll(".removeBtn"),
		url
	);
	COMPLETE(
		url,
		document.querySelectorAll(".buttons input"),
		document.querySelectorAll(".listsBlockItemContent")
	);
}