// elementos (use os ids que você já tem)
const demoBox = document.getElementById("box");
const gridContainer = document.getElementById("grid");
const logicTrueText = document.getElementById("text");
const light = document.querySelector(".light");
const span = document.getElementById("coluns");
const especial = document.getElementById("especial");

let currentColumn = 1;
const totalColumns = 5;

let isDragging = false;
let startX = 0;
let containerWidth = 0;
let columnWidth = 0;

demoBox.addEventListener("pointerdown", (e) => {
  isDragging = true;
  startX = e.clientX;

  const rect = gridContainer.getBoundingClientRect();
  containerWidth = rect.width;
  columnWidth = containerWidth / totalColumns;

  demoBox.classList.add("no-transition");
  demoBox.setPointerCapture(e.pointerId);
});

demoBox.addEventListener("pointermove", (e) => {
  // com pointer capture, o elemento continua recebendo pointermove
  if (!isDragging) return;

  const dx = e.clientX - startX;
  demoBox.style.transform = `translateX(${dx}px)`;

  // preview da coluna enquanto arrasta
  let previewCol = Math.round(currentColumn + dx / columnWidth);
  previewCol = Math.max(1, Math.min(previewCol, totalColumns));

  // atualiza o span de preview
  span.textContent = previewCol;
  demoBox.style.cursor = "grabbing"
});

function endDrag(e) {
  if (!isDragging) return;

  isDragging = false;
  // se houver pointerId, release (se for chamado a partir de pointerup no demoBox, já usa release)
  try {
    demoBox.releasePointerCapture(e.pointerId);
  } catch (err) {
    // ignore se não houver pointerId disponível
  }
  demoBox.classList.remove("no-transition");

  const dx = e.clientX - startX;
  const movedCols = Math.round(dx / columnWidth);
  let newColumn = currentColumn + movedCols;

  newColumn = Math.max(1, Math.min(newColumn, totalColumns));
  currentColumn = newColumn;

  // atualiza estado fixo (gridColumn, data-attr, texto, led) e mostra número final
  updateState(currentColumn);
  updateColumnNumber();

  demoBox.style.transform = "";
  demoBox.style.cursor = "grab"
}

// pointerup no próprio demoBox (com pointer capture também funciona)
// mas vamos adicionar também listeners no document para garantir captura de release
demoBox.addEventListener("pointerup", endDrag);
demoBox.addEventListener("pointercancel", endDrag);

// fallback: caso queira garantir que o mouse solto fora do elemento funcione
document.addEventListener("pointerup", (e) => {
  // se estava arrastando, finalize
  if (isDragging) endDrag(e);
});

function updateState(val) {
  demoBox.style.gridColumnStart = val;
  demoBox.setAttribute("data-columns", val);

  const conditionMet = val > 2;

  if (conditionMet) {
    logicTrueText.innerHTML =
      `<span style="color: #22c55e;">True</span> → CSS applies <strong style="color: royalblue;">royalblue</strong>`;
    light.style.background = "#22c55e";
    light.style.boxShadow = "0 0 10px #22c55e";
    especial.style.background = "rgba(34, 197, 94, 0.3)";
    especial.style.borderColor = " rgba(34, 197, 94, 0.5)";
  } else {
    logicTrueText.innerHTML =
      `<span style="color: #be123c;">False</span> → CSS applies <strong style="color: dimgray;">dimgray</strong>`;
    light.style.background = "#be123c";
    light.style.boxShadow = "0 0 10px #be123c";
    especial.style.background = "rgba(190, 18, 60, 0.3)";
    especial.style.borderColor = " rgba(190, 18, 60, 0.5)";
  }
}

function updateColumnNumber() {
  const styles = getComputedStyle(demoBox);
  const col = styles.gridColumnStart;

  const colNum = Number(col) || currentColumn;
  span.textContent = colNum;
}

// inicializa
updateState(currentColumn);
updateColumnNumber();