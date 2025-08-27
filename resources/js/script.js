document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card-index').forEach(cell => {
        const top = Math.random() * 10;
        // left should "decenter" from middle, so should be between -10 and 10
        const left = (Math.random() * 20) - 10;
        cell.style.marginTop = top + '%';
        cell.style.transform = `translateX(${left}%)`;
    });

    const submenu = document.getElementById('global-submenu');
    const cards = document.querySelectorAll('.card-index');

    cards.forEach(card => {
        const text = card.querySelector('.card-text');
        // const items = JSON.parse(card.dataset.submenu);
        const items_raw = card.dataset.submenu;
        const items = JSON.parse(items_raw.replace(/'/g, '"')); // convert ' → "


        text.addEventListener('click', (e) => {
            // Clear previous submenu items
            submenu.innerHTML = "";

            // Populate submenu with links
            items.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = item.text;
                a.href = item.href;
                li.appendChild(a);
                submenu.appendChild(li);
            });

            // Position submenu
            const rect = card.getBoundingClientRect();
            submenu.style.top = `${rect.top + window.scrollY}px`;
            submenu.style.left = `${rect.right + window.scrollX}px`;

            // Show submenu
            submenu.style.display =
                submenu.style.display === 'block' ? 'none' : 'block';
            const count = submenu.children.length;
            const angleStep = (2 * Math.PI) / count;

            Array.from(submenu.children).forEach((li, i) => {
                const radius = 20;
                const angle = i * angleStep - Math.PI/2; // start from top
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                li.style.transform = `translate(${x}px, ${y}px)`;
                li.style.opacity = 1;
            });

        });
    });

    // const navRight = document.querySelector(".nav-right");
    // const sections = document.querySelectorAll("section");
    //
    // sections.forEach(section => {
    //     const id = section.id;
    //     const title = section.querySelector("h1, h2, h3")?.innerText || id;
    //
    //     if (id) {
    //         const link = document.createElement("a");
    //         link.href = `#${id}`;
    //         link.textContent = title;
    //         navRight.appendChild(link);
    //     }
    // });

});

