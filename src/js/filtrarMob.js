import setCoresMob from "./setCoresMob";
import setTamanhosMob from "./setTamanhosMob";
import setPrecosMob from "./setPrecosMob";

export default function filtrarMob(varFunc, helperFunction, lista) {
  const holder = document.querySelector(".container");
  const mobMenu = document.createElement("div");
  mobMenu.classList.add("menu-filtrar-mob");

  //FILTRAR
  const filtrarBtn = document.createElement("div");
  filtrarBtn.classList.add("filtrar");

  const titleFiltrar = document.createElement("span");
  titleFiltrar.innerHTML = "FILTRAR";

  const x = document.createElement("img");
  x.src = '../img/x-fechar.png';
  x.setAttribute("width", "18");
  x.setAttribute("height", "18");
  x.addEventListener("click", function () {
    mobMenu.remove();
  });
  filtrarBtn.appendChild(x);

  filtrarBtn.appendChild(titleFiltrar);
  filtrarBtn.appendChild(x);
  mobMenu.appendChild(filtrarBtn);

  //CORES
  const coresBtn = document.createElement("div");
  coresBtn.classList.add("cores");
  let currClass = "cores";
  coresBtn.addEventListener("click", function () {
    if (currClass === "cores") {
      this.classList.remove('cores');
      this.classList.add('cores-opened');
      currClass = "cores-opened";
    } else {
      currClass = "cores";
      this.classList.remove('cores-opened');
      this.classList.add('cores');
    }

  });

  const titleCores = document.createElement("span");
  titleCores.innerHTML = "CORES";

  const arrow = document.createElement("img");
  arrow.src = '../img/arrow.png';
  filtrarBtn.appendChild(arrow);

  coresBtn.appendChild(titleCores);
  coresBtn.appendChild(arrow);
  mobMenu.appendChild(coresBtn);

  const coresOpt = document.createElement("div");
  coresOpt.classList.add("opt-filters");
  coresBtn.appendChild(coresOpt);

  setCoresMob(varFunc, helperFunction, coresOpt);

  //TAMANHOS
  const tamBtn = document.createElement("div");
  tamBtn.classList.add("tamanhos");

  const titleTam = document.createElement("span");
  titleTam.innerHTML = "TAMANHOS";

  const arrow2 = document.createElement("img");
  arrow2.src = '../img/arrow.png';

  tamBtn.appendChild(titleTam);
  tamBtn.appendChild(arrow2);
  mobMenu.appendChild(tamBtn);

  const tamOpt = document.createElement("div");
  tamOpt.classList.add("opt-filters");
  tamBtn.appendChild(tamOpt);

  setTamanhosMob(lista, tamOpt);

  //PREÇOS
  const prBtn = document.createElement("div");
  prBtn.classList.add("precos");

  const titlePr = document.createElement("span");
  titlePr.innerHTML = "FAIXA DE PREÇO";

  const arrow3 = document.createElement("img");
  arrow3.src = '../img/arrow.png';

  prBtn.appendChild(titlePr);
  prBtn.appendChild(arrow3);
  mobMenu.appendChild(prBtn);

  const prOpt = document.createElement("div");
  prOpt.classList.add("opt-filters");
  prBtn.appendChild(prOpt);

  setPrecosMob(prOpt, helperFunction);

  holder.appendChild(mobMenu);

  //console.log(tamOpt);
}