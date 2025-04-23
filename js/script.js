// Main JavaScript file for the AI Impact Blueprint™ website

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
    
    // Progress bar at top of page
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    });
    
    // Add active class to navigation items on scroll
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Mobile navigation toggle
    const createMobileNav = () => {
        const header = document.querySelector('header');
        
        // Create mobile nav toggle button
        const navToggle = document.createElement('button');
        navToggle.classList.add('nav-toggle');
        navToggle.innerHTML = '<span></span><span></span><span></span>';
        header.querySelector('.container').prepend(navToggle);
        
        // Add event listener to toggle
        navToggle.addEventListener('click', function() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    };
    
    // Only create mobile nav if screen width is below 768px
    if (window.innerWidth < 768) {
        createMobileNav();
    }
    
    // Add responsive styles for mobile navigation
    const addMobileNavStyles = () => {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .nav-toggle {
                display: none;
                background: none;
                border: none;
                cursor: pointer;
                padding: 10px;
                position: absolute;
                right: 20px;
                top: 20px;
                z-index: 1000;
            }
            
            .nav-toggle span {
                display: block;
                width: 25px;
                height: 3px;
                background-color: white;
                margin: 5px 0;
                transition: all 0.3s ease;
            }
            
            .nav-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .nav-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .nav-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -7px);
            }
            
            @media (max-width: 768px) {
                .nav-toggle {
                    display: block;
                }
                
                nav {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: 80%;
                    height: 100vh;
                    background-color: var(--primary-color);
                    padding: 80px 20px 20px;
                    transition: right 0.3s ease;
                    z-index: 999;
                }
                
                nav.active {
                    right: 0;
                }
                
                nav ul {
                    flex-direction: column;
                }
                
                nav ul li {
                    margin: 10px 0;
                }
            }
        `;
        document.head.appendChild(styleElement);
    };
    
    addMobileNavStyles();
    
    // Add active class to navigation links
    const addActiveClass = () => {
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.classList.add('nav-link');
            
            // Add active class to current page link
            if (link.getAttribute('href') === '#overview') {
                link.classList.add('active');
            }
        });
    };
    
    addActiveClass();
    
    // Add CSS for active navigation links
    const addActiveStyles = () => {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .nav-link.active {
                color: var(--light-color);
            }
            
            .nav-link.active::after {
                width: 100%;
            }
        `;
        document.head.appendChild(styleElement);
    };
    
    addActiveStyles();
    
    // Add back to top button
    const addBackToTopButton = () => {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.classList.add('back-to-top');
        backToTopBtn.innerHTML = '&uarr;';
        document.body.appendChild(backToTopBtn);
        
        // Add styles for back to top button
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .back-to-top {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 40px;
                height: 40px;
                background-color: var(--secondary-color);
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 20px;
                cursor: pointer;
                display: none;
                transition: all 0.3s ease;
                z-index: 99;
            }
            
            .back-to-top:hover {
                background-color: var(--primary-color);
            }
            
            .back-to-top.show {
                display: block;
                animation: fadeIn 0.3s ease-out;
            }
        `;
        document.head.appendChild(styleElement);
        
        // Show/hide back to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top when button is clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
    
    addBackToTopButton();
    
    // Module card hover effects
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
        });
    });
    
    // Add module integration visualization
    const addModuleIntegrationVisualization = () => {
        const moduleIntegration = document.querySelector('.module-integration');
        if (!moduleIntegration) return;
        
        const visualizationContainer = document.createElement('div');
        visualizationContainer.classList.add('integration-visualization');
        
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .integration-visualization {
                margin-top: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                gap: 1rem;
            }
            
            .module-node {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                font-weight: bold;
                text-align: center;
                font-size: 0.9rem;
                position: relative;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                transition: all 0.3s ease;
            }
            
            .module-node:hover {
                transform: scale(1.1);
            }
            
            .module-node.profit-engine {
                background-color: var(--profit-engine-color);
            }
            
            .module-node.reckoner {
                background-color: var(--reckoner-color);
            }
            
            .module-node.redline {
                background-color: var(--redline-color);
            }
            
            .module-node.clarity-index {
                background-color: var(--clarity-index-color);
            }
            
            .module-node.returnfire {
                background-color: var(--returnfire-color);
            }
            
            .module-node.center {
                background-color: var(--primary-color);
                width: 150px;
                height: 150px;
                z-index: 2;
                margin: 1rem;
            }
            
            @media (max-width: 768px) {
                .module-node {
                    width: 100px;
                    height: 100px;
                    font-size: 0.8rem;
                }
                
                .module-node.center {
                    width: 120px;
                    height: 120px;
                }
            }
        `;
        document.head.appendChild(styleElement);
        
        // Create center node
        const centerNode = document.createElement('div');
        centerNode.classList.add('module-node', 'center');
        centerNode.textContent = 'AI Impact Blueprint™';
        visualizationContainer.appendChild(centerNode);
        
        // Create module nodes
        const modules = [
            { name: 'The Profit Engine™', class: 'profit-engine' },
            { name: 'Reckoner™', class: 'reckoner' },
            { name: 'Redline™', class: 'redline' },
            { name: 'Clarity Index™', class: 'clarity-index' },
            { name: 'ReturnFire™', class: 'returnfire' }
        ];
        
        modules.forEach(module => {
            const moduleNode = document.createElement('div');
            moduleNode.classList.add('module-node', module.class);
            moduleNode.textContent = module.name;
            visualizationContainer.appendChild(moduleNode);
        });
        
        moduleIntegration.appendChild(visualizationContainer);
    };
    
    addModuleIntegrationVisualization();
});

