const games = {
  'Board Games': [
    'Agricola',
    'Azul',
    'Carcassonne',
    'Catan',
    'Chess',
    'Checkers',
    'Clue',
    'Diplomacy',
    'Dominion',
    'Ticket to Ride',
  ],
  'Card Games': ['Blackjack', 'Bridge', 'Go Fish', 'Poker', 'Solitaire', 'Uno'],

  'Video Games': [
    "Assassin's Creed",
    'Call of Duty',
    'FIFA',
    'Grand Theft Auto',
    'Minecraft',
    'Pokémon',
    'The Legend of Zelda',
    'Tetris',
    'Uncharted',
  ],
};

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const gameCategoryDiv = document.getElementById('game-category');
const daySelectionDiv = document.getElementById('day-selection');

const selection = {
  game: 'None',
  category: 'None',
  day: 'None',
};

updateSummaryBox();

function updateSummaryBox() {
  document.getElementById('category').textContent = selection.category;
  document.getElementById('game').textContent = selection.game;
  document.getElementById('day').textContent = selection.day;
}

function handleRadioChange(radio, category) {
  if (radio.name === 'game') updateSelectedOptionForGame(radio, category);
  else if (radio.name === 'day') updateSelectedOptionForDay(radio);

  updateSummaryBox();
}

const handleToggleClasses = (element, className, targer, searched) => {
  if (searched === targer) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
};
const updateSelectedOptionForGame = ({ id, name, value }, category) => {
  selection.game = value;
  selection.category = category;

  document.querySelectorAll(`input[name="${name}"]`).forEach((i) => {
    const label = document.querySelector(`label[for="${i.id}"]`);
    handleToggleClasses(label, 'selectedLabelForGame', id, i.id);
  });
};
const updateSelectedOptionForDay = ({ id, name, value }) => {
  selection.day = value;

  document.querySelectorAll(`input[name="${name}"]`).forEach((i) => {
    const label = document.querySelector(`label[for="${i.id}"]`);
    handleToggleClasses(label, 'selectedLabelForDay', id, i.id);
  });
};

Object.keys(games).forEach((category) => {
  const categorySection = document.createElement('div');
  categorySection.className = 'category-section';

  const categoryHeader = document.createElement('h2');
  categoryHeader.textContent = category;
  categorySection.appendChild(categoryHeader);

  games[category].forEach((game) => {
    const radioDiv = document.createElement('div');
    radioDiv.className = 'radio-item';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'game';
    radio.value = game;
    radio.id = `${category}-${game}`;

    const label = document.createElement('label');
    label.textContent = game;
    label.htmlFor = radio.id;
    label.className = 'LabelForGame';

    radio.addEventListener('change', () => {
      handleRadioChange(radio, category);
    });

    radioDiv.appendChild(radio);
    radioDiv.appendChild(label);
    categorySection.appendChild(radioDiv);
  });

  gameCategoryDiv.appendChild(categorySection);
});

daysOfWeek.forEach((day) => {
  const radioDiv = document.createElement('div');
  radioDiv.className = 'radio-item';

  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'day';
  radio.value = day;
  radio.id = day;

  const label = document.createElement('label');
  label.textContent = day;
  label.htmlFor = radio.id;
  label.className = 'LabelForDay';

  radio.addEventListener('change', () => {
    handleRadioChange(radio);
  });

  radioDiv.appendChild(radio);
  radioDiv.appendChild(label);
  daySelectionDiv.appendChild(radioDiv);
});
