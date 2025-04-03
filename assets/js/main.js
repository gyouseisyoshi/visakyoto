document.addEventListener("DOMContentLoaded", () => {
    const langSwitch = document.getElementById('lang-switch');
    const jaElements = document.querySelectorAll('.ja');
    const enElements = document.querySelectorAll('.en');
  
    langSwitch.addEventListener('click', () => {
      // 英語が非表示の場合 → 英語を表示
      if (enElements[0].style.display === 'none') {
        enElements.forEach(el => el.style.display = 'block');
        jaElements.forEach(el => el.style.display = 'none');
        langSwitch.textContent = '日本語';
      } 
      // 英語が表示の場合 → 日本語を表示
      else {
        enElements.forEach(el => el.style.display = 'none');
        jaElements.forEach(el => el.style.display = 'block');
        langSwitch.textContent = 'English';
      }
    });
  });
  