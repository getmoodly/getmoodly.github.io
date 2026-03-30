const CACHE_NAME = 'moodly-v1';
const ASSETS = [
  '/kanslaflow/index.html',
  '/kanslaflow/manifest.json'
];

// Install — cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — network first, fallback to cache
self.addEventListener('fetch', e => {
  // Skip non-GET and chrome-extension requests
  if (e.request.method !== 'GET' || e.request.url.startsWith('chrome-extension')) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Cache successful responses
        if (res.ok && e.request.url.startsWith(self.location.origin)) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

// Push notification handler
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  const title = data.title || 'Moodly';
  const options = {
    body: data.body || 'Dags att checka in! Hur var dagen?',
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧒</text></svg>',
    badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧒</text></svg>',
    tag: 'moodly-reminder',
    renotify: true,
    data: { url: '/kanslaflow/index.html' }
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

// Notification click — open app
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = e.notification.data?.url || '/kanslaflow/index.html';
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clients => {
        const existing = clients.find(c => c.url.includes('/kanslaflow/'));
        if (existing) return existing.focus();
        return self.clients.openWindow(url);
      })
  );
});

// Periodic check for daily reminder (via message from main app)
self.addEventListener('message', e => {
  if (e.data?.type === 'SCHEDULE_REMINDER') {
    // Store reminder time
    const hour = e.data.hour || 17;
    const minute = e.data.minute || 0;
    // We'll check periodically if it's time
    scheduleCheck(hour, minute);
  }
});

let reminderInterval = null;
function scheduleCheck(hour, minute) {
  if (reminderInterval) clearInterval(reminderInterval);
  // Check every 15 minutes if we should show a notification
  reminderInterval = setInterval(async () => {
    const now = new Date();
    if (now.getHours() === hour && now.getMinutes() >= minute && now.getMinutes() < minute + 15) {
      // Check if already notified today
      const clients = await self.clients.matchAll({ type: 'window' });
      if (clients.length === 0) {
        // App not open — send reminder
        self.registration.showNotification('Moodly', {
          body: 'Dags att checka in! Hur var dagen? 📊',
          tag: 'moodly-daily',
          renotify: false,
          data: { url: '/kanslaflow/index.html' }
        });
      }
    }
  }, 15 * 60 * 1000); // Check every 15 min
}
