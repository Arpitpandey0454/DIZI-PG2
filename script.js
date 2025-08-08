document.addEventListener("DOMContentLoaded", () => {
    const planCards = document.querySelectorAll('.plan-card');
  
    planCards.forEach(card => {
      card.addEventListener('click', () => {
        planCards.forEach(c => {
          c.classList.remove('selected');
          const radio = c.querySelector('.radio');
          if (radio) radio.classList.remove('selected-radio');
  
          const tag = c.querySelector('.save-tag');
          if (tag) {
            tag.classList.remove('green');
            tag.classList.add('pink');
          }
        });
  
        card.classList.add('selected');
        const clickedRadio = card.querySelector('.radio');
        if (clickedRadio) clickedRadio.classList.add('selected-radio');
  
        const clickedTag = card.querySelector('.save-tag');
        if (clickedTag) {
          clickedTag.classList.remove('pink');
          clickedTag.classList.add('green');
        }
      });
    });
  
    const subscribeBtn = document.querySelector('.subscribe-btn');
    if (subscribeBtn) {
      subscribeBtn.addEventListener('click', () => {
        const selectedPlan = document.querySelector('.plan-card.selected .plan-duration');
        if (selectedPlan) {
          alert(`You have selected the ${selectedPlan.textContent} plan!`);
        } else {
          alert("Please select a plan before subscribing.");
        }
      });
    }
  });
  