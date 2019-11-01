window.onload = function(){
    if (typeof (document.getElementsByTagName("frame")[1]) != "undefined") {
        if(document.baseURI == document.getElementsByTagName("frame")[1].baseURI) { 	
            window.location.replace(document.getElementsByTagName("frame")[1].src);
        }
    }
}

var element = document.createElement ('link');
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "https://haverkae.home.xs4all.nl/Files/Content/darkmode-force.css")
element.async = false;
document.documentElement.appendChild(element);