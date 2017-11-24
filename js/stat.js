'use strict';

window.renderStatistics = function (ctx, names, times) {

  // лучшее время
  var getMaxTime = function () {
    var maxTime = -1;
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > maxTime) {
        maxTime = time;
      }
    }
    return maxTime;
  };
  // сортировка по времени
  var sortTimes = function () {
    for (var i = 0; i <= times.length - 2; i++) {
      var minValue = times[i];

      for (var j = i + 1; j <= times.length - 1; j++) {
        if (times[j] < minValue) {
          minValue = times[j];
          var swap = times[i];
          times[i] = minValue;
          times[j] = swap;
        }
      }
    }
  };


  // гистограмма
  var drawStatsGraph = function () {
    // Высота гистограммы 150px
    var histogramHeight = 150;
    // Ширина колонки 40px
    var barWidth = 40;
    // Расстояние между колонками
    // var proportionalStep = 50;
    var proportionalStep = histogramHeight / (getMaxTime() - 0);
    //
    var indent = 90;
    var startX = 120;
    var startY = 245;
    var lineHeight = 15;
    //
    sortTimes();
    //
    for (var i = 0; i < times.length; i++) {
      var randomBlue = 'rgba(0, 0, 255, ' + Math.random() + ')';

      // размеры колонок(ось Х - слева направо горизонталь)
      ctx.fillRect(startX + indent * i, startY, barWidth, -(times[i] * proportionalStep));
      // цвет колонки участника
      ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : randomBlue;
      ctx.fillText(names[i], startX + indent * i, startY + lineHeight);
      ctx.fillText(times[i].toFixed(), startX + indent * i, startY - lineHeight - (times[i] * proportionalStep));
    }

  };
  // облако с тенью
  var drawStatsCloud = function () {
    // тень облака начало
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)'; // (полупрозрачный чёрный)
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    // облако
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.fillRect(100, 10, 420, 270);
    // тень облака конец
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

  };
  var drawStatsMessage = function () {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'green';
    ctx.fillText('Ура вы победили!', 125, 40);
    ctx.fillText('Список результатов:', 125, 60);
  };

  drawStatsCloud();
  drawStatsMessage();
  drawStatsGraph();
};
