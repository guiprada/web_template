// Guilherme Cunha Prada - 11/2023
"use strict";

import { getRandomColor } from "./modules/colors.js";
import { UI } from "./modules/UI.js"

/////////////////////////////////////////////////////////////////////////////// Main
let body = document.querySelector("body");
let workspace = UI.addWorkspace(body);

//
let outer_stack = UI.addStack(workspace, "row");
let stack_1 = UI.addStack(outer_stack, "column", "2");
UI.addTextNode(stack_1, "Paragrafo 1").style.background = getRandomColor();
UI.addTextNode(stack_1, "Paragrafo 2").style.background = getRandomColor();
UI.addTextNode(stack_1, "Paragrafo 3").style.background = getRandomColor();
UI.addTextNode(stack_1, "Paragrafo 1").style.background = getRandomColor();
UI.addTextNode(stack_1, "Paragrafo 2").style.background = getRandomColor();
UI.addTextNode(stack_1, "Paragrafo 3").style.background = getRandomColor();

//
let stack_2 = UI.addStack(outer_stack, "column");

//
let stack_3 = UI.addStack(outer_stack, "column");
UI.addTextNode(stack_3, "Paragrafo 1").style.background = getRandomColor();
UI.addTextNode(stack_3, "Paragrafo 2").style.background = getRandomColor();
UI.addTextNode(stack_3, "Paragrafo 3").style.background = getRandomColor();

//
let grid = UI.addGrid(workspace);
UI.addTextNode(grid, "________");

//
let stack_ = UI.addStack(workspace, "rows");
