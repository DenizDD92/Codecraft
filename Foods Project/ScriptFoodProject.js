


// selected all icons
const allicons=document.querySelectorAll(".section-1-icons i")

let i = 1


// setting interval for the egg and making them to change infinitely


setInterval( ()  => { 
i++
// counter by 1 = ++
// 1-2-3-4-5-6-7-8-9-1-2-3-4-5-6-7-8-9 we are doing here
const icon=document.querySelector('.section-1-icons .change')

icon.classList.remove('change')
if ( i>allicons.length) 
// if that condition is true means that cycle was completed and we set counter to 1
{
    allicons[0].classList.add('change')
    i=1
    // and we set it back the the first one which is [0] and as i=1 it means that 1 is > allicons and it gonna turn another round (infinitely)
}

else{
icon.nextElementSibling.classList.add('change')}

},4000)

// icons have scale=0 so everytime we call a classlist.add it appears and the previous one disappears, also experimented with some transition so they comeout of each other by so
// so we jump 1 by 1 hide and show icons 