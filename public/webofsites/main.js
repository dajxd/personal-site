spotOne = ['League', 'Clash', 'Heroes', 'Clan', 'Guild', 'Legends', 'Clans', 'Kingdom', 'Age', 'Realm', 'War', 'Thrones', 'Dawn', 'Throne', 'Forge', 'Game', 'Titans', 'Kingdoms', 'World', 'Leagues', 'Rise', 'Guilds', 'Castles', 'God', 'Champions', 'Legend', 'Dragons', 'Anger', 'Combatants', 'Priests'];

spotTwo = ['Heroes', 'Legends', 'War', 'Thrones', 'Clans', 'Worlds', 'Titans', 'Empires', 'Warships', 'Kingdoms', 'Warlords', 'Warfare', 'Honor', 'Dragons', 'Champions', 'Weasels', 'Anger', 'Combat', 'Ages', 'Virtue'];

function pickaNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


one = spotOne[pickaNumber(spotOne.length)];
two = spotTwo[pickaNumber(spotTwo.length)];
document.write('<a id="yeah"><center>' + one + ' of ' + two + '</center></a>');

document.write('<center><button onClick="window.location.reload()">MORE</button><br/><p>or just press enter or space or something?</p></center>');

let input = document.querySelector('body');
input.addEventListener('keypress', function(e) {
  if (e.charCode == 13 || e.charCode == 32){
	  window.location.reload()
  }
});
