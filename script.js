window.addEventListener('load', function() {
    initScrollProgress();
    initBackToTop();
    initMobileMenu();
    initContactForm();
});

function initScrollProgress() {
    var progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;
    
    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

function initBackToTop() {
    var backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var button = form.querySelector('button');
        var originalText = button.innerHTML;
        
        button.innerHTML = '<span>ENVOI EN COURS...</span>';
        button.disabled = true;
        
        var formData = new FormData(form);
        
        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
            if (response.ok) {
                button.innerHTML = "✓ MESSAGE ENVOYÉ !";
                button.style.background = "#10b981";
                form.reset();
                
                setTimeout(function() {
                    button.innerHTML = originalText;
                    button.style.background = "";
                    button.disabled = false;
                }, 3000);
            } else {
                throw new Error("Server error");
            }
        })
        .catch(function(error) {
            button.innerHTML = "ERREUR - RÉESSAYEZ";
            button.style.background = "#ff5f56";
            
            setTimeout(function() {
                button.innerHTML = originalText;
                button.style.background = "";
                button.disabled = false;
            }, 3000);
        });
    });
}

function initMobileMenu() {
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.querySelector('.nav-links');
    
    if (!navToggle || !navLinks) return;
    
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        var navToggle = document.getElementById('navToggle');
        var navLinks = document.querySelector('.nav-links');
        if (navToggle && navLinks) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});
