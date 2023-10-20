a
import acoesCards from "./imgs/acoesCards.js";
import { criarAcaoCard } from "./modules/criarAcoesCard.js";

const cardContainer = document.querySelector(".cardContainer");
cardContainer.innerHTML = acoesCards
  .map((acao) => criarAcaoCard(acao))
  .join('');