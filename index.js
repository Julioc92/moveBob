const bob = document.querySelector('.face')

//  calling a global variable so we can have bob
// move to the right everytime we click him
let count = 0

function moveBob() {
    // += operator to count 50px every time we click bob
    count += 50
     console.log(count)
     // by writing style we are taking the styling of bob
     // we will be adding count to the property of right
    bob.style.left = count + 'px'  // moving bob to the right
}

bob.addEventListener('click', moveBob)