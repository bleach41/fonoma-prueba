'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyCalculator = () => {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');
    const [currencies, setCurrencies] = useState([]);

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleFromCurrencyChange = (event) => {
        setFromCurrency(event.target.value);
    };

    const handleToCurrencyChange = (event) => {
        setToCurrency(event.target.value);
    };

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get(
                    'https://api.exchangerate-api.com/v4/latest/EUR'
                );
                const { data } = response;
                const { rates } = data;
                const currencies = Object.keys(rates);
                setCurrencies(currencies);
            } catch (error) {
                console.error('Error fetching currencies:', error);
            }
        };

        fetchCurrencies();
    }, []);

    const handleConversion = async () => {
        try {
            const response = await axios.get(
                `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
            );
            const { data } = response;
            const { rates } = data;
            const rate = rates[toCurrency];
            const converted = amount * rate;
            setConvertedAmount(converted);
        } catch (error) {
            console.error('Error converting amount:', error);
        }
    };

    return (
        <div>
            <h2>Calculadora de conversión de moneda</h2>
            <label>
                Cantidad:
                <input
                    type="number"
                    className="text-blue-500"
                    placeholder="Ingrese texto"
                    value={amount}
                    onChange={handleAmountChange}
                />
            </label>
            <label>
                De:
                <select
                    className="text-red-500"
                    value={fromCurrency}
                    onChange={handleFromCurrencyChange}
                >
                    <option value="USD">USD</option>
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                A:
                <select
                    className="text-red-500"
                    value={toCurrency}
                    onChange={handleToCurrencyChange}
                >
                    <option value="">Seleccione una moneda</option>
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </label>
            <button onClick={handleConversion}>Convertir</button>
            {convertedAmount && (
                <p className="text-red-500">
                    Cantidad convertida: {convertedAmount.toFixed(2)} {toCurrency}
                </p>
            )}
        </div>
    );
};

export default CurrencyCalculator;