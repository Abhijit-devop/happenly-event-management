'use strict';

const EVENTS = [
  {
    id: 'city-lights-2026', title: 'City Lights Festival', category: 'Music',
    date: '2026-11-17T18:30:00+05:30', dateLabel: '17 NOV 2026', timeLabel: '6:30 PM onwards',
    venue: 'Ekamra Haat', city: 'Bhubaneswar', price: '₹499 onwards', priceValue: 499,
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85',
    short: 'An open-air evening of indie sounds, lights and local artists.',
    description: 'A city evening, a little music and a whole lot of good energy. City Lights brings together independent musicians, live art and food pop-ups for an open-air celebration. Come with your friends or arrive solo — there is room for everyone.',
    featured: true, duration: '5 hours', capacity: 'Limited passes'
  },
  {
    id: 'future-forward-2026', title: 'Future Forward: Tech Summit', category: 'Technology',
    date: '2026-11-22T09:30:00+05:30', dateLabel: '22 NOV 2026', timeLabel: '9:30 AM – 5:00 PM',
    venue: 'KIIT Convention Centre', city: 'Bhubaneswar', price: '₹299 onwards', priceValue: 299,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85',
    short: 'A day of AI, design, founders and ideas shaping tomorrow.',
    description: 'Spend a full day with builders, researchers and curious minds. Expect practical sessions on AI, product design and emerging technology, an early-stage founder showcase, networking breaks and plenty of fresh perspectives.',
    featured: true, duration: '7.5 hours', capacity: '300 attendees'
  },
  {
    id: 'the-art-of-slow-2026', title: 'The Art of Slow: Creative Day', category: 'Arts',
    date: '2026-11-28T11:00:00+05:30', dateLabel: '28 NOV 2026', timeLabel: '11:00 AM – 4:00 PM',
    venue: 'Gallery 23', city: 'Kolkata', price: '₹650 onwards', priceValue: 650,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=85',
    short: 'Paint, print, make and spend a day creating without a rush.',
    description: 'Put your phone away for a while and make something with your hands. Explore guided painting, printmaking and collage stations, meet local artists and take home a small piece of your day. All basic materials are included.',
    featured: false, duration: '5 hours', capacity: '40 creative spots'
  },
  {
    id: 'the-good-food-table-2026', title: 'The Good Food Table', category: 'Food',
    date: '2026-12-05T16:00:00+05:30', dateLabel: '05 DEC 2026', timeLabel: '4:00 PM – 9:00 PM',
    venue: 'The Warehouse', city: 'Bengaluru', price: '₹799 onwards', priceValue: 799,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85',
    short: 'A laid-back food pop-up celebrating local kitchens and big flavours.',
    description: 'Discover the people behind the plates at this relaxed tasting event. Local home chefs, independent food brands and small-batch makers bring their signature dishes for an evening of stories, flavours and community.',
    featured: false, duration: '5 hours', capacity: '150 tasting passes'
  },
  {
    id: 'reset-retreat-2026', title: 'Reset: Mind & Body Retreat', category: 'Wellness',
    date: '2026-12-12T07:00:00+05:30', dateLabel: '12 DEC 2026', timeLabel: '7:00 AM – 12:00 PM',
    venue: 'Mayfair Lagoon', city: 'Bhubaneswar', price: '₹999 onwards', priceValue: 999,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85',
    short: 'A refreshing morning of movement, mindfulness and mindful food.',
    description: 'Give yourself a morning to reset. Start with a gentle mobility and yoga session, move into a guided breathwork experience, and finish with a nourishing breakfast and a conversation on building sustainable everyday habits.',
    featured: false, duration: '5 hours', capacity: '50 participants'
  },
  {
    id: 'makers-meet-2027', title: 'Makers Meet: Build & Connect', category: 'Technology',
    date: '2027-01-09T10:00:00+05:30', dateLabel: '09 JAN 2027', timeLabel: '10:00 AM – 6:00 PM',
    venue: 'NESCO Centre', city: 'Mumbai', price: '₹399 onwards', priceValue: 399,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85',
    short: 'A hands-on community day for makers, coders and curious minds.',
    description: 'Bring an idea, a laptop or just your curiosity. Makers Meet is a community-led day of mini-workshops, demos and collaborative challenges across software, hardware and creative technology. Learn something, build something and meet your next collaborator.',
    featured: true, duration: '8 hours', capacity: '200 builder passes'
  },
  {
    id: 'sunday-soul-sessions-2027', title: 'Sunday Soul Sessions', category: 'Music',
    date: '2027-01-24T17:00:00+05:30', dateLabel: '24 JAN 2027', timeLabel: '5:00 PM – 9:00 PM',
    venue: 'The Terrace', city: 'Pune', price: '₹350 onwards', priceValue: 350,
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85',
    short: 'Acoustic sets, sunset views and an easy Sunday evening.',
    description: 'Ease into the new week with a beautiful sunset, intimate acoustic performances and a relaxed terrace setting. Discover emerging singer-songwriters, enjoy a drink or two and let Sunday take its time.',
    featured: false, duration: '4 hours', capacity: '100 seats'
  },
  {
    id: 'street-stories-walk-2027', title: 'Street Stories: Photo Walk', category: 'Arts',
    date: '2027-02-07T07:30:00+05:30', dateLabel: '07 FEB 2027', timeLabel: '7:30 AM – 10:30 AM',
    venue: 'College Street Coffee House', city: 'Kolkata', price: '₹199 onwards', priceValue: 199,
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1000&q=85',
    short: 'Find the little stories hiding in familiar city streets.',
    description: 'See your city with fresh eyes on a guided photo walk through historic lanes and lively street corners. Phone cameras are welcome. A local photographer will share simple tips on framing, light and storytelling along the way.',
    featured: false, duration: '3 hours', capacity: '25 walkers'
  }
];

const STORAGE_KEY = 'happenly.registrations.v1';
const THEME_KEY = 'happenly.theme';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const formatDate = (dateString, options = { day: 'numeric', month: 'long', year: 'numeric' }) => new Intl.DateTimeFormat('en-IN', options).format(new Date(dateString));
const icon = (name) => {
  const paths = {
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || ''}</svg>`;
};

let activeCategory = 'All';
let toastTimer;

function getRegistrations() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch (error) {
    console.warn('Could not read saved registrations:', error);
    return [];
  }
}

function saveRegistrations(registrations) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
    updateTicketCount();
    return true;
  } catch (error) {
    console.error('Could not save registrations:', error);
    showToast('Your browser could not save this registration. Check available storage.');
    return false;
  }
}

function updateTicketCount() {
  $('#ticketCount').textContent = String(getRegistrations().length);
}

function renderEvents() {
  const query = $('#eventSearch').value.trim().toLowerCase();
  const filtered = EVENTS.filter((event) => {
    const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
    const searchable = `${event.title} ${event.category} ${event.venue} ${event.city} ${event.short}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });

  $('#eventCount').textContent = String(filtered.length).padStart(2, '0');
  $('#eventsGrid').innerHTML = filtered.map((event) => `
    <article class="event-card">
      <div class="event-image-wrap">
        <img class="event-image" src="${event.image}" alt="${escapeHtml(event.title)} event" loading="lazy" />
        <span class="event-category">${escapeHtml(event.category)}</span>
        ${event.featured ? '<span class="event-featured">Happenly pick</span>' : ''}
      </div>
      <div class="event-card-body">
        <div class="event-date-line">${icon('calendar')} ${escapeHtml(event.dateLabel)}</div>
        <h3>${escapeHtml(event.title)}</h3>
        <p class="event-card-description">${escapeHtml(event.short)}</p>
        <div class="event-card-meta"><span class="event-venue">${icon('pin')} ${escapeHtml(event.venue)}, ${escapeHtml(event.city)}</span><span class="event-price">${escapeHtml(event.price)}</span></div>
        <div class="event-card-footer"><small>${escapeHtml(event.timeLabel)}</small><button class="event-details-button" type="button" data-event-id="${event.id}" aria-label="View details for ${escapeHtml(event.title)}">View details <span>↗</span></button></div>
      </div>
    </article>`).join('');
  $('#eventsGrid').hidden = filtered.length === 0;
  $('#emptyState').hidden = filtered.length !== 0;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function openDialog(dialog) {
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else dialog.setAttribute('open', '');
}
function closeDialog(dialog) {
  if (typeof dialog.close === 'function') dialog.close();
  else dialog.removeAttribute('open');
}

function openEventDetails(eventId) {
  const event = EVENTS.find((item) => item.id === eventId);
  if (!event) return;
  $('#eventModalContent').innerHTML = `
    <img class="event-detail-image" src="${event.image}" alt="${escapeHtml(event.title)}" />
    <div class="event-detail-content">
      <div class="event-detail-head"><span class="event-detail-category">${escapeHtml(event.category)}</span><span class="event-detail-price">${escapeHtml(event.price)}</span></div>
      <h2 id="eventModalTitle">${escapeHtml(event.title)}</h2>
      <p class="event-detail-description">${escapeHtml(event.description)}</p>
      <div class="event-detail-facts">
        <div class="event-fact"><span class="event-fact-icon">▦</span><div><strong>${formatDate(event.date)}</strong><small>${escapeHtml(event.timeLabel)}</small></div></div>
        <div class="event-fact"><span class="event-fact-icon">⌖</span><div><strong>${escapeHtml(event.venue)}</strong><small>${escapeHtml(event.city)}</small></div></div>
        <div class="event-fact"><span class="event-fact-icon">◷</span><div><strong>${escapeHtml(event.duration)}</strong><small>${escapeHtml(event.capacity)}</small></div></div>
      </div>
      <div class="event-detail-footer"><p>Pick your pass and make a day of it.</p><button class="button button-primary" type="button" id="detailRegisterButton">Register for this event <span>↗</span></button></div>
    </div>`;
  $('#detailRegisterButton').addEventListener('click', () => {
    closeDialog($('#eventModal'));
    openRegistration(event.id);
  });
  openDialog($('#eventModal'));
}

function openRegistration(eventId = '') {
  const select = $('#selectedEvent');
  select.innerHTML = '<option value="">Select an event</option>' + EVENTS.map((event) => `<option value="${event.id}">${escapeHtml(event.title)} — ${escapeHtml(event.dateLabel)}</option>`).join('');
  select.value = eventId;
  $('#registrationForm').hidden = false;
  $('#successPanel').hidden = true;
  $('#registrationForm').reset();
  select.value = eventId;
  clearValidation();
  openDialog($('#registrationModal'));
  window.setTimeout(() => $('#fullName').focus(), 60);
}

function clearValidation() {
  ['fullName', 'email', 'phone', 'selectedEvent'].forEach((id) => {
    $(`#${id}`).removeAttribute('aria-invalid');
  });
  ['nameError', 'emailError', 'phoneError', 'eventError', 'consentError'].forEach((id) => {
    $(`#${id}`).textContent = '';
  });
  $('#consent').setAttribute('aria-invalid', 'false');
}

function validateForm() {
  clearValidation();
  const name = $('#fullName').value.trim().replace(/\s+/g, ' ');
  const email = $('#email').value.trim();
  const phone = $('#phone').value.replace(/\D/g, '');
  const eventId = $('#selectedEvent').value;
  const consent = $('#consent').checked;
  let valid = true;

  if (name.length < 2 || !/^[\p{L}][\p{L}\s.'-]*$/u.test(name)) {
    $('#fullName').setAttribute('aria-invalid', 'true');
    $('#nameError').textContent = 'Enter a valid name (at least 2 letters).'; valid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 120) {
    $('#email').setAttribute('aria-invalid', 'true');
    $('#emailError').textContent = 'Enter a valid email address.'; valid = false;
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
    $('#phone').setAttribute('aria-invalid', 'true');
    $('#phoneError').textContent = 'Enter a valid 10-digit Indian mobile number.'; valid = false;
  }
  if (!EVENTS.some((event) => event.id === eventId)) {
    $('#selectedEvent').setAttribute('aria-invalid', 'true');
    $('#eventError').textContent = 'Please select an event.'; valid = false;
  }
  if (!consent) {
    $('#consent').setAttribute('aria-invalid', 'true');
    $('#consentError').textContent = 'Please agree before continuing.'; valid = false;
  }
  return valid ? { name, email, phone, eventId } : null;
}

function handleRegistrationSubmit(event) {
  event.preventDefault();
  const data = validateForm();
  if (!data) {
    const firstInvalid = $('[aria-invalid="true"]', $('#registrationForm'));
    if (firstInvalid) firstInvalid.focus();
    return;
  }
  const selectedEvent = EVENTS.find((item) => item.id === data.eventId);
  const registration = {
    id: `HAP-${Date.now().toString(36).toUpperCase()}`,
    name: data.name,
    email: data.email,
    phone: data.phone,
    eventId: data.eventId,
    eventTitle: selectedEvent.title,
    eventDate: selectedEvent.date,
    eventVenue: `${selectedEvent.venue}, ${selectedEvent.city}`,
    registeredAt: new Date().toISOString()
  };
  const registrations = getRegistrations();
  registrations.push(registration);
  if (!saveRegistrations(registrations)) return;

  $('#registrationForm').hidden = true;
  $('#successPanel').hidden = false;
  $('#successMessage').textContent = `You're registered for ${selectedEvent.title}. A little something to look forward to!`;
  $('#successTicket').innerHTML = `<strong>${escapeHtml(selectedEvent.title)}</strong><small>${formatDate(selectedEvent.date)} · ${escapeHtml(selectedEvent.timeLabel)}</small><small>${escapeHtml(selectedEvent.venue)}, ${escapeHtml(selectedEvent.city)}</small><small>Reference: ${registration.id}</small>`;
  showToast('Registration saved. See you there!');
}

function openTickets() {
  renderTickets();
  openDialog($('#ticketsModal'));
}

function renderTickets() {
  const registrations = getRegistrations().sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
  const list = $('#ticketsList');
  if (!registrations.length) {
    list.innerHTML = '<div class="tickets-empty">No registrations yet. Your next good plan is waiting.</div>';
  } else {
    list.innerHTML = registrations.map((ticket) => `
      <div class="ticket-item"><div><strong>${escapeHtml(ticket.eventTitle)}</strong><small>${formatDate(ticket.eventDate)} · ${escapeHtml(ticket.eventVenue)}</small><small>Registered as ${escapeHtml(ticket.name)}</small></div><span class="ticket-code">${escapeHtml(ticket.id)}</span></div>`).join('');
  }
  $('#exportTickets').disabled = registrations.length === 0;
  $('#clearTickets').hidden = registrations.length === 0;
}

function exportTickets() {
  const registrations = getRegistrations();
  if (!registrations.length) return;
  const headers = ['Reference', 'Name', 'Email', 'Phone', 'Event', 'Event date', 'Venue', 'Registered at'];
  const rows = registrations.map((item) => [item.id, item.name, item.email, item.phone, item.eventTitle, item.eventDate, item.eventVenue, item.registeredAt]);
  const csv = [headers, ...rows].map((row) => row.map((cell) => `"${String(cell ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
  const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url; anchor.download = 'happenly-registrations.csv'; anchor.click();
  URL.revokeObjectURL(url);
  showToast('Your registrations have been exported.');
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 3200);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem(THEME_KEY, theme); } catch (error) { console.warn('Theme preference could not be saved.', error); }
  $('#themeToggle').setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  const metaTheme = $('meta[name="theme-color"]');
  if (metaTheme) metaTheme.content = theme === 'dark' ? '#171e1d' : '#f7f5f0';
}

function initTheme() {
  let saved = 'light';
  try { saved = localStorage.getItem(THEME_KEY) || 'light'; } catch (error) { /* use light theme */ }
  applyTheme(saved === 'dark' ? 'dark' : 'light');
}

function initCountdown() {
  const nextEvent = EVENTS.filter((event) => new Date(event.date).getTime() > Date.now()).sort((a, b) => new Date(a.date) - new Date(b.date))[0];
  if (!nextEvent) {
    $('#countdownEventName').textContent = 'More good things are coming';
    $('#countdownDate').textContent = 'New dates to be announced';
    ['days', 'hours', 'minutes', 'seconds'].forEach((id) => { $(`#${id}`).textContent = '00'; });
    return;
  }
  $('#countdownEventName').textContent = nextEvent.title;
  $('#countdownDate').textContent = `${formatDate(nextEvent.date)} · ${nextEvent.timeLabel}`;
  $('#countdownEventLink').addEventListener('click', () => openEventDetails(nextEvent.id));
  const target = new Date(nextEvent.date).getTime();
  const progressStart = target - 30 * 24 * 60 * 60 * 1000;
  const progressDuration = 30 * 24 * 60 * 60 * 1000;
  function tick() {
    const diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    $('#days').textContent = String(days).padStart(2, '0');
    $('#hours').textContent = String(hours).padStart(2, '0');
    $('#minutes').textContent = String(minutes).padStart(2, '0');
    $('#seconds').textContent = String(seconds).padStart(2, '0');
    const progress = Math.min(100, Math.max(5, ((Date.now() - progressStart) / progressDuration) * 100));
    $('#countdownProgress').style.width = `${progress}%`;
  }
  tick();
  window.setInterval(tick, 1000);
}

function initEvents() {
  $('#categoryFilters').addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    activeCategory = button.dataset.category;
    $$('.filter-chip', $('#categoryFilters')).forEach((chip) => {
      const isActive = chip === button;
      chip.classList.toggle('active', isActive);
      chip.setAttribute('aria-pressed', String(isActive));
    });
    renderEvents();
  });
  $('#eventSearch').addEventListener('input', renderEvents);
  $('#eventsGrid').addEventListener('click', (event) => {
    const button = event.target.closest('[data-event-id]');
    if (button) openEventDetails(button.dataset.eventId);
  });
  $('#clearFilters').addEventListener('click', () => {
    activeCategory = 'All';
    $('#eventSearch').value = '';
    $$('.filter-chip', $('#categoryFilters')).forEach((chip) => {
      const active = chip.dataset.category === 'All';
      chip.classList.toggle('active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    renderEvents();
  });
}

function initNavigation() {
  $('#menuToggle').addEventListener('click', () => {
    const nav = $('#mobileNav');
    const isOpen = $('#menuToggle').getAttribute('aria-expanded') === 'true';
    $('#menuToggle').setAttribute('aria-expanded', String(!isOpen));
    $('#menuToggle').setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    nav.hidden = isOpen;
  });
  $$('#mobileNav a').forEach((link) => link.addEventListener('click', () => {
    $('#mobileNav').hidden = true;
    $('#menuToggle').setAttribute('aria-expanded', 'false');
    $('#menuToggle').setAttribute('aria-label', 'Open navigation');
  }));
  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      $('#eventSearch').focus();
      $('#discover').scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function initDialogs() {
  $$('[data-close]').forEach((button) => button.addEventListener('click', () => closeDialog($(`#${button.dataset.close}`))));
  $$('.modal').forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });
  });
  $('#successDone').addEventListener('click', () => closeDialog($('#registrationModal')));
  $('#registrationForm').addEventListener('submit', handleRegistrationSubmit);
  $('#myTicketsButton').addEventListener('click', openTickets);
  $('#exportTickets').addEventListener('click', exportTickets);
  $('#clearTickets').addEventListener('click', () => {
    if (!window.confirm('Clear all saved registrations from this browser? This cannot be undone.')) return;
    saveRegistrations([]);
    renderTickets();
    showToast('Your saved registrations have been cleared.');
  });
  $('#themeToggle').addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
}

function init() {
  $('#currentYear').textContent = String(new Date().getFullYear());
  initTheme();
  initEvents();
  initNavigation();
  initDialogs();
  renderEvents();
  updateTicketCount();
  initCountdown();
}

document.addEventListener('DOMContentLoaded', init);
