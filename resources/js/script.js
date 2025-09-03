document.addEventListener('DOMContentLoaded', () => {
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > window.innerHeight) {
            navbar.classList.add("visible");
        } else {
            navbar.classList.remove("visible");
        }
    });
    // document.querySelectorAll('.card-index').forEach(cell => {
    //     const top = Math.random() * 10;
    //     // left should "decenter" from middle, so should be between -10 and 10
    //     const left = (Math.random() * 20) - 10;
    //     cell.style.marginTop = top + '%';
    //     cell.style.transform = `translateX(${left}%)`;
    // });

    const ticker = document.querySelector('.credits');
    const text = ticker.innerHTML;

// duplicate text until it’s wide enough
    while (ticker.scrollWidth < window.innerWidth * 2) {
        ticker.innerHTML += text;
    }

// animate with CSS variable
    let offset = 0;
    function scroll() {
        offset -= 1;
        if (Math.abs(offset) >= ticker.scrollWidth / 2) {
            offset = 0;
        }
        ticker.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(scroll);
    }
    scroll();


});

