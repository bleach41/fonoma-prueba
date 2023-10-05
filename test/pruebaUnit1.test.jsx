import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import CurrencyCalculator from '../src/app/components/CurrencyCalculator';

describe('CurrencyCalculator', () => {
    let originalTimeout;

    beforeEach(() => {
        originalTimeout = jest.setTimeout(10000);
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
        jest.setTimeout(originalTimeout);
    });

    test('should render the CurrencyCalculator component', () => {
        render(<CurrencyCalculator />);

        // Verificar que el componente se renderice correctamente
        expect(screen.getByText('Calculadora de conversión de moneda')).toBeInTheDocument();
        expect(screen.getByLabelText('Cantidad:')).toBeInTheDocument();
        expect(screen.getByLabelText('De:')).toBeInTheDocument();
        expect(screen.getByLabelText('A:')).toBeInTheDocument();
        expect(screen.getByText('Convertir')).toBeInTheDocument();
    });

    // test('should convert the amount when the Convert button is clicked', async () => {
    //     const mockRates = {
    //         USD: 1,
    //         EUR: 0.952,
    //     };

    //     const mockResponse = {
    //         data: {
    //             rates: mockRates,
    //         },
    //     };

    //     jest.spyOn(axios, 'get').mockResolvedValueOnce(mockResponse);

    //     render(<CurrencyCalculator />);

    //     // Simular la entrada de datos
    //     fireEvent.change(screen.getByLabelText('Cantidad:'), { target: { value: '10' } });
    //     fireEvent.change(screen.getByLabelText('De:'), { target: { value: 'USD' } });
    //     fireEvent.change(screen.getByLabelText('A:'), { target: { value: 'EUR' } });

    //     // Simular hacer clic en el botón de conversión
    //     fireEvent.click(screen.getByText('Convertir'));

    //     // Esperar a que se realice la solicitud y se actualice el estado
    //     await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    //     // Verificar que se haya realizado la solicitud con los parámetros correctos
    //     expect(axios.get).toHaveBeenCalledWith('https://api.exchangerate-api.com/v4/latest/USD');

    //     // Verificar que se muestre la cantidad convertida
    //     expect(screen.getByText('Cantidad convertida: 9.52 EUR')).toBeInTheDocument();
    // });
});