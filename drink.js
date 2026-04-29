// Задание 3. Реализавать обстрактный клас drink.
class Drink {
  #temp;
  constructor(name, size, price, temp) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temp = temp;
  };

  showInfoDrink () {
    console.log(`Название напитка:${this.name}, объем:${this.size}, Цена: ${this.price} рублей, Температура подачи ${this.#temp}`);
  };

  getTemp() {
    return this.#temp;
  };

  editNewTemp(newTemp) {
    this.#temp = newTemp;
  };

  #preparingDrink() {
    console.log(`${this.name} готовится`);
  };

  serveDrink() {
    this.#preparingDrink();
    console.log(`Прошу, заберите свой ${this.name}. Приходите еще !`);
  };

};

class Tea extends Drink {
  constructor(name, size, price, temp, variety) {
    super(name, size, price, temp);
    this.variety = variety;
  };

  getVariety() {
    return this.variety;
  };
};

class Coffe extends Drink {
  constructor(name, size, price, temp, degreeDoneness) {
    super(name, size, price, temp);
    this.degreeDoneness = degreeDoneness;
  };

  getDegreeDoneness() {
    return this.degreeDoneness;
  };
};

class Lemonade extends Drink {
  constructor(name, size, price, temp, typeBerries) {
    super(name, size, price, temp);
    this.typeBerries = typeBerries;
  };

  getTypeBerries() {
    return this.typeBerries;
  };
};

class Milkshake extends Drink {
  constructor(name, size, price, temp, typeMilk) {
    super(name, size, price, temp);
    this.typeMilk = typeMilk;
  };

  getTypeMilk() {
    return this.typeMilk;
  };
};

const drink = new Drink();
const tea = new Tea ('Чай', '0,4л', 95, 70 + '\u00B0C', 'зелёный');
const coffe = new Coffe ('Кофе', '200мл', 250, 74 + '\u00B0C', 'средняя прожарка');
const lemonade = new Lemonade ('Лимонад', '1л', 400, 30 + '\u00B0C', 'Малина');
const milkshake = new Milkshake ('Молочный коктейль', '250мл', 185, 18 + '\u00B0C', 'Кокосовое');

// Задание 4. Создать класс Кафе который будет принимать два аргумента. 

class Kiosk {
  constructor (name, location) {
    this.name = name;
    this.location = location;
  };

  showInfoKiosk() {
    console.log(`${this.name}, Находится по адресу ${this.location}`);
  };

  orderDrink(drink) {
    console.log (`Вы заказали в ${this.name} по адресу ${this.location}`);
    console.log (drink.showInfoDrink());
    drink.serveDrink();
};
}

const kiosk = new Kiosk ('АнтиСушка', 'г.Иркутск ул.Байкальская д16');