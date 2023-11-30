// Guilherme Cunha Prada - 11/2023
"use strict";

/////////////////////////////////////////////////////////////////////////////// Functions

let randomColor = function(){

}

let createContainer = function(color, background) {
	let div = document.createElement("div");
	div.style.color = color || "white";
	div.style.background = background || "black";

	return div;
}

let addContainer = function(parent, color, background) {
	let container = createContainer(color, background);
	parent.appendChild(container);

	return container;
}

let createNode = function(textContent, color, background, size) {
	let div = document.createElement("div");
	div.style.borderRadius = "5px";
	div.style.border = "1px solid white";
	div.style.color = color || "white";
	div.style.background = background || "black";
	div.flex = size || "200px";

	let p = document.createElement("p");
	p.textContent = textContent;
	p.style.padding = "0px";
	p.style.marginRight = "2px";
	p.style.marginLeft = "2px";

	div.appendChild(p);
	return div;
}

let addNode = function(parent, textContent, size) {
	let paragraph = createNode(textContent, size);
	parent.appendChild(paragraph);

	return paragraph;
}

let createBucket = function(flex_direction, childList, proportion) {
	let div = document.createElement("div");
	div.classList.add("Bucket");
	div.style.display = "flex";
	div.style.flexDirection = flex_direction;
	// div.style["flex-wrap"] = "wrap";
	div.style.flex = proportion || "1";
	// div.style.border = "1px solid black";
	div.style.borderRadius = "5px";
	div.style.margin = "2px";
	div.style.lineHeight = "0px";
	div.style.marginTop = "2px";
	div.style.marginBottom = "2px";

	if (childList !== null) {
		for (child in childList) {
			div.appendChild(child);
		}
	}

	return div;
}

let addBucket = function(parent, display, childList, proportion) {
	let bucket = createBucket(display, childList, proportion);
	parent.appendChild(bucket);

	return bucket;
}
/////////////////////////////////////////////////////////////////////////////// Main

let body = document.querySelector("body");
body.style.margin = "0px";
body.style.padding = "0px";
// body.style.color = "white";
// body.style.background = "black";

let container = document.createElement("div");
container.style.margin = "0px";
container.style.padding = "0px";
container.style.width = "auto";
container.style.height = "auto";
container.style.minHeight = "100vh";
container.style.color = "white";
container.style.background = "purple";
body.appendChild(container);

let outer_bucket = addBucket(container, "row", null);
outer_bucket.style.margin = "0px";
outer_bucket.style.width = "auto";
outer_bucket.style.height = "auto";
outer_bucket.style.background = "grey";
outer_bucket.style.borderRadius = "0px";

let bucket_1 = addBucket(outer_bucket, "column", null, "2");
bucket_1.style.background = "green";

addNode(bucket_1, "Paragrafo 1");
addNode(bucket_1, "Paragrafo 2");
addNode(bucket_1, "Paragrafo 3");
addNode(bucket_1, "Paragrafo 1");
addNode(bucket_1, "Paragrafo 2");
addNode(bucket_1, "Paragrafo 3");

let bucket_2 = addBucket(outer_bucket, "column", null);
bucket_2.style.background = "orange";

addNode(bucket_2, "Paragrafo 1");
addNode(bucket_2, "Paragrafo 2");
addNode(bucket_2, "Paragrafo 3");

// for (let i = 1; i<30; i++) {
// 	let bucket_2 = addBucket(outer_bucket, "column", null);

// 	addNode(bucket_2, "Paragrafo 1");
// 	addNode(bucket_2, "Paragrafo 2");
// 	addNode(bucket_2, "Paragrafo 3");
// }