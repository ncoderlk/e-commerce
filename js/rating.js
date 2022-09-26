
const btn = document.querySelectorAll('div[id="rate"]')
let x = 0;
document.getElementById('rate-mark').innerHTML = `
 0
<hr>
 25
`;
btn.forEach($ => {
  $.classList.remove('star')
  $.addEventListener('click', () => {
    $.classList.toggle('star')
    if ($.classList.contains('star')) {
      x += 5
    }
    else {
      x -= 5
    }
    document.getElementById('rate-mark').innerHTML = `
    ${x}
    <hr>
    25
    `;
    document.getElementById('cart_msg').innerText = "Thank you for rating"
    document.getElementById('cart_msg').classList.toggle('hide')
    setTimeout(() => {
      if (document.getElementById('cart_msg').classList.contains('hide')) { }
      else {
        document.getElementById('cart_msg').classList.toggle('hide')
      }
    }, 3000)
  })
})
