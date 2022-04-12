// Your code here
// first grab the element
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4'
dodger.style.left = '0px'

// create the event listener, which takes two arguements - the event and a callback function
document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') {
        const leftNumbers = dodger.style.left.replace('px', '');
        const left = parseInt(leftNumbers, 10);

        dodger.style.left = `${left - 1}px`;
    }
})

// function moveDodgerLeft() {
//     const leftNUmbers = dodger.style.left.replace('px', '');
//     const left = parseInt(leftNumbers, 10);

//     if (left > 0) {
//         dodger.style.left = `${left - 1}px`;
//     }
// };

// function moveDodgerRight() {
//     const rightNumbers = dodger.style.left.replace('px', '');
//     const left = parseInt(rightNumbers, 10);

//     if (left < 0) {
//         dodger.style.leftt = `${left + 1}px`;
//     }s
// }

// document.addEventListener('keydown', function(e) {
//     if(e.key === 'ArrowLeft') {
//         moveDodgerLeft();
//     } else (e.key === 'ArrowRight');
//         moveDodgerRight();
// })

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
          moveDodgerLeft();
        }
      });
  }

 
