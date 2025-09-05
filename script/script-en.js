  AOS.init();
  document.addEventListener('contextmenu', function (event) { event.preventDefault(); });

  const phrases = [
    [{ text: "if", class: "keyword" },{ text: "(", class: "symbol" },{ text: "programmer", class: "var" },{ text: " === ", class: "symbol" },{ text: "true", class: "keyword" },{ text: ")", class: "symbol" },{ text: " return ", class: "keyword" },{ text: `"Hello World! I'm Grazieli!"`, class: "string" },{ text: ";", class: "symbol" }],
    [{ text: "if", class: "keyword" },{ text: "(", class: "symbol" },{ text: "designer", class: "var" },{ text: " === ", class: "symbol" },{ text: "true", class: "keyword" },{ text: ")", class: "symbol" },{ text: " return ", class: "keyword" },{ text: `"Creative by heart"`, class: "string" },{ text: ";", class: "symbol" }],
    [{ text: "if", class: "keyword" },{ text: "(", class: "symbol" },{ text: "gameDev", class: "var" },{ text: " === ", class: "symbol" },{ text: "true", class: "keyword" },{ text: ")", class: "symbol" },{ text: " return ", class: "keyword" },{ text: `"Let the games begin!"`, class: "string" },{ text: ";", class: "symbol" }]
  ];
  let i = 0, charIndex = 0, isDeleting = false;
  const typewriter = document.getElementById("typewriter");

  function loop() {
    const tokens = phrases[i];
    let output = "", remaining = charIndex, done = true;
    for (const token of tokens) {
      if (remaining >= token.text.length) { output += `<span class="${token.class}">${token.text}</span>`; remaining -= token.text.length; }
      else { if (remaining > 0) { output += `<span class="${token.class}">${token.text.slice(0, remaining)}</span>`; } done = false; break; }
    }
    typewriter.innerHTML = output;
    if (!isDeleting) { if (!done) { charIndex++; setTimeout(loop, 80); } else { isDeleting = true; setTimeout(loop, 1000); } }
    else { if (charIndex > 0) { charIndex--; setTimeout(loop, 40); } else { isDeleting = false; i = (i + 1) % phrases.length; setTimeout(loop, 300); } }
  }
  loop();

  function scrollGallery(distance) { document.getElementById('gallery').scrollBy({ left: distance, behavior: 'smooth' }); }
  function expandImage(img) { const overlay = document.getElementById('overlay'); document.getElementById('fullscreenImage').src = img.src; overlay.classList.remove('hidden'); overlay.classList.add('flex'); }
  function closeImage() { const overlay = document.getElementById('overlay'); overlay.classList.add('hidden'); overlay.classList.remove('flex'); }
