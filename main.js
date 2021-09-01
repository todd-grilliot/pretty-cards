console.log('console is a loggin');

$(document).ready(function () {
    console.log('we are in the jquery' + ' --- doc ready');

    $('.cards').on('click', (event) => {
        console.log(event.currentTarget);
    });
    $('.cards').on('mouseenter', (event) => {
        console.log(`enter`);
        console.log($(event.currentTarget).children());
        $(event.currentTarget).find('p').addClass('show');
        $(event.currentTarget).find('button').addClass('show');
        $(event.currentTarget).children().addClass('up');
        $(event.currentTarget).addClass('darken');
    })

    $('.cards').on('mouseleave', (event) => {
        console.log('leave');
        $(event.currentTarget).find('p').removeClass('show');
        $(event.currentTarget).find('button').removeClass('show');
        $(event.currentTarget).children().removeClass('up');
        $(event.currentTarget).removeClass('darken');
    })


});
