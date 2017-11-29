'use strict';

// Найдем и покажем окно настроек пользователя
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

// массив, заполняется в цикле 4-мя магами
var similarWizards = [];
var wizardCount = 4;
for (var i = 0; i < wizardCount; i++) {
  similarWizards[i] = {};
  similarWizards[i].name = randomName(wizardNames, wizardLastNames);
  similarWizards[i].coatColors = randomArrayValue(coatColors);
  similarWizards[i].eyesColors = randomArrayValue(eyesColors);
}

// Функция получения рандомных имени и фамилии мага (использует randomArrayValue)
function randomName(wizardNameArray, wizardLastNameArray) {
  return randomArrayValue(wizardNameArray) + ' ' + randomArrayValue(wizardLastNameArray);
}

// Функция получения рандомного значения из массива (индекса массива)
function randomArrayValue(array) {
  var randomIndex = Math.floor(Math.random() * (array.length));
  return array[randomIndex];
}

// Найдем шаблон, который мы будем копировать
var wizardTemplate = document.querySelector('#similar-wizard-template').content;
// И найдем элемент, в который мы будем вставлять похожих магов
var wizardsList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

// Отрисуем наш шаблон в документ
for (var j = 0; j < wizardCount; j++) {
  // true, если дочерние узлы также должны быть клонированы, или false, чтобы клонировать только указанный узел.
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = similarWizards[j].name;
  wizardElement.querySelector('.wizard-coat').style.fill = similarWizards[j].coatColors;
  wizardElement.querySelector('.wizard-eyes').style.fill = similarWizards[j].eyesColors;
  // Добавляет элемент в конец списка дочерних элементов родителя.
  // Если элемент уже существует он удаляется из текущего родителя и вставляется заново.
  fragment.appendChild(wizardElement);
}
wizardsList.appendChild(fragment);

// Покажем блок с похожими персонажами
document.querySelector('.setup-similar').classList.remove('hidden');
