// Scroll animation
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.12 },
);

document
    .querySelectorAll(
        ".gallery-hero, .gallery-hero__item, .animals-card, .testimonial-item",
    )
    .forEach((el) => observer.observe(el));
