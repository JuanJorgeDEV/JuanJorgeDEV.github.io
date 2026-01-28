const toggleSwitch = document.getElementById('devModeToggle');
const contentWrapper = document.querySelector('.content-wrapper');

const heroBadge = document.getElementById('hero-badge');
const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');
const heroButtons = document.getElementById('hero-buttons');
const heroContacts = document.getElementById('hero-contacts');

const content = {
    user: {
        badge: '👋 Bem-vindo ao meu espaço',
        title: 'Juan Jorge',
        subtitle: 'Especialista na Stack Microsoft & Soluções em Nuvem',
        contactsClass: 'text-white-50',
        buttons: `<a href="#projetos" class="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg glow-on-hover">Explorar Projetos</a>`
    },
    dev: {
        badge: 'System.Status: <span class="text-success">Online</span>',
        title: '<span class="text-primary">var</span> Dev <span class="text-white">=</span> <span class="text-success">new</span> <span class="text-warning">JuanJorge</span>();',
        subtitle: '<span class="text-secondary opacity-75">// Stack Microsoft & Soluções em Nuvem carregadas...</span>',
        contactsClass: 'text-success font-monospace',
        buttons: `<button class="btn btn-outline-success btn-lg px-5 py-3 font-monospace fw-bold">Execute.Init()</button>`
    }
};

toggleSwitch.addEventListener('change', function() {
    const isDev = this.checked;
    contentWrapper.classList.add('fading');
    setTimeout(() => {
        if (isDev) {
            heroTitle.classList.add('font-monospace', 'fs-2');
            heroSubtitle.classList.add('font-monospace');
            heroBadge.classList.add('font-monospace');
            heroContacts.classList.add('font-monospace', 'text-success');
            
            heroBadge.innerHTML = content.dev.badge;
            heroTitle.innerHTML = content.dev.title;
            heroSubtitle.innerHTML = content.dev.subtitle;
            heroButtons.innerHTML = content.dev.buttons;
            
            heroBadge.className = 'badge bg-dark border border-success text-success rounded-0 px-3 py-2 font-monospace';
        } else {
            heroTitle.classList.remove('font-monospace', 'fs-2');
            heroSubtitle.classList.remove('font-monospace');
            heroBadge.classList.remove('font-monospace');
            heroContacts.classList.remove('font-monospace', 'text-success');
            heroBadge.innerHTML = content.user.badge;
            heroTitle.innerHTML = content.user.title;
            heroSubtitle.innerHTML = content.user.subtitle;
            heroButtons.innerHTML = content.user.buttons;
            heroBadge.className = 'badge bg-white bg-opacity-10 text-white border border-white border-opacity-25 rounded-pill px-4 py-2 fs-6 fw-light backdrop-blur';
        }
        contentWrapper.classList.remove('fading');
    }, 400);
});

const observerOptions = {
    threshold: 0.1
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
document.querySelectorAll('.scroll-reveal').forEach((el) => {
    observer.observe(el);
});