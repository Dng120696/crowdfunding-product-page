"use strict";
const addHide = () => {
  menuLinks.classList.add("hide");
  overlay.classList.add("hide");
  closeMenu.classList.add("hide");
  openMenu.classList.remove("hide");
};
const removeHide = () => {
  menuLinks.classList.remove("hide");
  overlay.classList.remove("hide");
  closeMenu.classList.remove("hide");
  openMenu.classList.add("hide");
};
const toggleModal = () => {
  overlay.classList.toggle("hide");
  modalBox.classList.toggle("hide");
};
const toggleSelect = () => {
  success.classList.toggle("hide");
  overlay.classList.toggle("hide");
};

// NAV SECTION
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuLinks = document.querySelector(".menu-links");
const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", () => {
  addHide();
  modalBox.classList.add("hide");
  success.classList.add("hide");
});

window.addEventListener("keydown", (e) => {
  if (
    (e.key === "Escape" && !menuLinks.classList.contains("hide")) ||
    !modalBox.classList.contains("hide") ||
    !success.classList.contains("hide")
  ) {
    addHide();
    modalBox.classList.add("hide");
    success.classList.add("hide");
  }
});
openMenu.addEventListener("click", removeHide);
closeMenu.addEventListener("click", addHide);

/////////////===========....////////////
//BUTTON BOOKMARK
const btnBookmark = document.querySelector(".btn-bookmark");
const btnBookmarkImg = document.querySelector(".btn-bookmark img");
const blackEdition = document.querySelector(".black-edition");
const bambooVal = document.querySelector(".bamboo-val");
let isImage1 = true;

btnBookmark.addEventListener("click", () => {
  btnBookmark.classList.toggle("btn-bookmark-clicked");

  if (isImage1) {
    btnBookmarkImg.src = "./images/icon-bookmark copy.svg";
  } else {
    btnBookmarkImg.src = "./images/icon-bookmark.svg";
  }
  isImage1 = !isImage1;
});

/////////////===========....////////////
//MAIN SECTION
const btnSelect = Array.from(document.querySelectorAll(".btn-select"));
const btnGotit = document.querySelector(".btn-got-it");
const Backers = document.querySelector(".total-backers");
const valBacked = document.querySelector(".val-total-backed");
const progressVal = document.querySelector(".progress-val");

let totalBackend = parseInt(valBacked.textContent.replace(/,/g, ""));
let totalValueBacker = parseInt(Backers.textContent.replace(/,/g, ""));
let bambooValue = parseInt(bambooVal.textContent);
let blackEditionVal = parseInt(blackEdition.textContent);
progressVal.style.width = `${(totalBackend / 100000) * 100}%`;

//BUTTON SELECT
btnSelect.forEach((select, i) => {
  select.addEventListener("click", () => {
    toggleSelect();
    if (i === 0) {
      totalValueBacker++;
      bambooValue--;
      totalBackend += 25;
    } else if (i === 1) {
      totalValueBacker++;
     blackEditionVal--;
      totalBackend += 75;
    }
        console.log(totalBackend,totalValueBacker);
  });

});
//BUTTON GOT IT
btnGotit.addEventListener("click", () => {
  toggleSelect();
  bambooVal.textContent = bambooValue;
  blackEdition.textContent = blackEditionVal;
  Backers.textContent = totalValueBacker;
  valBacked.textContent = totalBackend;
  progressVal.style.width = `${(totalBackend / 100000) * 100}%`;
});

/////////////===========....////////////
// SELECTION MODAL SECTION
// BACK PROJECT SECTION
const modalPledge = document.querySelectorAll(".modal-pledge");
const backProjectBtn = document.querySelector(".btn-back-project");
const modalBox = document.querySelector(".modal-project-box");
const modalCloseMenu = document.querySelector(".modal-close-menu");
const success = document.querySelector(".success-sec");

let pledgeValue = 0;
modalPledge.forEach((pledge,i) => {
  pledge.addEventListener("click", () => {
    const input = pledge.querySelector(".input-radio");
    const selectPledge = pledge.querySelector(".select-pledge");
    const btnContinue = pledge.querySelector('.btn-continue')
    const pledgeVal = pledge.querySelector('.pledge-val')


    btnContinue.addEventListener('click',()=>{
      modalBox.classList.add('hide')
      overlay.classList.add('hide')
      Backers.textContent = totalValueBacker;
      valBacked.textContent = totalBackend;
      pledgeVal.textContent = pledgeValue;
    })
    input.checked = true;
    if (input.checked === true && selectPledge.classList.contains("hide")) {
      selectPledge.classList.toggle("hide");
      pledge.classList.toggle("modal-pledge-border");
      pledgeValue = parseInt(pledgeVal.textContent) ;
      if(i === 0){
        pledgeValue--;
        totalValueBacker++;
        totalBackend += 25;  
      }else if( i === 1){
        pledgeValue--;
        totalValueBacker++;
        totalBackend += 75;
      }
  
      modalPledge.forEach((otherPledge) => {
        if (otherPledge !== pledge) {
          const otherSelect = otherPledge.querySelector(".select-pledge");
          if (!otherSelect.classList.contains("hide")) {
            otherPledge.classList.remove("modal-pledge-border");
            otherSelect.classList.add("hide");
          }
        }
      });
    } else {
      input.checked = false;
      selectPledge.classList.add("hide");
      pledge.classList.remove("modal-pledge-border");
    }
  });
});
backProjectBtn.addEventListener("click", toggleModal);
modalCloseMenu.addEventListener("click", toggleModal);

