// Guilherme Cunha Prada - 11/2023
"use strict";

import { getRandomColor } from "./modules/colors.js";
import { UI_flexbox } from "./modules/UI_flexbox.js";
/////////////////////////////////////////////////////////////////////////////// Main

let body = document.querySelector("body");

let container = UI_flexbox.createContainer();
body.appendChild(container);

let outer_bucket = UI_flexbox.addBucket(container, "row");

let bucket_1 = UI_flexbox.addBucket(outer_bucket, "column", "2");

UI_flexbox.addTextNode(bucket_1, "Paragrafo 1").style.background = getRandomColor();
UI_flexbox.addTextNode(bucket_1, "Paragrafo 2").style.background = getRandomColor();
UI_flexbox.addTextNode(bucket_1, "Paragrafo 3").style.background = getRandomColor();
UI_flexbox.addTextNode(bucket_1, "Paragrafo 1").style.background = getRandomColor();
UI_flexbox.addTextNode(bucket_1, "Paragrafo 2").style.background = getRandomColor();
UI_flexbox.addTextNode(bucket_1, "Paragrafo 3").style.background = getRandomColor();

let bucket_2 = UI_flexbox.addBucket(outer_bucket, "column");

UI_flexbox.addTextNode(bucket_2, "Paragrafo 1").style.background = getRandomColor();
UI_flexbox.addTextNode(bucket_2, "Paragrafo 2").style.background = getRandomColor();
UI_flexbox.addTextNode(bucket_2, "Paragrafo 3").style.background = getRandomColor();