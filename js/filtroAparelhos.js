const equipamentos = {
    notebook: {'Apple':['Macbook Air', 'Macbook Pro'], 'Samsung':['Galaxy Book 2','Galaxy Book 4','Galaxy Book Go']},
    tablet: {'Apple':['iPad 9th', 'iPad 10th', 'iPad Pro 13'], 'Samsung':['A9', 'S6 Light', 'S9'], 'Lenovo':['M9', 'P12']},
    smartphone: {'Apple':['Iphone SE' , 'Iphone 12', 'Iphone 13', 'Iphone 14',], 'Samsung':["Galaxy S8", "Galaxy A51"], 'Motorola':["Moto G54", "Moto E22"]}
};

async function filtrarAparelho() {
        
        const firstSelect = document.getElementById('equipamento');
        const secondSelect = document.getElementById('marca');
        const selectedDevice = firstSelect.value;
        const marcas = Object.keys(equipamentos[selectedDevice]);
        

        // Clear existing options
        secondSelect.innerHTML = '';

        // Populate new options
        marcas.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            secondSelect.appendChild(option);
        });
    }

async function filtrarMarca() {
        
        const firstSelect = document.getElementById('equipamento');
        const selectedDevice = firstSelect.value;
        const secondSelect = document.getElementById('marca');
        const selectedBrand = secondSelect.value;
        const thirdSelect = document.getElementById('modelo');
        const modelos = Object.values(equipamentos[selectedDevice][selectedBrand]);
        

        // Clear existing options
        thirdSelect.innerHTML = '';

        // Populate new options
        modelos.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            thirdSelect.appendChild(option);
        });
    }