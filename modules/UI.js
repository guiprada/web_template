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
	stack.classList.add("Container");

	stack.style.flexDirection = flex_direction;
	stack.style.flex = proportion || "1";

	return stack;
}

let addStack = (parent, display, proportion) => {
	let stack = createStack(display, proportion);
	parent.appendChild(stack);

	return stack;
}

let createGrid = () => {
	let grid = document.createElement("div");
	grid.classList.add("Grid");
	grid.classList.add("Container");

	return grid;
}

let addGrid = (parent) => {
	let grid = createGrid();
	parent.appendChild(grid);

	return grid
}

let UI = {
	// createWorkspace,
	addWorkspace,
	createNode,
	addTextNode,
	createStack,
	addStack,
	createGrid,
	addGrid,
}

export { UI }