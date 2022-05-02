const showMore = () => {
    const dots = $('.dots');
    const additionalText = $('.more')
    const txtBtn = $('.txtBtn')

  if (dots.css === dots.css('display','none')){
      dots.css('display', 'inline')
      txtBtn.text("Read More")
      additionalText.css('display', 'none')
  } else{
      dots.css('display', '.none')
      txtBtn.text('Read Less')
      additionalText.css('display', 'inline')
  }
}

const colorChange = () => {
    let $main = $('.main')
    let $sidebar =$('.sidebar')    
    let $sidebartop =$('.sidebar-top')    
    let $sidebarbottom =$('.sidebar-bottom')    
    let $colorBtn = $('.colorChange')
    let $maintop = $('.main-top')
    let $mainmiddle = $('.main-middle')
    let $mainbottom = $('.main-bottom')
    let $paragraphs = $('p')
    
    $main.css('background-color', 'rgba(156,47,50,1')
    $sidebar.css('background-color', 'rgba(25,66,51,.7)')
    $sidebartop.css('background-color', 'rgba(139.160,153,.7)')
    $sidebarbottom.css('background-color', 'rgba(139.160,153,.7)')
    $maintop.css('background-color',  'rgba(231,193,45,.6)')
    $mainmiddle.css('background-color',  'rgba(231,193,45,.6)')
    $mainbottom.css('background-color',  'rgba(231,193,45,.6)')
    $paragraphs.css('color', 'rgb(49,47,62)')
    $colorBtn.css('color','white').css('background-color', 'purple')
}

const rickRoll = () => {
$warning = $('#warning')
$warning.click(window.confirm("Are you sure you want to do this?"))
    if (confirm !== true){
        alert("You've made a wise decision.")
        return false
    }
}
    // if (confirm == false){
    //     alert("Good decision!")
    // }




   
// $ ( () => {
//     $(document).ready(){
//         $('.logo').animate({left: '300px'})
//     }
//     })
  