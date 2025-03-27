import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '÷',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0');

    const [number, setNumber] = useState('0');

    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>();


    useEffect(() => {

        if (lastOperation.current) {
            const firtsFormulaPart = formula.split(' ').at(0);
            setFormula(`${firtsFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }

    }, [number])

    useEffect(() => {
        //TODO: Calcular subResultado

        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`);
    }, [formula])

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');

        lastOperation.current = undefined;
    };

    const toggleSign = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        };
    };

    const deleteLast = () => {
        if (number.length === 1) {
            setNumber('0');
        } else {
            setNumber(number.slice(0, -1));
        };
    };

    const setLastNumber = () => {
        //TODO: Calculate result

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        };

        setPrevNumber(number);
        setNumber('0');
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;

    };

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;

    };

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;

    };

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;

    };

    const calculateSubResult = () => {

        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue); //NaN

        if (isNaN(num2)) return num1;

        switch (operation) {
            case Operator.add:
                return num1 + num2;

            case Operator.subtract:
                return num1 - num2;

            case Operator.multiply:
                return num1 * num2;

            case Operator.divide:
                return num1 / num2;

            default:
                throw new Error(`Operation ${operation} not implemented`);
        }

    };

    const calculateResult = () => {

        const result = calculateSubResult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPrevNumber('0');
    }

    const buildNumber = (numberString: string) => {

        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            };

            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            };

            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            };

            if (!number.includes('.') && numberString === '0') {
                return;
            };
        };

        setNumber(number + numberString);
    }

    return {
        //Props
        formula,
        number,
        prevNumber,

        //Methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,

        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateSubResult,
        calculateResult,


    }
}