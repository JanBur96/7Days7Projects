const twitter = document.querySelector('.twitter');
const linkedin = document.querySelector('.linkedin');
const xing = document.querySelector('.xing');
const mobile = document.querySelector('.mobile');
const mail = document.querySelector('.mail');

twitter.addEventListener('click', (e) => {
  if (e.target.textContent === 'Twitter') {
    e.target.textContent = '@mrgoodboy';
  } else if (e.target.textContent === '@mrgoodboy') {
    e.target.textContent = 'Twitter';
  }
});

linkedin.addEventListener('click', (e) => {
  if (e.target.textContent === 'LinkedIN') {
    e.target.textContent = 'Mr. Good Boy';
  } else if (e.target.textContent === 'Mr. Good Boy') {
    e.target.textContent = 'LinkedIN';
  }
});

xing.addEventListener('click', (e) => {
  if (e.target.textContent === 'Xing') {
    e.target.textContent = 'Mr. Good Boy';
  } else if (e.target.textContent === 'Mr. Good Boy') {
    e.target.textContent = 'Xing';
  }
});

mobile.addEventListener('click', (e) => {
  if (e.target.textContent === 'Phone') {
    e.target.textContent = '0123/456789';
  } else if (e.target.textContent === '0123/456789') {
    e.target.textContent = 'Phone';
  }
});

mail.addEventListener('click', (e) => {
  if (e.target.textContent === 'Mail') {
    e.target.textContent = 'good@boy.com';
  } else if (e.target.textContent === 'good@boy.com') {
    e.target.textContent = 'Mail';
  }
});
