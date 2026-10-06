let cat = document.getElementById("cat");
const options = {
    root: null, // use the viewport as the root
    rootMargin: "0px", // No margin around the root
    threshold: 0.5 // Trigger when 50% of the target is visble 
};
const allcatcard = document.getElementById('allcatcard');
const observer = new IntersectionObserver((entries, observer) => {
       console.log(entries);
       entries.forEach(entry => {
        if (entry.isIntersecting) {
            allcatcard.classList.add("animate")
        } else {
            allcatcard.classList.remove("animate")
        }
       });
}, options);
 observer.observe(cat)