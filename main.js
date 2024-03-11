document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let inputs = document.getElementsByTagName("input");
    let button = document.getElementById("button");
    let message = document.getElementById("mensagem");
    let validate = true;

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        inputs[i].style.borderColor = "red";
        validate = false;
      }
    }
    if (!validate) {
      message.innerHTML = "Favor preencher todos os campos";
    } else {
      alert("Cadastro realizado com sucesso");
      form.submit();
    }
  });
});
