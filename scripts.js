/*
NOTE: jQuery is a required dependency
 */

// GLOBAL: Date Constants
const dateToday = new Date();
const dateTodayYear = dateToday.toLocaleDateString('en-us', {year:'numeric'})
const dateTodayDay = dateToday.toLocaleDateString('en-us', {weekday:'long'});
const dateTodayIso = dateToday.toISOString();

// FOOTER: Inject Year Into Copyright
const $footerCopyrightTime = $('#copyright time');
$footerCopyrightTime.text(dateTodayYear);
$footerCopyrightTime.attr('datetime', dateTodayIso);

// HOME: Inject Today's Date
$('#home time').each((i,e) => {
    const $this = $(e);
    $this.attr('datetime', dateTodayIso);
    $this.find('span').text(dateTodayDay);
});