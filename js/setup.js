'use strict';

// Найдем и покажем окно настроек пользователя
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var randomArrayValue = function (arrayName) {
  var random = Math.floor(Math.random() * arrayName.length);
  return arrayName[random];
};
// Найдем шаблон, который мы будем копировать
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
// И найдем элемент, в который мы будем вставлять похожих магов
var similarListElement = document.querySelector('.setup-similar-list');

// Отрисуем наш шаблон в документ
for (var i = 0; i < 4; i++) {
  // true, если дочерние узлы также должны быть клонированы, или false, чтобы клонировать только указанный узел.
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = randomArrayValue(wizardNames) + ' ' + randomArrayValue(wizardLastNames);
  wizardElement.querySelector('.wizard-coat').style.fill = randomArrayValue(coatColors);
  wizardElement.querySelector('.wizard-eyes').style.fill = randomArrayValue(eyesColors);
  // Добавляет элемент в конец списка дочерних элементов родителя. Если элемент уже существует он удаляется из текущего родителя и вставляется заново.
  similarListElement.appendChild(wizardElement);
}

// Покажем блок с похожими персонажами
document.querySelector('.setup-similar').classList.remove('hidden');
