document.addEventListener("DOMContentLoaded", () => {
    const animatedMarks = document.querySelectorAll('.is-style-mark-animate mark');

    animatedMarks.forEach((mark) => {
      const rawText = mark.textContent;
      const parts = rawText.split('|').map(part => part.trim()).filter(Boolean);

      // Nettoyage
      mark.textContent = '';
      mark.style.display = 'inline-block';
      mark.style.position = 'absolute';
      mark.style.minWidth = '1ch'; // minimum pour éviter l'effondrement


      const spans = parts.map((part) => {
        const span = document.createElement('span');
        span.textContent = part;
        span.style.position = 'absolute';
        span.style.top = 0;
        span.style.left = 0;
        span.style.opacity = 0;
        span.style.transform = 'translateX(.25em) translateY(20px)';
        span.style.whiteSpace = 'nowrap';
        mark.appendChild(span);
        return span;
      });

      let current = 0;

      function showNextWord() {
        const prev = spans[current];
        current = (current + 1) % spans.length;
        const next = spans[current];

        gsap.to(prev, { opacity: 0, y: -20, duration: 0.5, ease: "power2.in" });

        gsap.fromTo(next,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      }

      gsap.set(spans[0], { opacity: 1, y: 0 });

      setInterval(showNextWord, 3000);
    });
  });