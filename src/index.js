import { promises as fs } from 'fs';

async function createList() {
  try {
    const cityData = JSON.parse(await fs.readFile('Cities.json'));
    const stateData = JSON.parse(await fs.readFile('States.json'));

    stateData.forEach((state) => {
      let citiesOfState = { Cities: [] };
      cityData.map(({ Nome: cityName, Estado: cityEstado }) => {
        if (cityEstado === state.ID) {
          citiesOfState.Cities.sort();
          citiesOfState.Cities.push(cityName);
        }
      });

      fs.writeFile(
        `./Lista/${state.Sigla}.json`,
        JSON.stringify(citiesOfState, null, 2)
      );
    });
  } catch (err) {
    console.log('ERRO: ' + err);
  }
}

// Ver a quantidade de cidades do estado passado pelo parâmetro
async function lenghtState(estado) {
  try {
    let stateInitials = estado;

    let lengthState = 0;

    const stateData = JSON.parse(
      await fs.readFile(`./Lista/${stateInitials}.json`)
    );
    lengthState = stateData.Cities.length;

    console.log(
      `\nO estado de ${stateInitials} possui ${lengthState} cidades.\n`
    );
  } catch (err) {
    console.log('ERRO: ' + err);
  }
}

// Função para oegar a quantidade de cidades dos estados
async function getUfCitiesLength() {
  try {
    let allStatesMaped = [];
    let allCities = [];
    let allCitiesData = [];

    const allStates = JSON.parse(await fs.readFile('States.json'));
    allStatesMaped = allStates.map((state) => state.Sigla);

    for (let state of allStatesMaped) {
      allCitiesData = JSON.parse(await fs.readFile(`./Lista/${state}.json`));

      allCities.push({ uf: state, cities: allCitiesData.Cities.length });
    }
    return allCities;
  } catch (err) {
    console.log('ERRO: ' + err);
  }
}

// Top 5 estados com mais cidades
async function UfCitiesMore() {
  try {
    let allCities = await getUfCitiesLength();
    let top5UfCitiesMore = [];

    allCities.sort((a, b) => b.cities - a.cities);

    top5UfCitiesMore = allCities.slice(0, 5);

    console.log('Top 5 estados com mais cidades:');
    console.log(top5UfCitiesMore);
  } catch (err) {
    console.log('ERRO: ' + err);
  }
}

// Top 5 estados com menos cidades
async function UfCitiesLess() {
  try {
    let allCities = await getUfCitiesLength();
    let top5UfCitiesLess = [];

    allCities.sort((a, b) => a.cities - b.cities);

    top5UfCitiesLess = allCities.slice(0, 5);

    top5UfCitiesLess.sort((a, b) => b.cities - a.cities);

    console.log('Top 5 estados com menos cidades:');
    console.log(top5UfCitiesLess);
  } catch (err) {
    console.log('ERRO: ' + err);
  }
}

// Cidades com o nome maior de cada estado
async function allCitiesBiggerNameUf() {
  try {
    let allStatesMaped = [];
    let allCities = [];
    let allCitiesData = [];

    const allStates = JSON.parse(await fs.readFile('States.json'));
    allStatesMaped = allStates.map((state) => state.Sigla);

    for (let state of allStatesMaped) {
      allCitiesData = JSON.parse(await fs.readFile(`./Lista/${state}.json`));

      allCitiesData.Cities.sort();
      allCitiesData.Cities.sort((a, b) => {
        return b.length - a.length;
      });

      allCities.push({ uf: state, cities: allCitiesData.Cities[0] });
    }

    console.log('As cidades com o nome maior de cada estado:');
    console.log(allCities);
  } catch (err) {
    console.log('ERRO: ' + err);
  }
}

// Cidades com o nome menor de cada estado
async function allCitiesSmallerNameUf() {
  try {
    let allStatesMaped = [];
    let allCities = [];
    let allCitiesData = [];

    const allStates = JSON.parse(await fs.readFile('States.json'));
    allStatesMaped = allStates.map((state) => state.Sigla);

    for (let state of allStatesMaped) {
      allCitiesData = JSON.parse(await fs.readFile(`./Lista/${state}.json`));

      allCitiesData.Cities.sort();
      allCitiesData.Cities.sort((a, b) => {
        return a.length - b.length;
      });

      allCities.push({ uf: state, cities: allCitiesData.Cities[0] });
    }
    console.log('As cidades com o nome menor de cada estado:');
    console.log(allCities);
  } catch (err) {
    console.log('ERRO: ' + err);
  }
}

// Cidade de maior nome de todos os estados
async function citiesBiggerThanAllUf() {
  try {
    let allStatesMaped = [];
    let allCities = [];
    let allCitiesData = [];
    let cityNameBigger = [];

    const allStates = JSON.parse(await fs.readFile('States.json'));
    allStatesMaped = allStates.map((state) => state.Sigla);

    for (let state of allStatesMaped) {
      allCitiesData = JSON.parse(await fs.readFile(`./Lista/${state}.json`));

      allCitiesData.Cities.sort();
      allCitiesData.Cities.sort((a, b) => {
        return b.length - a.length;
      });

      allCities.push({ uf: state, cities: allCitiesData.Cities[0] });
    }

    allCities.sort((a, b) => {
      return a.cities > b.cities ? 1 : b.cities > a.cities ? -1 : 0;
    });
    allCities.sort((a, b) => {
      return b.cities.length - a.cities.length;
    });
    cityNameBigger.push(allCities[0]);

    console.log('Cidade de maior nome de todos os estados:');
    console.log(cityNameBigger);
  } catch (err) {
    console.log('ERRO: ' + err);
  }
}

// Cidade de menor nome de todos os estados
async function citiesSmallerThanAllUf() {
  try {
    let allStatesMaped = [];
    let allCities = [];
    let allCitiesData = [];
    let cityNameSmaller = [];

    const allStates = JSON.parse(await fs.readFile('States.json'));
    allStatesMaped = allStates.map((state) => state.Sigla);

    for (let state of allStatesMaped) {
      allCitiesData = JSON.parse(await fs.readFile(`./Lista/${state}.json`));

      allCitiesData.Cities.sort();
      allCitiesData.Cities.sort((a, b) => {
        return a.length - b.length;
      });

      allCities.push({ uf: state, cities: allCitiesData.Cities[0] });
    }

    allCities.sort((a, b) => {
      return a.cities > b.cities ? 1 : b.cities > a.cities ? -1 : 0;
    });
    allCities.sort((a, b) => {
      return a.cities.length - b.cities.length;
    });

    cityNameSmaller.push(allCities[0]);

    console.log('Cidade de menor nome de todos os estados:');
    console.log(cityNameSmaller);
  } catch (err) {
    console.log('ERRO: ' + err);
  }
}

async function printFile() {
  // Cria os arquivos .json na pasta Lista
  await createList();
  // Mostra a quantidade de cidades do estado escolhido
  //Coloque o UF do estado que desejar para ver a quantidade de cidades
  await lenghtState('SP');
  // Top 5 estados com mais cidades
  await UfCitiesMore();
  // Top 5 estados com menos cidades
  await UfCitiesLess();
  // Cidades com o nome maior de cada estado
  await allCitiesBiggerNameUf();
  // Cidades com o nome menor de cada estado
  await allCitiesSmallerNameUf();
  // Cidade de maior nome de todos os estados
  await citiesBiggerThanAllUf();
  // Cidade de menor nome de todos os estados
  await citiesSmallerThanAllUf();
}

printFile();
