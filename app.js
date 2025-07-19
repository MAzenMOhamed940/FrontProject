        let count = 0;
        const counter = document.getElementById('counter1');
        function updateCounter() {
            counter.textContent = count;
            count++;
            if (count <= 60) {
                setTimeout(updateCounter, 50);
            }
        }
        updateCounter();
        let count2 = 0;
        const counter2 = document.getElementById('counter2');
        function updateCounter2() {
            counter2.textContent = count2;
            count2++;
            if (count2 <= 40) {
                setTimeout(updateCounter2, 80);
            }
        }
        updateCounter2();
        let count3 = 0;
        const counter3 = document.getElementById('counter3');
        function updateCounter3() {
            counter3.textContent = count3;
            count3++;
            if (count2 <= 37) {
                setTimeout(updateCounter3, 150);
            }
        }
        updateCounter3();
        let count4 = 0;
        const counter4 = document.getElementById('counter4');
        function updateCounter4() {
            counter4.textContent = count4;
            count4++;
            if (count4 <= 1) {
                setTimeout(updateCounter4, 2850);
            }
        }
        updateCounter4();

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hidden');
      }
    });
  });

  document.querySelectorAll('.hidden').forEach(el => observer.observe(el));