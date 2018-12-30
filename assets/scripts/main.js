/**
 *
 * @source: ./resources/js/main.js
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2018 Camper-fCC
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

window.onload = function() {
    // Get button element and elements with nav-link class
    let contentsButton = document.getElementById("contents-button");
    let navLinks = document.querySelectorAll(".nav-link");
    
    contentsButton.onclick = function() {
        // If nav-link is hidden, display it. Else, hide it.
        for (let linkIndex=0; linkIndex<navLinks.length; linkIndex++) {
            let navLinksClasses = navLinks[linkIndex].classList;

            if (navLinksClasses.contains("hide")) {
                navLinksClasses.add("show");
                navLinksClasses.remove("hide");
            }
            else {
                navLinksClasses.add("hide");
                navLinksClasses.remove("show");
            }
        }
    }
}
