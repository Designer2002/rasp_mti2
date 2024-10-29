var modalS = document.getElementById("modalS");
var modalP = document.getElementById("modalP");
var modalC = document.getElementById("modalC");
var addS = document.getElementById("addS");
var addP = document.getElementById("addP");
var backS = document.getElementById("backS");
var backP = document.getElementById("backP");
var backC = document.getElementById("backC");

const loadModal = function(modal, add) {
  add.onclick = function () {
    modal.style.display = "block";
  };

  // Закрытие модального окна только при клике вне модального окна
  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

backS.onclick = function() {
  modalS.style.display = "none";
}
backP.onclick = function() {
  modalP.style.display = "none";
}
backC.onclick = function() {
  modalC.style.display = "none";
}

loadModal(modalS, addS);
loadModal(modalP, addP);
loadModal(modalC, addC);
