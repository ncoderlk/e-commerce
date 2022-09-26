const incr_btn = document.querySelectorAll('button[id="incr"]')
incr_btn.forEach(btn => {
  btn.addEventListener('click', () => {
    let val = btn.name
    val = parseInt(val)
    switch (val) {
      case 1:
        incr("res1")
        break;
      case 2:
        incr("res2")
        break;
      case 3:
        incr("res3")
        break;
      case 4:
        incr("res4")
        break;
      case 5:
        incr("res5")
        break;
      case 6:
        incr("res6")
        break;
    }
    btn.classList.toggle('click')
    setTimeout(() => {
      btn.classList.toggle('click')
    }, 200)
  })
})
const decr_btn = document.querySelectorAll('button[id="decr"]')
decr_btn.forEach(btn => {

  btn.addEventListener('click', () => {
    let val = btn.name
    val = parseInt(val)
    switch (val) {
      case 1:
        decr("res1")
        break;
      case 2:
        decr("res2")
        break;
      case 3:
        decr("res3")
        break;
      case 4:
        decr("res4")
        break;
      case 5:
        decr("res5")
        break;
      case 6:
        decr("res6")
        break;
    }
    btn.classList.toggle('click')
    setTimeout(() => {
      btn.classList.toggle('click')
    }, 200)
  })
})
function incr(id) {
  let y = document.getElementById(id).textContent;
  let x = parseInt(y)
  x++
  if (x < 0) {
    x = 0
  }
  document.getElementById(id).textContent = x;

}
function decr(id) {
  let y = document.getElementById(id).textContent;
  let x = parseInt(y)
  x--
  if (x < 0) {
    x = 0
  }
  document.getElementById(id).textContent = x;

}
const cart_btn = document.querySelectorAll('img[alt="cart"]')
cart_btn.forEach(btn => {
  btn.addEventListener('click', () => {
    let val = btn.id
    val = parseInt(val)
    switch (val) {
      case 1:
        clr("res1")
        break;
      case 2:
        clr("res2")
        break;
      case 3:
        clr("res3")
        break;
      case 4:
        clr("res4")
        break;
      case 5:
        clr("res5")
        break;
      case 6:
        clr("res6")
        break;
    }
  })
})
function clr(id) {
  document.getElementById('cart_msg').classList.toggle('hide')
  document.getElementById(id).textContent = 0;
  setTimeout(() => {
    document.getElementById('cart_msg').classList.toggle('hide')
  }, 3500)
  if (document.getElementById('cart_msg').classList.contains('hide')) {
    console.log('hidden')
  }
  else {
    const crt_btn = document.getElementById('cart_msg');
    crt_btn.addEventListener('click', () => {
      document.getElementById('cart_msg').classList.toggle('hide')
    })
  }
}