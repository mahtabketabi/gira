
        // پس زمینه کهکشان
        const canvas = document.getElementById('galaxy');
        const ctx = canvas.getContext('2d');
        function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
        window.addEventListener('resize', resize);
        resize();

        const stars = Array.from({length: 250}, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        s: Math.random() * 0.3 + 0.1
    }));

        function anim() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#000000";
        stars.forEach(st => {
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, 2 * Math.PI);
        ctx.fill();
        st.y += st.s;
        if (st.y > canvas.height) {
        st.y = 0;
        st.x = Math.random() * canvas.width;
    }
    });
        requestAnimationFrame(anim);
    }
        anim();

        // تاریخ شروع: امروز (مثلاً 2025-07-23)
        const startDate = new Date("2025-07-23T00:00:00+03:30");
        const totalDays = 35;

        const previous = {
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    };

        function getIranTimeNow() {
        const nowUTC = new Date();
        const offsetMinutes = 210; // 3.5 ساعت
        return new Date(nowUTC.getTime() + offsetMinutes * 60000);
    }

        function flipUnit(unitId, newVal) {
        const flipUnitEl = document.getElementById('flip-' + unitId);
        const flipCard = flipUnitEl.querySelector('.flip-card');
        const flipNumber = flipCard.querySelector('.flip-number');

        if (previous[unitId] === newVal) return;

        flipCard.classList.add('flipping');

        setTimeout(() => {
        flipNumber.textContent = newVal;
    }, 300);

        setTimeout(() => {
        flipCard.classList.remove('flipping');
    }, 600);

        previous[unitId] = newVal;
    }

        function updateCountdown() {
        const nowIran = getIranTimeNow();
        const timePassed = nowIran - startDate;
        const msPerDay = 1000 * 60 * 60 * 24;
        const daysPassed = Math.floor(timePassed / msPerDay);

        const daysRemaining = Math.max(0, totalDays - daysPassed);
        const endDate = new Date(startDate.getTime() + totalDays * msPerDay);
        const distance = endDate - nowIran;

        if (distance <= 0) {
        ['days','hours','minutes','seconds'].forEach(id => {
        flipUnit(id, '00');
    });
        return;
    }

        const d = daysRemaining;
        const h = Math.floor((distance % msPerDay) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        flipUnit('days', String(d).padStart(2, '0'));
        flipUnit('hours', String(h).padStart(2, '0'));
        flipUnit('minutes', String(m).padStart(2, '0'));
        flipUnit('seconds', String(s).padStart(2, '0'));
    }

        updateCountdown();
        setInterval(updateCountdown, 1000);



        const animContainer1 = document.getElementById("lottie-container");
const animContainer2 = document.getElementById("lottie-container2");

const anim1 = lottie.loadAnimation({
  container: animContainer1,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'animation_trimmed.json'
});

const anim2 = lottie.loadAnimation({
  container: animContainer2,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'Team.json'
});

function fadeSwitch(fromEl, toEl, anim) {
  fromEl.classList.remove("active");
  setTimeout(() => {
    toEl.classList.add("active");
    anim.goToAndPlay(0, true);
  }, 300); // یک ثانیه برای fade
}

function startFadeLoop() {
  animContainer1.classList.add("active");
  anim1.goToAndPlay(0, true);

  anim1.addEventListener("complete", () => {
    fadeSwitch(animContainer1, animContainer2, anim2);
  });

  anim2.addEventListener("complete", () => {
    fadeSwitch(animContainer2, animContainer1, anim1);
  });
}

startFadeLoop();


const slogans = [
  "آینده را امروز بسازیم!",
  "هر روز یک فرصت تازه است.",
  "با هم رشد می‌کنیم.",
  "خلاقیت، کلید موفقیت است.",
  "تغییر فقط با قدم اول شروع می‌شود.",
  "به دنبال پیشرفت مداوم باش.",
  "با اشتیاق به جلو پیش رو.",
  "هر لحظه یک شروع جدید است."
];

function showRandomSlogan() {
  const sloganEl = document.getElementById('random-slogan');
  if (!sloganEl) return;
  const randomIndex = Math.floor(Math.random() * slogans.length);
  sloganEl.textContent = slogans[randomIndex];
}

// اجرا هنگام بارگذاری صفحه
window.addEventListener('DOMContentLoaded', showRandomSlogan);
