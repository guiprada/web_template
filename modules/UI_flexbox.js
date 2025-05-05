let createContainer = function () {
	let div = document.createElement("div");
	div.classList.add("Container");
	return div;
}

let addContainer = function (parent) {
	let container = createContainer();
	parent.appendChild(container);

	return container;
}

let createNode = function () {
	let node = document.createElement("div");
	node.classList.add("Node");

	return node;
}

let addTextNode = function (parent, textContent) {
	let node = createNode();

	let p = document.createElement("p");
	p.textContent = textContent;

	node.appendChild(p);
	parent.appendChild(node);

	return node;
}

let createBucket = function (flex_direction, proportion) {
	let bucket = document.createElement("div");
	bucket.classList.add("Bucket");

	bucket.style.display = "flex";
	bucket.style.flexDirection = flex_direction;
	bucket.style.flex = proportion || "1";

	return bucket;
}

let addBucket = function (parent, display, proportion) {
	let bucket = createBucket(display, proportion);
	parent.appendChild(bucket);

	return bucket;
}

let UI_flexbox = {
	createContainer,
	addContainer,
	createNode,
	addTextNode,
	createBucket,
	addBucket,
}

export { UI_flexbox }