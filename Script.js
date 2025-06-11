document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });

    const converters = [
        {
            inputId: 'length-input',
            outputId: 'length-output',
            fromId: 'length-from',
            toId: 'length-to',
            convert: convertLength
        },
        {
            inputId: 'temp-input',
            outputId: 'temp-output',
            fromId: 'temp-from',
            toId: 'temp-to',
            convert: convertTemperature
        },
        {
            inputId: 'mass-input',
            outputId: 'mass-output',
            fromId: 'mass-from',
            toId: 'mass-to',
            convert: convertMass
        },
        {
            inputId: 'volume-input',
            outputId: 'volume-output',
            fromId: 'volume-from',
            toId: 'volume-to',
            convert: convertVolume
        }
    ];

    converters.forEach(converter => {
        const input = document.getElementById(converter.inputId);
        const from = document.getElementById(converter.fromId);
        const to = document.getElementById(converter.toId);
        
        input.addEventListener('input', () => converter.convert());
        from.addEventListener('change', () => converter.convert());
        to.addEventListener('change', () => converter.convert());
        converter.convert(); 
    });

    function convertLength() {
        const input = parseFloat(document.getElementById('length-input').value) || 0;
        const from = document.getElementById('length-from').value;
        const to = document.getElementById('length-to').value;
        const output = document.getElementById('length-output');

        const toMeters = {
            meters: 1,
            kilometers: 1000,
            centimeters: 0.01,
            millimeters: 0.001,
            miles: 1609.34,
            yards: 0.9144,
            feet: 0.3048,
            inches: 0.0254
        };

        const fromMeters = {
            meters: 1,
            kilometers: 0.001,
            centimeters: 100,
            millimeters: 1000,
            miles: 0.000621371,
            yards: 1.09361,
            feet: 3.28084,
            inches: 39.3701
        };

        const result = input * toMeters[from] * fromMeters[to];
        output.value = result.toFixed(4);
    }

    function convertTemperature() {
        const input = parseFloat(document.getElementById('temp-input').value) || 0;
        const from = document.getElementById('temp-from').value;
        const to = document.getElementById('temp-to').value;
        const output = document.getElementById('temp-output');

        let celsius;
        if (from === 'celsius') celsius = input;
        else if (from === 'fahrenheit') celsius = (input - 32) * 5/9;
        else if (from === 'kelvin') celsius = input - 273.15;

        let result;
        if (to === 'celsius') result = celsius;
        else if (to === 'fahrenheit') result = (celsius * 9/5) + 32;
        else if (to === 'kelvin') result = celsius + 273.15;
        
        output.value = result.toFixed(2);
    }

    function convertMass() {
        const input = parseFloat(document.getElementById('mass-input').value) || 0;
        const from = document.getElementById('mass-from').value;
        const to = document.getElementById('mass-to').value;
        const output = document.getElementById('mass-output');

        const toKg = {
            kilograms: 1,
            grams: 0.001,
            milligrams: 0.000001,
            pounds: 0.453592,
            ounces: 0.0283495,
            arroba: 15
        };

        const fromKg = {
            kilograms: 1,
            grams: 1000,
            milligrams: 1000000,
            pounds: 2.20462,
            ounces: 35.274,
            arroba: 1/15
        };

        const result = input * toKg[from] * fromKg[to];
        output.value = result.toFixed(4);
    }

    function convertVolume() {
        const input = parseFloat(document.getElementById('volume-input').value) || 0;
        const from = document.getElementById('volume-from').value;
        const to = document.getElementById('volume-to').value;
        const output = document.getElementById('volume-output');

        const toLiters = {
            liters: 1,
            milliliters: 0.001,
            'cubic-meters': 1000,
            gallons: 3.78541
        };

        const fromLiters = {
            liters: 1,
            milliliters: 1000,
            'cubic-meters': 0.001,
            gallons: 0.264172
        };

        const result = input * toLiters[from] * fromLiters[to];
        output.value = result.toFixed(4);
    }
});
