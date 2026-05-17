let select = document.querySelector(".selected-option");
let opcao = document.querySelectorAll(".select-option");
let pesquisa = document.querySelector("#search");
let checar = document.querySelector("#opcao")


opcao.forEach((opcao) => {
  opcao.addEventListener("click", () => {
    const texto = opcao.querySelector("span").textContent;
    const icone = opcao.querySelector("i").outerHTML;

    select.innerHTML = `${icone} ${texto}`;
    checar.checked = false;

    opcao.classList.add('chosen');
  });
});

