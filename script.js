document.addEventListener("DOMContentLoaded", function() {
    const scrollContent = document.querySelectorAll('.scroll-content');
    const questionMarks = document.querySelectorAll('.floating-question');

    // Function to animate question marks
    function animateQuestions() {
        questionMarks.forEach((question) => {
            // Random horizontal position from 0 to 100% of viewport width
            const randomX = Math.random() * 100; // 0 to 100vw
            const randomY = Math.random() * 100; // 0 to 100vh
            
            // Set random position for the question mark
            question.style.left = `${randomX}vw`;
            question.style.top = `${randomY}vh`;
            question.style.transition = 'left 5s ease-in-out, top 5s ease-in-out'; // smooth movement
        });
    }

    // Initial animation call
    animateQuestions();
    
    // Looping effect on scroll
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;

        // Looping effect
        if (scrollY >= maxScroll) {
            window.scrollTo(0, 0); // Reset scroll position
        }

        changeBackgroundColor(scrollY / maxScroll); // Call function to change color
        revealTextOnScroll();
    });

    // Function to change background and text color based on scroll
    function changeBackgroundColor(scrollPercent) {
        const r = Math.min(255, Math.floor(255 * scrollPercent));
        const g = Math.min(255, Math.floor(100 * scrollPercent));
        const b = Math.min(255, Math.floor(200 * scrollPercent));
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        const textColor = 255 - Math.floor(255 * scrollPercent);
        const textElements = document.querySelectorAll('.text, .long-text, .animated-header');
        textElements.forEach(el => {
            el.style.color = `rgb(${textColor}, ${textColor}, ${textColor})`;
        });
    }

    // Function to reveal text on scroll
    function revealTextOnScroll() {
        const longTextSpans = document.querySelectorAll('.long-text span');
        longTextSpans.forEach((span, index) => {
            const scrollY = window.scrollY + window.innerHeight;
            const revealPoint = (index + 1) * (window.innerHeight / longTextSpans.length);
            if (scrollY > revealPoint) {
                span.style.opacity = 1; // Reveal the line
            }
        });
    }

    // Animate questions every 3 seconds
    setInterval(animateQuestions, 3000);
});
