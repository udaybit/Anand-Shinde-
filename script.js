// small interactions: nav toggle, show more experience, set year
document.addEventListener('DOMContentLoaded', function() {
  // set copyright year
  var y = new Date().getFullYear();
  var yearNode = document.getElementById('year');
  if (yearNode) yearNode.textContent = y;

  // nav toggle (mobile)
  var navToggle = document.getElementById('navToggle');
  var navList = document.getElementById('navList');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function() {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      navList.style.display = expanded ? 'none' : 'flex';
    });
  }

  // show more experience
  var showMoreBtn = document.getElementById('showMoreBtn');
  var timelineMore = document.getElementById('timelineMore');
  var timelineShort = document.getElementById('timelineShort');
  if (showMoreBtn && timelineMore) {
    showMoreBtn.addEventListener('click', function() {
      if (timelineMore.style.display === 'none' || timelineMore.style.display === '') {
        timelineMore.style.display = 'flex';
        showMoreBtn.textContent = 'Show Less ↑';
        // optionally scroll to reveal
        timelineMore.scrollIntoView({behavior:'smooth', block:'start'});
      } else {
        timelineMore.style.display = 'none';
        showMoreBtn.textContent = 'Show More ↓';
      }
    });
  }

  // send button (dummy)
  var sendBtn = document.getElementById('sendBtn');
  if (sendBtn) {
    sendBtn.addEventListener('click', function() {
      alert('Form sending is not configured in this static demo. Connect your email/API to send messages.');
    });
  }
});
// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
