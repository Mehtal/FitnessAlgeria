$(window).load(function () {
  // Animate loader off screen
  $('.se-pre-con').fadeOut('slow')
})

$(document).ready(function () {
  $('#counter').countdown({
    until: new Date(2019, 5 - 1, 20),
    format: 'dHMS'
  })

  $('#counter_wrapper').fitText(1.2, {
    minFontSize: '20px',
    maxFontSize: '50px'
  })
})
