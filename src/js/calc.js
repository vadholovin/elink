/**
 * 1. Цены вводить напротив их подписи.
 * 2. Следить за наличием запятой после цены.
 */
const prices = {
  strobingCable: {
    brick: 2,               // Штробление под кабель (кирпич/газобетон)
    concrete: 3,            // Штробление под кабель (бетон)
  },  
  strobingBox: {
    brick: 5,               // Штробление под коробку (кирпич/газобетон)
    concrete: 2,            // Штробление под коробку (бетон)
  },
  strobingShield: {
    brick: 2,               // Штробление под щит (кирпич/газобетон)
    concrete: 6,            // Штробление под щит (бетон)
  },
  strobingSocket: {
    brick: 2,                // Штробление под розетку (кирпич/газобетон)
    concrete: 2,             // Штробление под розетку (бетон)
  },

  cabelThin: {
    gofr: 2,                 // Прокладка кабеля cечение до 2,5 мм (в гофре)
    gofrOff: 2,              // Прокладка кабеля cечение до 2,5 мм (без гофры)
  },
  cabelWide: {
    gofr: 2,                 // Прокладка кабеля сечение от 4 мм (в гофре)
    gofrOff: 2,              // Прокладка кабеля сечение от 4 мм (без гофры)
  },

  installSocket: 2,          // Монтаж/подключение - розетка
  installSwitch: 2,          // Монтаж/подключение - выключатель
  installDimmer: 2,          // Монтаж/подключение - диммер
  installBox: 2,             // Монтаж/подключение - распред. коробка
  installStabilizer: 2,      // Монтаж/подключение - стабилизатор
  installSource: 2,          // Монтаж/подключение - источник питания

  installShieldOuter: 2,     // Монтаж электрощита - щит накладной
  installMeter220: 2,        // Монтаж электрощита - электросчетчик 220В
  installMeter380: 2,        // Монтаж электрощита - электросчетчик 380В
  installUzo2: 2,            // Монтаж электрощита - УЗО 2-полюсной
  installUzo4: 2,            // Монтаж электрощита - УЗО 4-полюсной
  installShieldInner: 2,     // Монтаж электрощита - щит внутренний

  plaster: 2,                // Заштукатуривание штробы
  plate: 2,                  // Вмазка подрозетника
};


const calculator = document.querySelector('.calc');

calculator.addEventListener('input', function (e){
  if (e.target.getAttribute('type') == 'number') {
    calculateTotal();
  }
});


function calculateTotal() {
  const inputs = document.querySelectorAll('.calc input[type=number]');
  const resultField = document.querySelector('#result');
  const entries = getEntries(inputs);
  let total = 0;

  for (let i = 0; i < entries.length; i++) {
    let price = (entries[i].length > 2) ? prices[entries[i][0]][entries[i][2]] : prices[entries[i][0]];
    let quantity = entries[i][1];
    total += price * quantity;
  }
  
  resultField.value = total;
}

function getEntries(inputs) {
  let entries = [];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value != '' && inputs[i].hasAttribute('data-feature')) {
      let id = inputs[i].getAttribute('id');
      let num = parseInt(inputs[i].value);
      let radios = inputs[i].parentElement.previousElementSibling.querySelectorAll('input[type=radio]');
      let feature = (radios[0].checked == true) ? radios[0].value : radios[1].value;
      let a = [id, num, feature];

      entries.push(a);
    } else if (inputs[i].value != '' && !inputs[i].hasAttribute('data-feature')) {
      let id = inputs[i].getAttribute('id');
      let num = parseInt(inputs[i].value);
      let a = [id, num];

      entries.push(a);
    }
  }
  return entries;
}