/* background.js
 *
 * Author: tanyuan
 * Icons:  Google Material Icons
 *
 * Taipei, 2016
 *
 * Add icons to Google (Taiwan) Search navbar
 * Images, Videos, Map
 */

function iconify () {
    console.log("Load Extension: Iconify Google Search Bar ...");

    var navs = document.getElementsByClassName("hdtb-imb");
    for (var i = 0; i < navs.length; i++) {
        var nav = navs[i].getElementsByClassName("q")[0];
        if (!nav)
            continue;
        var text = nav.innerHTML;
        switch(text) {
            case "圖片":
                var imgURL = safari.extension.baseURI + "images/photo_24px.svg";
                nav.className += " iconify";
                nav.style.backgroundImage = "url(" + imgURL + ")";
                break;
            case "影片":
                var imgURL = safari.extension.baseURI + "images/videocam_24px.svg";
                nav.className += " iconify";
                nav.style.backgroundImage = "url(" + imgURL + ")";
                break;
            case "地圖":
                var imgURL = safari.extension.baseURI + "images/place_24px.svg";
                nav.className += " iconify";
                nav.style.backgroundImage = "url(" + imgURL + ")";
                break;
            case "新聞":
                var imgURL = safari.extension.baseURI + "images/receipt_24px.svg";
                nav.className += " iconify";
                nav.style.backgroundImage = "url(" + imgURL + ")";
                break;
        }
    }  
}

// Google Search use AJAX to load search results, 
// so we have to monitor everytime new things added to the web page.
document.addEventListener('DOMNodeInserted', iconify);
