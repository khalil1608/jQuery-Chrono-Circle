(function($)
{
    $.fn.chronometer=function(options)
    {

        var defauts=
        {
            "width": 100,
            "days": 0,
            "hours": 0,
            "minutes": 0,
            "seconds": 0,
            "direction": "right",
            "callback": null,
            "function": null,
            "borderColorActive": '#A2ECFB',
            "borderColorInactive": '#39B4CC',
            "backgroundColor": '#f9f9f9'
        };

        var parameters=$.extend(defauts, options);

        var i = 0 , prec;
        var degs = 360;
        var activeBorder = null;

        var displayElement = {
            'text': null
        };

        //Add days to current date
        var addDays = function(date, days) {
            return new Date(date.setDate(date.getDate()+days));
        };
        //Add hours to current date
        var addHours = function(date, hours) {
            return new Date(date.setHours(date.getHours()+hours));
        };
        //Add minutes to current date
        var addMinutes = function(date, minutes) {
            return new Date(date.getTime() + (minutes*60000));
        };
        //Add seconds to current date
        var addSeconds = function(date, seconds) {
            return date.setSeconds(date.getSeconds() + seconds);
        };

        var now =  new Date();
        var targetTime = addDays(now, parameters.days);
        targetTime = addHours(targetTime, parameters.hours);
        targetTime = addMinutes(targetTime, parameters.minutes);
        targetTime = addSeconds(targetTime, parameters.seconds);

        // Difference between two dates => day / hour / minute /second
        var dateDiff = function(date1, date2){
            var diff = {}                           // Initialization
            var tmp = date2 - date1;

            tmp = Math.floor(tmp/1000);             // Number of seconds between 2 dates
            diff.sec = tmp % 60;                    // Extracting the number of seconds
            tmp = Math.floor((tmp-diff.sec)/60);    // Number of minutes
            diff.min = tmp % 60;                    // Extracting the number of minutes
            tmp = Math.floor((tmp-diff.min)/60);    // Number of hours
            diff.hour = tmp % 24;                   // Extracting the number of hours
            tmp = Math.floor((tmp-diff.hour)/24);   // Number of days remaining
            diff.day = tmp;
            return diff;
        };

        //GET Degree circle
        var getDegree = function(time, type)
        {
            type = type || null;
            var degree = 0;
            if(time > 0)
            {
                if(type == 'day')
                {
                    time = time%60 ;
                    degree = (time * 360) / 60;
                }
                else if(type == 'hour')
                {
                    time = time%60 ;
                    degree = (time * 360) / 60;
                }
                else if(type == 'min')
                {
                    time = time%60;
                    degree = (time * 360) / 60;
                }
                else
                {
                    degree = (time * 360) / 60;
                }
            }
            return Math.round(degree);

        };

        //Draw circle
        var draw = function(i){
            i++;
            if (i < 0)
                i = 0;
            if (i > degs)
                i = degs;
            prec = 0;
            if(i > 0)
            {
                prec = (100*i)/360;
            }
            if (i<=180){
                activeBorder.css({
                    'background-image': 'linear-gradient(' + (90+i) + 'deg, transparent 50%, '+ parameters.borderColorActive +' 50%),linear-gradient(90deg, '+ parameters.borderColorActive+' 50%, transparent 50%)',
                    'width': (parameters.width)+'px' ,
                    'height': (parameters.width)+'px'
                });
            }
            else{
                activeBorder.css({
                    'background-image': 'linear-gradient(' + (i-90) + 'deg, transparent 50%, '+ parameters.borderColorInactive +' 50%),linear-gradient(90deg, '+ parameters.borderColorActive +' 50%, transparent 50%)',
                    'width': (parameters.width)+'px' ,
                    'height': (parameters.width)+'px'
                });


            }

        };

        // Updates the countdown
        var start = function(){
            //Now
            var timeNow  = new Date();

            // We ensure that the remaining time is never negative (which is the case in the future targetTime)
            if( timeNow > targetTime ){
                timeNow = targetTime;
            }

            // Calculating remaining time
            var diff = dateDiff(timeNow, targetTime);
            var degree = 0;

            if(diff.day > 0)
            {
                var hour = (diff.hour >= 10) ? diff.hour : '0'+diff.hour;
                var min = (diff.min >= 10) ? diff.min : '0'+diff.min;
                displayElement.text.html(  diff.day+'d<sup>'+hour+'h'+min+'</sup>'  );
                var time = (diff.day * 24) + diff.hour + diff.min + diff.sec;
                degree = getDegree(time, 'day');
            }
            else if(diff.hour > 0)
            {
                var min = (diff.min >= 10) ? diff.min : '0'+diff.min;
                displayElement.text.html(  diff.hour+'h<sup>' + min + '</sup>'  );
                var time = (diff.hour * 60) + diff.min + diff.sec;
                degree = getDegree(time, 'hour');

            }
            else if(diff.min > 0)
            {
                displayElement.text.html(  diff.min+'<sup> m</sup>'  );
                var time = (diff.min * 60) + diff.sec;
                degree = getDegree(time, 'min');
            }
            else
            {
                displayElement.text.text(  diff.sec+' s'  );
                degree = getDegree(diff.sec, 'secs');
            }


            degree = (parameters.direction == 'right') ? degree : 360 - degree;
            draw(degree);
            return diff;
        };

        this.each(function()
        {
            var element=$(this);
            activeBorder = element.find('.active-border');
            circle = element.find('.circle');
            displayElement  =
            {
                'text': element.find('.prec')
            };
            //Set width and height container
            element.css({
                'width': (parameters.width - 10)+'px',
                'height': (parameters.width - 10)+'px',
                "border": parameters.border_size+' solid '+parameters.border_color
            });
            circle.css({
                'width': (parameters.width - 10)+'px',
                'height': (parameters.width - 10)+'px'
            });

            circle.find('.prec').css('top', ((parameters.width - 10) / 3)+'px');


            // Start Chronometer
            start();
            // Start Chronometer With interval
            var interval = setInterval(function()
            {

                var result = start();
                if(result.day == 0 && result.hour == 0 && result.min == 0 && result.sec == 0)
                {
                    clearInterval(interval);
                    if(parameters.callback)
                    {
                        parameters.callback();
                    }
                }
            },1000);

            if(parameters.function)
            {
                parameters.function();
            }
        });
        return this;
    };
})(jQuery);