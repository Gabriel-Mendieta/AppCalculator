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
        //TODO: Calcular subResultado

        setFormula(number);
    }, [number])

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');

        lastOperation.current = undefined;
    };

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
    }
}