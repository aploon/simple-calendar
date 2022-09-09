$.ajax({
    url: "fetch.php",
    method: "GET",
    dataType: "json",
    success: function (data) {

        var events = [data.length];
        A = () => Date.now().toString() + Math.floor(1e3 * Math.random()).toString();
        for (let i = 0; i < data.length; i++) {
            // var todayDate = moment().startOf('day');
            // var TODAY = todayDate.format('YYYY-MM-DD');
            // var className = '';
            // if (data[i].date_start_event > TODAY) {
            //     className = "fc-event-danger fc-event-solid-warning"
            //     if (data[i].date_start_event > TODAY + ' +2 days') {
            //         className = "fc-event-danger fc-event-solid-primary"
            //     }
            // } else if (data[i].date_end_event > TODAY) {
            //     className = "fc-event-danger fc-event-solid-light"
            // } else {
            //     className = "fc-event-success"
            // }
            events[i] = {
                // title: data[i].nom,
                // start: data[i].date_debut,
                // description: (data[i].description == null) ? data[i].nom : data[i]
                //     .description,
                // end: data[i].date_fin,
                // className: className
                id: A(),
                title: data[i].name_event,
                start: data[i].date_start_event + ' ' + data[i].time_start_event,
                end: data[i].date_end_event + ' ' + data[i].time_end_event,
                description: data[i].description_event,
                className: '',
                location: data[i].location_event
            }


            console.log(events)

        }

        "use strict";
        var KTAppCalendar = function () {
            var e, t, n, a, o, r, i, l, d, c, s, m, u, v, f, p, y, D, k, _, g, b, S, h, T, Y, w, L, E, M = {
                id: "",
                eventName: "",
                eventDescription: "",
                eventLocation: "",
                startDate: "",
                endDate: "",
                allDay: !1
            };
            const x = () => {
                v.innerText = "Add a New Event", u.show();
                const o = f.querySelectorAll('[data-kt-calendar="datepicker"]'),
                    i = f.querySelector("#kt_calendar_datepicker_allday");
                i.addEventListener("click", (e => {
                    e.target.checked ? o.forEach((e => {
                        e.classList.add("d-none")
                    })) : (l.setDate(M.startDate, !0, "Y-m-d"), o.forEach((e => {
                        e.classList.remove("d-none")
                    })))
                })), C(M), D.addEventListener("click", (function (o) {
                    o.preventDefault(), p && p.validate().then((function (o) {
                        console.log("validated!"), "Valid" == o ? (D.setAttribute("data-kt-indicator", "on"), D.disabled = !0, setTimeout((function () {
                            D.removeAttribute("data-kt-indicator"), Swal.fire({
                                text: "New event added to calendar!",
                                icon: "success",
                                buttonsStyling: !1,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            }).then((function (o) {
                                if (o.isConfirmed) {
                                    u.hide(), D.disabled = !1;
                                    let o = !1;
                                    i.checked && (o = !0), 0 === c.selectedDates.length && (o = !0);
                                    var d = moment(r.selectedDates[0]).format(),
                                        s = moment(l.selectedDates[l.selectedDates.length - 1]).format();
                                    if (!o) {
                                        const e = moment(r.selectedDates[0]).format("YYYY-MM-DD"),
                                            t = e;
                                        d = e + "T" + moment(c.selectedDates[0]).format("HH:mm:ss"), s = t + "T" + moment(m.selectedDates[0]).format("HH:mm:ss")
                                    }
                                    e.addEvent({
                                        id: A(),
                                        title: t.value,
                                        description: n.value,
                                        location: a.value,
                                        start: d,
                                        end: s,
                                        allDay: o
                                    }), e.render(), f.reset()
                                }
                            }))
                        }), 2e3)) : Swal.fire({
                            text: "Sorry, looks like there are some errors detected, please try again.",
                            icon: "error",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        })
                    }))
                }))
            },
                B = () => {
                    var e, t, n;
                    w.show(), M.allDay ? (e = "All Day", t = moment(M.startDate).format("Do MMM, YYYY"), n = moment(M.endDate).format("Do MMM, YYYY")) : (e = "", t = moment(M.startDate).format("Do MMM, YYYY - h:mm a"), n = moment(M.endDate).format("Do MMM, YYYY - h:mm a")), g.innerText = M.eventName, b.innerText = e, S.innerText = M.eventDescription ? M.eventDescription : "--", h.innerText = M.eventLocation ? M.eventLocation : "--", T.innerText = t, Y.innerText = n
                },
                q = () => {
                    L.addEventListener("click", (o => {
                        o.preventDefault(), w.hide(), (() => {
                            v.innerText = "Edit an Event", u.show();
                            const o = f.querySelectorAll('[data-kt-calendar="datepicker"]'),
                                i = f.querySelector("#kt_calendar_datepicker_allday");
                            i.addEventListener("click", (e => {
                                e.target.checked ? o.forEach((e => {
                                    e.classList.add("d-none")
                                })) : (l.setDate(M.startDate, !0, "Y-m-d"), o.forEach((e => {
                                    e.classList.remove("d-none")
                                })))
                            })), C(M), D.addEventListener("click", (function (o) {
                                o.preventDefault(), p && p.validate().then((function (o) {
                                    console.log("validated!"), "Valid" == o ? (D.setAttribute("data-kt-indicator", "on"), D.disabled = !0, setTimeout((function () {
                                        D.removeAttribute("data-kt-indicator"), Swal.fire({
                                            text: "New event added to calendar!",
                                            icon: "success",
                                            buttonsStyling: !1,
                                            confirmButtonText: "Ok, got it!",
                                            customClass: {
                                                confirmButton: "btn btn-primary"
                                            }
                                        }).then((function (o) {
                                            if (o.isConfirmed) {
                                                u.hide(), D.disabled = !1, e.getEventById(M.id).remove();
                                                let o = !1;
                                                i.checked && (o = !0), 0 === c.selectedDates.length && (o = !0);
                                                var d = moment(r.selectedDates[0]).format(),
                                                    s = moment(l.selectedDates[l.selectedDates.length - 1]).format();
                                                if (!o) {
                                                    const e = moment(r.selectedDates[0]).format("YYYY-MM-DD"),
                                                        t = e;
                                                    d = e + "T" + moment(c.selectedDates[0]).format("HH:mm:ss"), s = t + "T" + moment(m.selectedDates[0]).format("HH:mm:ss")
                                                }
                                                e.addEvent({
                                                    id: A(),
                                                    title: t.value,
                                                    description: n.value,
                                                    location: a.value,
                                                    start: d,
                                                    end: s,
                                                    allDay: o
                                                }), e.render(), f.reset()
                                            }
                                        }))
                                    }), 2e3)) : Swal.fire({
                                        text: "Sorry, looks like there are some errors detected, please try again.",
                                        icon: "error",
                                        buttonsStyling: !1,
                                        confirmButtonText: "Ok, got it!",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    })
                                }))
                            }))
                        })()
                    }))
                },
                C = () => {
                    t.value = M.eventName ? M.eventName : "", n.value = M.eventDescription ? M.eventDescription : "", a.value = M.eventLocation ? M.eventLocation : "", r.setDate(M.startDate, !0, "Y-m-d");
                    const e = M.endDate ? M.endDate : moment(M.startDate).format();
                    l.setDate(e, !0, "Y-m-d");
                    const o = f.querySelector("#kt_calendar_datepicker_allday"),
                        i = f.querySelectorAll('[data-kt-calendar="datepicker"]');
                    M.allDay ? (o.checked = !0, i.forEach((e => {
                        e.classList.add("d-none")
                    }))) : (c.setDate(M.startDate, !0, "Y-m-d H:i"), m.setDate(M.endDate, !0, "Y-m-d H:i"), l.setDate(M.startDate, !0, "Y-m-d"), o.checked = !1, i.forEach((e => {
                        e.classList.remove("d-none")
                    })))
                },
                N = e => {
                    M.id = e.id, M.eventName = e.title, M.eventDescription = e.description, M.eventLocation = e.location, M.startDate = e.startStr, M.endDate = e.endStr, M.allDay = e.allDay
                };
            return {
                init: function () {
                    const C = document.getElementById("kt_modal_add_event");
                    f = C.querySelector("#kt_modal_add_event_form"), t = f.querySelector('[name="calendar_event_name"]'), n = f.querySelector('[name="calendar_event_description"]'), a = f.querySelector('[name="calendar_event_location"]'), o = f.querySelector("#kt_calendar_datepicker_start_date"), i = f.querySelector("#kt_calendar_datepicker_end_date"), d = f.querySelector("#kt_calendar_datepicker_start_time"), s = f.querySelector("#kt_calendar_datepicker_end_time"), y = document.querySelector('[data-kt-calendar="add"]'), D = f.querySelector("#kt_modal_add_event_submit"), k = f.querySelector("#kt_modal_add_event_cancel"), _ = C.querySelector("#kt_modal_add_event_close"), v = f.querySelector('[data-kt-calendar="title"]'), u = new bootstrap.Modal(C);
                    const H = document.getElementById("kt_modal_view_event");
                    var F, O, I, R, V, P;
                    w = new bootstrap.Modal(H), g = H.querySelector('[data-kt-calendar="event_name"]'), b = H.querySelector('[data-kt-calendar="all_day"]'), S = H.querySelector('[data-kt-calendar="event_description"]'), h = H.querySelector('[data-kt-calendar="event_location"]'), T = H.querySelector('[data-kt-calendar="event_start_date"]'), Y = H.querySelector('[data-kt-calendar="event_end_date"]'), L = H.querySelector("#kt_modal_view_event_edit"), E = H.querySelector("#kt_modal_view_event_delete"), F = document.getElementById("kt_calendar_app"), O = moment().startOf("day"), I = O.format("YYYY-MM"), R = O.clone().subtract(1, "day").format("YYYY-MM-DD"), V = O.format("YYYY-MM-DD"), P = O.clone().add(1, "day").format("YYYY-MM-DD"), (e = new FullCalendar.Calendar(F, {
                        headerToolbar: {
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay"
                        },
                        initialDate: V,
                        navLinks: !0,
                        selectable: !0,
                        selectMirror: !0,
                        select: function (e) {
                            N(e), x()
                        },
                        eventClick: function (e) {
                            N({
                                id: e.event.id,
                                title: e.event.title,
                                description: e.event.extendedProps.description,
                                location: e.event.extendedProps.location,
                                startStr: e.event.startStr,
                                endStr: e.event.endStr,
                                allDay: e.event.allDay
                            }), B()
                        },
                        editable: !0,
                        dayMaxEvents: !0,
                        events: events,
                        // [{
                        //     id: A(),
                        //     title: "All Day Event",
                        //     start: I + "-01",
                        //     end: I + "-02",
                        //     description: "Toto lorem ipsum dolor sit incid idunt ut",
                        //     className: "fc-event-danger fc-event-solid-warning",
                        //     location: "Federation Square"
                        // }, {
                        //     id: A(),
                        //     title: "Reporting",
                        //     start: I + "-14T13:30:00",
                        //     description: "Lorem ipsum dolor incid idunt ut labore",
                        //     end: I + "-14T14:30:00",
                        //     className: "fc-event-success",
                        //     location: "Meeting Room 7.03"
                        // }, {
                        //     id: A(),
                        //     title: "Company Trip",
                        //     start: I + "-02",
                        //     description: "Lorem ipsum dolor sit tempor incid",
                        //     end: I + "-03",
                        //     className: "fc-event-primary",
                        //     location: "Seoul, Korea"
                        // }, {
                        //     id: A(),
                        //     title: "ICT Expo 2021 - Product Release",
                        //     start: I + "-03",
                        //     description: "Lorem ipsum dolor sit tempor inci",
                        //     end: I + "-05",
                        //     className: "fc-event-light fc-event-solid-primary",
                        //     location: "Melbourne Exhibition Hall"
                        // }, {
                        //     id: A(),
                        //     title: "Dinner",
                        //     start: I + "-12",
                        //     description: "Lorem ipsum dolor sit amet, conse ctetur",
                        //     end: I + "-13",
                        //     location: "Squire's Loft"
                        // }, {
                        //     id: A(),
                        //     title: "Repeating Event",
                        //     start: I + "-09T16:00:00",
                        //     end: I + "-09T17:00:00",
                        //     description: "Lorem ipsum dolor sit ncididunt ut labore",
                        //     className: "fc-event-danger",
                        //     location: "General Area"
                        // }, {
                        //     id: A(),
                        //     title: "Repeating Event",
                        //     description: "Lorem ipsum dolor sit amet, labore",
                        //     start: I + "-16T16:00:00",
                        //     end: I + "-16T17:00:00",
                        //     location: "General Area"
                        // }, {
                        //     id: A(),
                        //     title: "Conference",
                        //     start: R,
                        //     end: P,
                        //     description: "Lorem ipsum dolor eius mod tempor labore",
                        //     className: "fc-event-primary",
                        //     location: "Conference Hall A"
                        // }, {
                        //     id: A(),
                        //     title: "Meeting",
                        //     start: V + "T10:30:00",
                        //     end: V + "T12:30:00",
                        //     description: "Lorem ipsum dolor eiu idunt ut labore",
                        //     location: "Meeting Room 11.06"
                        // }, {
                        //     id: A(),
                        //     title: "Lunch",
                        //     start: V + "T12:00:00",
                        //     end: V + "T14:00:00",
                        //     className: "fc-event-info",
                        //     description: "Lorem ipsum dolor sit amet, ut labore",
                        //     location: "Cafeteria"
                        // }, {
                        //     id: A(),
                        //     title: "Meeting",
                        //     start: V + "T14:30:00",
                        //     end: V + "T15:30:00",
                        //     className: "fc-event-warning",
                        //     description: "Lorem ipsum conse ctetur adipi scing",
                        //     location: "Meeting Room 11.10"
                        // }, {
                        //     id: A(),
                        //     title: "Happy Hour",
                        //     start: V + "T17:30:00",
                        //     end: V + "T21:30:00",
                        //     className: "fc-event-info",
                        //     description: "Lorem ipsum dolor sit amet, conse ctetur",
                        //     location: "The English Pub"
                        // }, {
                        //     id: A(),
                        //     title: "Dinner",
                        //     start: P + "T18:00:00",
                        //     end: P + "T21:00:00",
                        //     className: "fc-event-solid-danger fc-event-light",
                        //     description: "Lorem ipsum dolor sit ctetur adipi scing",
                        //     location: "New York Steakhouse"
                        // }, {
                        //     id: A(),
                        //     title: "Birthday Party",
                        //     start: P + "T12:00:00",
                        //     end: P + "T14:00:00",
                        //     className: "fc-event-primary",
                        //     description: "Lorem ipsum dolor sit amet, scing",
                        //     location: "The English Pub"
                        // }, {
                        //     id: A(),
                        //     title: "Site visit",
                        //     start: I + "-28",
                        //     end: I + "-29",
                        //     className: "fc-event-solid-info fc-event-light",
                        //     description: "Lorem ipsum dolor sit amet, labore",
                        //     location: "271, Spring Street"
                        // }],
                        datesSet: function () { }
                    })).render(), p = FormValidation.formValidation(f, {
                        fields: {
                            calendar_event_name: {
                                validators: {
                                    notEmpty: {
                                        message: "Event name is required"
                                    }
                                }
                            },
                            calendar_event_start_date: {
                                validators: {
                                    notEmpty: {
                                        message: "Start date is required"
                                    }
                                }
                            },
                            calendar_event_end_date: {
                                validators: {
                                    notEmpty: {
                                        message: "End date is required"
                                    }
                                }
                            }
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger,
                            bootstrap: new FormValidation.plugins.Bootstrap5({
                                rowSelector: ".fv-row",
                                eleInvalidClass: "",
                                eleValidClass: ""
                            })
                        }
                    }), r = flatpickr(o, {
                        enableTime: !1,
                        dateFormat: "Y-m-d"
                    }), l = flatpickr(i, {
                        enableTime: !1,
                        dateFormat: "Y-m-d"
                    }), c = flatpickr(d, {
                        enableTime: !0,
                        noCalendar: !0,
                        dateFormat: "H:i"
                    }), m = flatpickr(s, {
                        enableTime: !0,
                        noCalendar: !0,
                        dateFormat: "H:i"
                    }), q(), y.addEventListener("click", (e => {
                        M = {
                            id: "",
                            eventName: "",
                            eventDescription: "",
                            startDate: new Date,
                            endDate: new Date,
                            allDay: !1
                        }, x()
                    })), E.addEventListener("click", (t => {
                        t.preventDefault(), Swal.fire({
                            text: "Are you sure you would like to delete this event?",
                            icon: "warning",
                            showCancelButton: !0,
                            buttonsStyling: !1,
                            confirmButtonText: "Yes, delete it!",
                            cancelButtonText: "No, return",
                            customClass: {
                                confirmButton: "btn btn-primary",
                                cancelButton: "btn btn-active-light"
                            }
                        }).then((function (t) {
                            t.value ? (e.getEventById(M.id).remove(), w.hide()) : "cancel" === t.dismiss && Swal.fire({
                                text: "Your event was not deleted!.",
                                icon: "error",
                                buttonsStyling: !1,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            })
                        }))
                    })), k.addEventListener("click", (function (e) {
                        e.preventDefault(), Swal.fire({
                            text: "Are you sure you would like to cancel?",
                            icon: "warning",
                            showCancelButton: !0,
                            buttonsStyling: !1,
                            confirmButtonText: "Yes, cancel it!",
                            cancelButtonText: "No, return",
                            customClass: {
                                confirmButton: "btn btn-primary",
                                cancelButton: "btn btn-active-light"
                            }
                        }).then((function (e) {
                            e.value ? (f.reset(), u.hide()) : "cancel" === e.dismiss && Swal.fire({
                                text: "Your form has not been cancelled!.",
                                icon: "error",
                                buttonsStyling: !1,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            })
                        }))
                    })), _.addEventListener("click", (function (e) {
                        e.preventDefault(), Swal.fire({
                            text: "Are you sure you would like to cancel?",
                            icon: "warning",
                            showCancelButton: !0,
                            buttonsStyling: !1,
                            confirmButtonText: "Yes, cancel it!",
                            cancelButtonText: "No, return",
                            customClass: {
                                confirmButton: "btn btn-primary",
                                cancelButton: "btn btn-active-light"
                            }
                        }).then((function (e) {
                            e.value ? (f.reset(), u.hide()) : "cancel" === e.dismiss && Swal.fire({
                                text: "Your form has not been cancelled!.",
                                icon: "error",
                                buttonsStyling: !1,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            })
                        }))
                    })), (e => {
                        e.addEventListener("hidden.bs.modal", (e => {
                            p && p.resetForm(!0)
                        }))
                    })(C)
                }
            }
        }();
        KTUtil.onDOMContentLoaded((function () {
            KTAppCalendar.init()
        }));

    }
})