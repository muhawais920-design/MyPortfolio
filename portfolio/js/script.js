// ===== Preloader =====
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => { preloader.classList.add('hidden'); }, 1900);
});

// ===== Custom Cursor =====
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; cursorDot.style.left = mx + 'px'; cursorDot.style.top = my + 'px'; });
  function animateCursor() { rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15; cursorRing.style.left = rx + 'px'; cursorRing.style.top = ry + 'px'; requestAnimationFrame(animateCursor); }
  animateCursor();
  document.querySelectorAll('a, button, .tilt, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
  });
}

// ===== Navbar scroll + active =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
  let current = '';
  sections.forEach(sec => { const top = sec.offsetTop - 120; if (window.scrollY >= top) current = sec.getAttribute('id'); });
  navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('href') === '#' + current) link.classList.add('active'); });
  // scroll top button
  const st = document.getElementById('scrollTop');
  if (window.scrollY > 400) st.classList.add('show'); else st.classList.remove('show');
});

// ===== Mobile menu =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => navMenu.classList.remove('open')));

// ===== Typing effect =====
const typingWords = ['Java Developer', 'Flutter Developer', 'Software Engineering Student', 'Future Software Engineer'];
const typingEl = document.getElementById('typingText');
let wi = 0, ci = 0, deleting = false;
function typeLoop() {
  const word = typingWords[wi];
  if (!deleting) {
    typingEl.textContent = word.slice(0, ci + 1); ci++;
    if (ci === word.length) { deleting = true; setTimeout(typeLoop, 1400); return; }
  } else {
    typingEl.textContent = word.slice(0, ci - 1); ci--;
    if (ci === 0) { deleting = false; wi = (wi + 1) % typingWords.length; }
  }
  setTimeout(typeLoop, deleting ? 60 : 100);
}
typeLoop();

// ===== Hero Canvas particles =====
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
function initParticles() {
  particles = [];
  const count = Math.min(80, Math.floor(canvas.width * canvas.height / 12000));
  for (let i = 0; i < count; i++) {
    particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, r: Math.random() * 1.8 + 0.6, hue: Math.random() > 0.5 ? 210 : 270 });
  }
}
initParticles();
window.addEventListener('resize', initParticles);
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // gradient background
  const g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  g.addColorStop(0, 'rgba(79,140,255,0.05)');
  g.addColorStop(1, 'rgba(168,85,247,0.05)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, 0.7)`; ctx.fill();
  });
  // connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
      const d = Math.hypot(dx, dy);
      if (d < 110) {
        ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(79,140,255,${0.12 * (1 - d / 110)})`; ctx.lineWidth = 0.6; ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ===== Skill bars =====
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.dataset.level + '%'; skillObserver.unobserve(e.target); } });
}, { threshold: 0.3 });
skillBars.forEach(b => skillObserver.observe(b));

// ===== Scroll to top =====
document.getElementById('scrollTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== Tilt effect =====
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -12;
    const ry = ((x / rect.width) - 0.5) * 12;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ===== Project modal =====
const projectData = {
  1: { title: 'Hotel Management System - Java', tech: ['Java', 'OOP', 'JDBC', 'File Handling'], desc: 'A console-based hotel management application built with Java. It demonstrates object-oriented programming, file handling for persistent data storage, and JDBC for database connectivity. Features include guest registration, room management, booking, and billing.' },
  2: { title: 'Hotel Management System - C++', tech: ['C++', 'Loops', 'Functions', 'Switch'], desc: 'A basic hotel management application written in C++. It uses loops, functions, and switch statements to handle menu-driven operations such as adding guests, viewing rooms, and managing bookings.' },
  3: { title: 'Hotel Management & Reservation System - C#', tech: ['C#', 'Windows Forms', '.NET'], desc: 'A desktop application built with C# Windows Forms for comprehensive hotel management. Supports guest registration, room booking, check-in/check-out, and billing with a graphical user interface.' }
};
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
document.querySelectorAll('.view-details').forEach(btn => {
  btn.addEventListener('click', () => {
    const p = projectData[btn.dataset.project];
    modalBody.innerHTML = `<h3>${p.title}</h3><div>${p.tech.map(t => `<span class="badge">${t}</span>`).join('')}</div><p style="margin-top:12px">${p.desc}</p><p style="margin-top:12px;color:var(--muted);font-size:0.85rem">Note: Source code is available on request. No fake repository links are provided.</p>`;
    modal.classList.add('open');
  });
});
document.getElementById('modalClose').addEventListener('click', () => modal.classList.remove('open'));
document.getElementById('modalOverlay').addEventListener('click', () => modal.classList.remove('open'));

// ===== Contact form validation =====
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  const setError = (id, msg) => { document.getElementById(id).textContent = msg; };
  setError('nameError', ''); setError('emailError', ''); setError('subjectError', ''); setError('messageError', '');
  if (!name.value.trim()) { setError('nameError', 'Name is required.'); valid = false; }
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { setError('emailError', 'Valid email required.'); valid = false; }
  if (!subject.value.trim()) { setError('subjectError', 'Subject is required.'); valid = false; }
  if (!message.value.trim() || message.value.trim().length < 10) { setError('messageError', 'Message must be at least 10 characters.'); valid = false; }
  const status = document.getElementById('formStatus');
  if (valid) {
    // No backend connected: open mailto fallback with composed message
    const mailto = `mailto:muhawais620@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent('From: ' + name.value + ' (' + email.value + ')\n\n' + message.value)}`;
    window.location.href = mailto;
    status.textContent = 'Your email client will open with the message. No backend is connected, so the message is not auto-sent.';
    form.reset();
  } else {
    status.textContent = '';
  }
});

// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== GSAP (if available) =====
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.section-title').forEach(t => {
    gsap.from(t, { scrollTrigger: { trigger: t, start: 'top 85%' }, y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
  });
}
