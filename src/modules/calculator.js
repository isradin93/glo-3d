const calculator = (parentCalc, typeCalc, squareCalc, countCalc, dayCalc, totalValue, price = 100) => {
    const calcBlock = document.querySelector(parentCalc),
        calcType = document.querySelector(typeCalc),
        calcSquare = document.querySelector(squareCalc),
        calcCount = document.querySelector(countCalc),
        calcDay = document.querySelector(dayCalc),
        calcTotalValue = document.querySelector(totalValue);

    // Calc validation
    const validateCalc = selector => {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            //const target = e.target;

            // if (target.matches('[type="text"]')) {
            //     target.value = target.value.replace(/\D/g, '');
            // }

            if (input.value.match(/\D/g)) {
                input.style.border = '2px solid red';
            } else {
                input.style.border = '1px solid #19b5fe';
            }
        });
    };

    validateCalc('.calc-square');
    validateCalc('.calc-count');
    validateCalc('.calc-day');

    const countSum = () => {
        let total = 0,
            calcCountValue = 1,
            calcDayValue = 1;

        const calcTypeValue = calcType.options[calcType.selectedIndex].value,
            calcSquareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            calcCountValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue *= 1.5;
        }

        if (calcTypeValue && calcSquareValue) {
            total = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;

            let countSumId,
                count = 0;
            const countSum = () => {
                countSumId = requestAnimationFrame(countSum);
                count += total / 20;
                if (count < total) {
                    calcTotalValue.textContent = Math.round(count);
                } else {
                    cancelAnimationFrame(countSumId);
                    calcTotalValue.textContent = total;
                    count = 0;
                }
            };

            countSumId = requestAnimationFrame(countSum);
        }
    };

    calcBlock.addEventListener('change', event => {
        const target = event.target;

        if (target && target === calcType || target === calcSquare ||
            target === calcCount || target === calcDay) {
            countSum();
        }
    });
};

export default calculator;