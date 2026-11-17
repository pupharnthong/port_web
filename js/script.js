const text = document.querySelector("#home")
text.addEventListener("mouseover" , function() {
    text.classList.add("glow")
});
text.addEventListener("mouseleave" , function() {
     text.classList.remove("glow")
});

const bio = document.querySelector('#bio'); 
    const count = document.querySelector('#bio-count');
    bio.addEventListener('input', () => {
      const left = bio.maxLength - bio.value.length;
      count.textContent = left + ' characters left';
      count.classList.toggle('near', left <= 20);
    });
