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
        <div className="p-6 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Calculadora de conversión de moneda</h2>
            <label className="flex flex-col mb-4">
                Cantidad:
                <input
                    type="number"
                    className="border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingrese texto"
                    value={amount}
                    onChange={handleAmountChange}
                />
            </label>
            <label className="flex flex-col mb-4">
                De:
                <select
                    className="border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
            <label className="flex flex-col mb-4">
                A:
                <select
                    className="border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleConversion}>
                Convertir
            </button>
            {convertedAmount && (
                <p className="text-red-500 mt-4">
                    Cantidad convertida: {convertedAmount.toFixed(2)} {toCurrency}
                </p>
            )}
        </div>
    );
};

export default CurrencyCalculator;