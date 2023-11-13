
var popup = document.querySelector('.popup');
var generate = document.querySelector('.generate');
var close_btn = document.querySelector('.close-btn');
var input1 = document.getElementById('input-one');
var input2 = document.getElementById('input-two');
var input3 = document.getElementById('input-three');
var input4 = document.getElementById('input-four');
var table_content = document.querySelector('.table-content');
var progress_bar = document.querySelector('#progress-item');
var p_value = document.getElementById('p_value');
var msg = document.getElementById('msg');
var fixed = document.querySelector('.fixed-width');
var modal = document.querySelector('#modal')

close_btn.addEventListener('click', function () {
    popup.style.display = 'none';
    modal.style.display = 'none';
})

input1.addEventListener('keyup', function () {
    input2.value = input1.value * 5;
    input3.value = input1.value;
})


function copy() {
    var copyText = document.getElementById("generated_address");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}
function copy() {
  input3.select();
  input3.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(input3.value);
  alert("Copied the text: " + input3.value);
}

function copy2() {
    var copyText = document.getElementById("generated_address");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}
// payment.addEventListener('click', function () {
//     window.location.href = "ethereum:0x61360D6EBE52530762D74479B09F571001133834?amount=" + input1.value;
// })

modal.addEventListener('click', function () {
  modal.style.display = 'none';
  popup.style.display = 'none';
})