function spinGame() {
    const images = [
        'assets/bacc.png',
        'assets/bj.png',
        'assets/bluesam.png',
        'assets/cases.png',
        'assets/crash.png',
        'assets/diamonds.png',
        'assets/dice.png',
        'assets/flip.png',
        'assets/hilo.png',
        'assets/keno.png',
        'assets/limbo.png',
        'assets/mines.png',
        'assets/plinko.png',
        'assets/pump.png',
        'assets/roul.png',
        'assets/rps.png',
        'assets/scarab.png',
        'assets/slide.png',
        'assets/snakes.png',
        'assets/tome.png',
        'assets/tower.png',
        'assets/vpoker.png',
        'assets/wheel.png'
    ];

    const carousel = document.getElementById('carousel');
    const viewport = document.querySelector('.viewport');
    carousel.innerHTML = '';

    const imageWidth = 180;
    const totalSets = 5;
    let position = 0;
    const speed = 5;
    let animationId;

    for (let i = 0; i < totalSets; i++) {
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.style.width = `${imageWidth}px`;
            img.style.height = `auto`;
            carousel.appendChild(img);
        });
    }

    function animateScroll() {
        position -= speed;
        carousel.style.transform = `translateX(${position}px)`;
        animationId = requestAnimationFrame(animateScroll);
    }

    animateScroll();

    setTimeout(() => {
        cancelAnimationFrame(animationId);

        const selectedIndex = Math.floor(Math.random() * images.length);
        const totalImages = carousel.children.length;
        const offsetImageIndex = Math.floor(totalImages / 2 / images.length) * images.length + selectedIndex;

        const finalOffset = -(offsetImageIndex * imageWidth - (viewport.clientWidth / 2 - imageWidth / 2));

        carousel.style.transition = `transform 1.5s ease-out`;
        carousel.style.transform = `translateX(${finalOffset}px)`;
    }, 2000);
}
