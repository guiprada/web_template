// Guilherme Cunha Prada - 11/2023
"use strict";
import { getRandomColor } from "./modules/colors.js";
import { UI } from "./modules/UI.js";

/////////////////////////////////////////////////////////////////////////////// Main

let body = document.querySelector("body");

let container = UI.createContainer();
body.appendChild(container);

let outer_bucket = UI.addBucket(container, "row");

let bucket_1 = UI.addBucket(outer_bucket, "column", "2");

UI.addTextNode(bucket_1, "Paragrafo 1").style.background = getRandomColor();
UI.addTextNode(bucket_1, "Paragrafo 2").style.background = getRandomColor();
UI.addTextNode(bucket_1, "Paragrafo 3").style.background = getRandomColor();
UI.addTextNode(bucket_1, "Paragrafo 1").style.background = getRandomColor();
UI.addTextNode(bucket_1, "Paragrafo 2").style.background = getRandomColor();
UI.addTextNode(bucket_1, "Paragrafo 3").style.background = getRandomColor();

let bucket_2 = UI.addBucket(outer_bucket, "column");

UI.addTextNode(bucket_2, "Paragrafo 1").style.background = getRandomColor();
UI.addTextNode(bucket_2, "Paragrafo 2").style.background = getRandomColor();
UI.addTextNode(bucket_2, "Paragrafo 3").style.background = getRandomColor();
