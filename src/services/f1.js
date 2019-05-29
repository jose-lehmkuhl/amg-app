import axios from 'axios';

const baseUrl = 'https://ergast.com/api/f1/current/';

export const getDriverStandings = async () => axios.get(`${baseUrl}driverStandings.json`);

export const getConstructorStandings = async () => axios.get(`${baseUrl}constructorStandings.json`);

export const getNextRace = async () => axios.get(`${baseUrl}next.json`);
