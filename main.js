// Guilherme Cunha Prada - 11/2023
"use strict";

import { getRandomColor } from "./modules/colors.js";

/////////////////////////////////////////////////////////////////////////////// Functions
let createWorkspace = () => {
	let div = document.createElement("div");
	div.classList.add("Workspace");
	return div;
}

let addWorkspace = (parent) => {
	let workspace = createWorkspace();
	parent.appendChild(workspace);

	return workspace;
}

let createNode = () => {
	let node = document.createElement("div");
	node.classList.add("Node");

	return node;
}

let addTextNode = (parent, textContent) => {
	let node = createNode();

	let p = document.createElement("p");
	p.textContent = textContent;

	node.appendChild(p);
	parent.appendChild(node);

	return node;
}

let createStack = (flex_direction, proportion) => {
	let stack = document.createElement("div");
	stack.classList.add("Stack");

	stack.style.display = "flex";
	stack.style.flexDirection = flex_direction;
	stack.style.flex = proportion || "1";

	return stack;
}

let addStack = (parent, display, proportion) => {
	let stack = createStack(display, proportion);
	parent.appendChild(stack);

	return stack;
}

let createGrid
/////////////////////////////////////////////////////////////////////////////// Main

let body = document.querySelector("body");

let workspace = addWorkspace(body);

//
let outer_stack = addStack(workspace, "row");

let stack_1 = addStack(outer_stack, "column", "2");

addTextNode(stack_1, "Paragrafo 1").style.background = getRandomColor();
addTextNode(stack_1, "Paragrafo 2").style.background = getRandomColor();
addTextNode(stack_1, "Paragrafo 3").style.background = getRandomColor();
addTextNode(stack_1, "Paragrafo 1").style.background = getRandomColor();
addTextNode(stack_1, "Paragrafo 2").style.background = getRandomColor();
addTextNode(stack_1, "Paragrafo 3").style.background = getRandomColor();

//

let stack_2 = addStack(outer_stack, "column");

addTextNode(stack_2, "Paragrafo 1").style.background = getRandomColor();
addTextNode(stack_2, "Paragrafo 2").style.background = getRandomColor();
addTextNode(stack_2, "Paragrafo 3").style.background = getRandomColor();

//

// let grid =