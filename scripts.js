/*
NOTE: jQuery is a required dependency
 */

// GLOBAL: Date Constants
const dateToday = new Date();
const dateTodayYear = dateToday.toLocaleDateString('en-us', {year:'numeric'})
const dateTodayDay = dateToday.toLocaleDateString('en-us', {weekday:'long'});
const dateTodayIso = dateToday.toISOString();

// FOOTER: Inject Year Into Copyright
const $copyrightYear = $('#copyright time');
$copyrightYear.text(dateTodayYear);
$copyrightYear.attr('datetime', dateTodayIso);

// MENU: Find Component on Click
$('.menu a').click(e => {
    e.preventDefault();
    const menuClickTarget = $(e.currentTarget).attr('href');
    const menuClickTargetName = menuClickTarget.substring(1, menuClickTarget.length);
    $('#loading').show();
    $('#loading h3 span').text(menuClickTargetName);
    setTimeout(() => {
        $('#loading').fadeOut();
    }, 2000);
})

// LOGIN: Close Modal on Button Click

// HOME: Inject Today's Date
$('#dashboard time').each((i,e) => {
    const $this = $(e);
    $this.attr('datetime', dateTodayIso);
    $this.find('span').text(dateTodayDay);
});

// USERS: Count amount of users
const usersCount = $('#users-list .user').length;
$('#users-count').text(usersCount);