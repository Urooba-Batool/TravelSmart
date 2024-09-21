(function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  let currentRating = 0;

function rate(value) {
  currentRating = value;
  const emojis = document.querySelectorAll('.emoji');
  emojis.forEach((emoji, index) => {
    if (index < value) {
      emoji.classList.add('selected');
    } else {
      emoji.classList.remove('selected');
    }
  });
  document.getElementById('output').innerText = `${value}/5`;
}


