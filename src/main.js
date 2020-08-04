const pkmn_effectiveness = {
    'fire' : { 'grass' : 2, 'electric' : 1, 'water' : 0.5 },
    'grass' : { 'water' : 2, 'electric' : 1, 'fire' : 0.5 },
    'electric' : { 'water' : 2, 'electric' : 1, 'grass' : 0.5 },
    'water' : { 'fire' : 2, 'electric' : 1, 'grass' : 0.5 }
}

const calc_effectiveness = (pkmn_atk_type, pkmn_def_type) => {
    let effectiveness;
    if (pkmn_atk_type === pkmn_def_type) effectiveness = 1;
    else effectiveness = pkmn_effectiveness[pkmn_atk_type][pkmn_def_type];
    return effectiveness;
}

const pkmn_dmg_calc = (pkmn_atk, pkmn_def) => {
    let effectiveness = calc_effectiveness(pkmn_atk.tipo, pkmn_def.tipo);

    const damage = Math.round(50 * 
        (pkmn_atk.attack / pkmn_def.defense) * effectiveness);
    console.log(`${pkmn_atk.name.toUpperCase()} attacked ` +
        `${pkmn_def.name.toUpperCase()}` +
        `...\nThe total damage was: ${damage}`)
};

const pkmn_atk = {
    "name": 'Infernape',
    "tipo": 'fire',
    "attack": 90,
    "defense": 80
};

const pkmn_def = {
    "name": 'Torterra',
    "tipo": 'grass',
    "attack": 90,
    "defense": 80
};  

const pkmn_def = {
    "name": 'Empoleon',
    "tipo": 'water',
    "attack": 90,
    "defense": 80
};  

const pkmn_def = {
    "name": 'Luxray',
    "tipo": 'electric',
    "attack": 90,
    "defense": 80
};  

pkmn_dmg_calc(pkmn_atk, pkmn_def);
