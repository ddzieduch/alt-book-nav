jQuery(function($) {
  console.log( 'ready!' )
  $('.collapsed a').on('click', function(event) {
    console.log($(this))
    if($(this).siblings('.au-link-list').length) {
      console.log($(this))
      event.preventDefault()
      console.log('Do have siblings')
    } else {
      console.log($(this))
      event.preventDefault()
      console.log('Do not have siblings')
      $(this).css({'border': '1px solid red', 'box-sizing': 'border-box'})
    }

    console.log($(this).siblings('.au-link-list').length)
    $(this).parent().toggleClass('expanded').toggleClass('collapsed')
  })
})
