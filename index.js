const earth = {
  USA: ['New York', 'Los Angeles', 'San Diego'],
  Russia: ['Moscow', 'Braynsk', 'Samara'],
  Turkey: ['Istanbul', 'Alanya', 'Izmir'],
};

const country = document.getElementById('country');
const city = document.getElementById('city');
const goal = document.getElementById('goal');

window.onload = () => {
  const listCountries = Object.keys(earth);
  listCountries.forEach((el) => {
    const option = document.createElement('option');
    option.innerText = el;
    country.appendChild(option);
  });
};
// Выбираем город
country.addEventListener('change', () => {
  city.length = 0;
  const chosenCountry = country.value;
  const listCities = earth[chosenCountry];

  listCities.forEach((el) => {
    const option = document.createElement('option');
    option.innerText = el;
    city.appendChild(option);
  });
  goal.innerText = ``;
});
// Выводим выбранный результат
city.addEventListener('change', () => {
  goal.innerText = `Удачный выбор: ${country.value}, ${city.value}`;
});
