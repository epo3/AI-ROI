// Main JavaScript file for the AI Impact Blueprint website

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Additional JavaScript content omitted for brevity
    
    // Create module nodes
    const modules = [
        { name: 'The Profit Engine', class: 'profit-engine' },
        { name: 'Reckoner', class: 'reckoner' },
        { name: 'Redline', class: 'redline' },
        { name: 'Clarity Index', class: 'clarity-index' },
        { name: 'ReturnFire', class: 'returnfire' }
    ];
});
