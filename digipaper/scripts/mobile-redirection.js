ScreenWidth = window.innerWidth;     
ScreenHeight = window.innerHeight;     

if (ScreenWidth < 980) {
	//window.location.href = "http://devwebs.ddns.net/err/403.html"
	//alert($("html").html());
	$("html").html("<head><meta http-equiv=Content-Type content=text/html; charset=UTF-8><meta name=viewport content=width=device-width, initial-scale=1, user-scalable=no><title>/digipaper</title><link rel=shortcut icon type=image/png href=images/icon.png><link rel=stylesheet href=materialize.css type=text/css><link rel=stylesheet href=style.css type=text/css></head><body><p>Mobile version is not avable now. Please open site on resolution > 980px</p></body>")
}