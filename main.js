// Guilherme Cunha Prada - 11/2023
"use strict";
import { getRandomColor, getColorCode } from "./modules/colors.js";
import { UI } from "./modules/UI.js";

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
UI.addTextNode(grid, "Paragrafo 1").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 2").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 3").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 4").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 5").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 6").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 7").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 8").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 9").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 10").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 11").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 12").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 13").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 14").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 15").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 16").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 17").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 18").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 19").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 20").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 21").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 22").style.background = getRandomColor();
UI.addTextNode(grid, "Paragrafo 23").style.background = getRandomColor();


