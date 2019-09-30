/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

// Решение

var currentDate = new Date ();
var currentDayInMonth = currentDate.getDate ();

const person = {

    get salary () {
        if (currentDayInMonth <= 10) {
            return 'good salary';
        } else {
            return 'bad salary'
        }
    }
}
//вопрос: можно ли переменные по дате указать внутри объекта? если да, тогда их указывать как свойства объекта?
person.salary; // good salary

exports.person = person;
