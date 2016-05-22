sw=false;
cd=false;
function langSwitch() {
	if (!sw) {
		$(".toggle-section").css({ "display": "inline-block" });
		sw=true;
		setTimeout(continueExecution6, 10)
        function continueExecution6() {
            cd=true;
        }
	} else {
		$(".toggle-section").css({ "display": "none" });
		sw=false;
	}
}
$(document).click(function() {
	if (cd) {
		$(".toggle-section").css({ "display": "none" });
		sw=false;
		cd=false;
	}
});