function updateClock() {
    var now = new Date();

    // FOOTER YEAR
    var optionsMonthYear = { timeZone: 'Asia/Manila', month: 'short', year: 'numeric' };
    var monthyear = now.toLocaleDateString('en-US', optionsMonthYear);

    // Get all elements with the class name 'year'
    var yearElements = document.querySelectorAll('.year');

    // Update the text content of each element
    yearElements.forEach(function(element) {
        element.textContent = monthyear;
    });
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();

    const Hamburger = document.querySelector('.menu-links');
    const navMenu = document.querySelector('.menu-list');
    
    Hamburger.addEventListener('click', () => {
        Hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.list-wrapper').forEach(n => n.addEventListener('click', () => {
        Hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));


  // Add a click event listener to the links you want to scroll smoothly
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        lenis.scrollTo(targetElement.offsetTop);
      }
    });
  });
  
  requestAnimationFrame(raf);

