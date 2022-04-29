const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(team) {
  // throw new NotImplementedError('Not implemented');
  let name = [];
  let team2;
  for (let i = 0; i < team.length; i++) {
    if (typeof team[i] === 'string') {
      team2 = team[i].trim();
      name.push(team2[0].toUpperCase());
      // name.push(team[i].trim().team[i][0].toUpperCase());
    }
  }
  return name.sort().join('');
}

module.exports = {
  createDreamTeam
};
