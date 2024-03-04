const counters = document.querySelectorAll(`.counter`);

counters.forEach(counter => {
  counter.innerText = '0';

  const target = +counter.dataset.target;

  const increment = target / 200;

  const interval = setInterval(() => {
    const c = +counter.innerText;
    if (c > target) {
      counter.innerText = target;
      clearInterval(interval);
    } else counter.innerText = `${Math.ceil(c + increment)}`;
  }, 1);
});
