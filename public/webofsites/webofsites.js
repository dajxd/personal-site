const spotOne = [
  "League",
  "Clash",
  "Heroes",
  "Clan",
  "Guild",
  "Warriors",
  "Legends",
  "Clans",
  "Kingdom",
  "Age",
  "Realm",
  "War",
  "Thrones",
  "Dawn",
  "Throne",
  "Forge",
  "Game",
  "Titans",
  "Kingdoms",
  "World",
  "Leagues",
  "Rise",
  "Guilds",
  "Castles",
  "God",
  "Champions",
  "Legend",
  "Dragons",
  "Anger",
  "Combatants",
  "Priests",
];

const spotTwo = [
  "Heroes",
  "Legends",
  "War",
  "Thrones",
  "Clans",
  "Worlds",
  "Titans",
  "Empires",
  "Warships",
  "Kingdoms",
  "Warlords",
  "Warfare",
  "Honor",
  "Dragons",
  "Champions",
  "Weasels",
  "Anger",
  "Combat",
  "Ages",
  "Virtue",
  "Fantasy",
  "Sin",
];

function pickaNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const targetDiv = document.getElementById("main");
let one = spotOne[pickaNumber(spotOne.length)];
let two = spotTwo[pickaNumber(spotTwo.length)];

if (two != "Weasels") {
  targetDiv.innerHTML = '<a id="yeah">' + one + " of " + two + "</a>";
} else {
  targetDiv.innerHTML =
    '<a id="yeah" class="special">' + one + " of " + two + "</a>";
}
let input = document.querySelector("body");
// input.addEventListener('keypress', function(e) {
//   if (e.charCode == 13 || e.charCode == 32){
// 	  window.location.reload()
//   }
// });
//
// Modernize David, Modernize!
//
window.addEventListener("keydown", function (event) {
  if (event.code == "Space" || event.code == "Enter") {
    window.location.reload();
  }
});
