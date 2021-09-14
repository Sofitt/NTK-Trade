export class inputValidator {

    constructor() {

    }
    /**
     * Проверяет валидность полей, если true - активирует кнопку
     * @param inputs - коллекция элементов
     * @param btn - кнопка отправки
     * @param boolean
     * */
    static isValid(inputs, btn, boolean) {
        const arr = inputs;
        btn.disabled = !(
          arr[0].value.length && arr[1].value.length && arr[2].value.length && boolean.agree && boolean.vacancy
        );
    }
}
