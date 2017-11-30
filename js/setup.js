'use strict';

var WIZARD_COUNT = 4;

// Найдем и покажем окно настроек пользователя
var userDialog = document.querySelector('.setup');
// Найдем шаблон, который мы будем копировать
var wizardTemplate = document.querySelector('#similar-wizard-template').content;
// И найдем элемент, в который мы будем вставлять похожих магов
var wizardsList = document.querySelector('.setup-similar-list');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// массив, заполняется в цикле 4-мя магами
var similarWizards = [];

var fillWizards = function () {
  for (var i = 0; i < WIZARD_COUNT; i++) {
    similarWizards[i] = {};
    similarWizards[i].name = randomName(WIZARD_NAMES, WIZARD_LAST_NAMES);
    similarWizards[i].COAT_COLORS = randomArrayValue(COAT_COLORS);
    similarWizards[i].EYES_COLORS = randomArrayValue(EYES_COLORS);
  }
};

// Функция получения рандомных имени и фамилии мага (использует randomArrayValue)
var randomName = function (wizardNameArray, wizardLastNameArray) {
  return randomArrayValue(wizardNameArray) + ' ' + randomArrayValue(wizardLastNameArray);
};

// Функция получения рандомного значения из массива (индекса массива)
var randomArrayValue = function (array) {
  var randomIndex = Math.floor(Math.random() * (array.length));
  return array[randomIndex];
};

var renderWizard = function (data) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = data.name;
  wizardElement.querySelector('.wizard-coat').style.fill = data.COAT_COLORS;
  wizardElement.querySelector('.wizard-eyes').style.fill = data.EYES_COLORS;

  return wizardElement;
};

var appendWizard = function () {
  var fragment = document.createDocumentFragment();

  // Отрисуем наш шаблон в документ
  for (var j = 0; j < WIZARD_COUNT; j++) {
    fragment.appendChild(renderWizard(similarWizards[j]));
  }
  wizardsList.appendChild(fragment);
};

userDialog.classList.remove('hidden');

fillWizards();
appendWizard();

// Покажем блок с похожими персонажами
document.querySelector('.setup-similar').classList.remove('hidden');
