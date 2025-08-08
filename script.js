document.addEventListener("DOMContentLoaded", () => {
  const planCards = document.querySelectorAll('.plan-card');

  const planData = {
    "1 Month": { fees: 500, discount: 25, practiceSets: 0 },  
    "3 Month": { fees: 2000, discount: 200, practiceSets: 0 }, 
    "4 Month": { fees: 2000, discount: 300, practiceSets: 0 }, 
    "12 Month": { fees: 1700, discount: 300, practiceSets: 0 } 
  };

  const feesEl = document.querySelector(".summary .row:nth-child(1) span:last-child");
  const discountEl = document.querySelector(".summary .row:nth-child(2) span:last-child");
  const practiceEl = document.querySelector(".summary .row:nth-child(3) span:last-child");
  const totalEl = document.querySelector(".summary .total span:last-child");
  const savingsEl = document.querySelector(".savings");

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

      
      const planName = card.querySelector(".plan-duration").textContent.trim();
      if (planData[planName]) {
        const { fees, discount, practiceSets } = planData[planName];
        feesEl.textContent = `₹${fees}`;
        discountEl.textContent = `-₹${discount}`;
        practiceEl.textContent = `₹${practiceSets}`;
        totalEl.textContent = `₹${fees - discount}`;
        savingsEl.textContent = `✅ You'll save ₹${discount} on this!`;
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
