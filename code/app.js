let time_seconds = Math.floor(Math.random() * 59) + 1;
let time_minutes = Math.floor(Math.random() * 59) + 1;
let time_hours = Math.floor(Math.random() * 23) + 1;
let time_days = Math.floor(Math.random() * 364) + 1;
let time_years = Math.floor(Math.random() * 100) + 1;

const doom = new Audio('doom.mp3');
const click_effect = new Audio('click.mp3');
let unity = 1;
let counter = document.getElementById('counter')
let now = false;

counter.innerHTML = time_years + ' years : ' + time_days + ' days : ' + time_hours + ' hours <br>' + time_minutes + ' minutes : ' + time_seconds + ' seconds '

//setTimeout(function(){time_years -= 1; time_days += 364; time_hours += 23; time_minutes += 59;  time_seconds += 60;}, 1000);

setInterval(
	function()
	{
		click_effect.currentTime = 0;
		time_seconds -= unity;
		click_effect.play();
		if (time_seconds < 0)
		{
			time_seconds += 60;
			time_minutes -= unity;
		}
		if (time_minutes < 0)
		{
			time_minutes += 60;
			time_hours -= unity;
		}
		if (time_hours < 0)
		{
			time_hours += 24;
			time_days -= unity;
		}
		if (time_days < 0)
		{
			time_days += 365;
			time_years -= unity;
		}
		if (time_years == 0 && time_days == 0 & time_hours == 0 && time_minutes == 0 && time_seconds == 0)
		{
			doom.play();
			unity = 0;			
		}
		counter.innerHTML = time_years + ' years : ' + time_days + ' days : ' + time_hours + ' hours <br>' + time_minutes + ' minutes : ' + time_seconds + ' seconds '
	}, 1000
);

