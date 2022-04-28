$('nav').append(
    $(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'Click Me',
        class: 'btn-styled',
		click: function () { 
            $('.sidebar').css('background-color', )
         }
	})
);

$( () => {
    $(':button').on('click', () => {
        $('sidebar').css('background-color', 'red')
    })


    })
  