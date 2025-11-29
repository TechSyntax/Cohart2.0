let para = document.querySelector("p"); // or .para / #para
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let originalText = para.innerText;

para.addEventListener("mouseenter", () => {
    let iteration = 0;
    
    let interval = setInterval(() => {
        para.innerText = originalText
            .split("")
            .map((char, index) => {
                if (index < iteration) return originalText[index];
                return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");

        iteration += 0.99;

        if (iteration >= originalText.length) {
            clearInterval(interval);
        }
    }, 60);
});
