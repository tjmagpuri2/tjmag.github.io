$(document).foundation()

var thehours = new Date().getHours();
	var themessage;
	var morning = ('Top of the mornin!');
	var afternoon = ('Wonderful afternoon!');
	var evening = ('It is night time');

	if (thehours >= 0 && thehours < 12) {
		themessage = morning;

	} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;

	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
	}

	$('.greeting').append(themessage);
