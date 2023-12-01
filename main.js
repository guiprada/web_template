import { getRandomColor } from "./modules/colors.js";

"use strict";
// Guilherme Cunha Prada - 11/2023
/////////////////////////////////////////////////////////////////////////////// Functions
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
/////////////////////////////////////////////////////////////////////////////// Main

let body = document.querySelector("body");

let container = createContainer();
body.appendChild(container);

let outer_bucket = addBucket(container, "row");

let bucket_1 = addBucket(outer_bucket, "column", "2");

addTextNode(bucket_1, "Paragrafo 1").style.background = getRandomColor();
addTextNode(bucket_1, "Paragrafo 2").style.background = getRandomColor();
addTextNode(bucket_1, "Paragrafo 3").style.background = getRandomColor();
addTextNode(bucket_1, "Paragrafo 1").style.background = getRandomColor();
addTextNode(bucket_1, "Paragrafo 2").style.background = getRandomColor();
addTextNode(bucket_1, "Paragrafo 3").style.background = getRandomColor();

let bucket_2 = addBucket(outer_bucket, "column");

addTextNode(bucket_2, "Paragrafo 1").style.background = getRandomColor();
addTextNode(bucket_2, "Paragrafo 2").style.background = getRandomColor();
addTextNode(bucket_2, "Paragrafo 3").style.background = getRandomColor();