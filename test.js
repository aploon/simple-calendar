$.ajax({
    url: "reservations/fullcalendar",
    method: "GET",
    dataType: "json",
    success: function(data) {

        var events = [data.length];
        for (let i = 0; i < data.length; i++) {
            var todayDate = moment().startOf('day');
            var TODAY = todayDate.format('YYYY-MM-DD');
            var className = '';
            if (data[i].date_debut > TODAY) {
                className = "fc-event-danger fc-event-solid-warning"
                if (data[i].date_debut > TODAY + '+02 days') {
                    className = "fc-event-danger fc-event-solid-primary"
                }
            } else if (data[i].date_fin > TODAY) {
                className = "fc-event-danger fc-event-solid-light"
            } else {
                className = "fc-event-success"
            }
            events[i] = {
                title: data[i].nom,
                start: data[i].date_debut,
                description: (data[i].description == null) ? data[i].nom : data[i]
                    .description,
                end: data[i].date_fin,
                className: className
            }
        }
        
    }
})