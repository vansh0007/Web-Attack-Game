let INITIAL_HEALTH;
let CURRENT_HEALTH = INITIAL_HEALTH;
let playercurrent;
const STRONG_HEALTH = 17;
const HEAL_HEALTH = 20;
const DAMAGE = 10;
let logbook = [];

let IS_AVAIL = true;

INITIAL_HEALTH = prompt("Please select the maximum value:", "100");
if (INITIAL_HEALTH <= 0 || isNaN(INITIAL_HEALTH)) {
  INITIAL_HEALTH = 100;
}

adjustHealthBars(INITIAL_HEALTH);

function validity() {
  if (IS_AVAIL && playerHealthBar.value <= 0) {
    IS_AVAIL = false;
    alert("YOU HAVE ONE LIFE LEFT, MAKE SURE YOU USE IT:");
    removeBonusLife();
    playerHealthBar.value = +playerHealthBar.value + playercurrent;
  }

  if (monsterHealthBar.value <= 0 && playerHealthBar.value >= 0) {
    alert("Player Won");
    restartGame();
  } else if (monsterHealthBar.value >= 0 && playerHealthBar.value <= 0) {
    alert("Monster Won");
    restartGame();
  } else if (monsterHealthBar.value <= 0 && playerHealthBar.value <= 0) {
    alert("Match is drawn:");
    restartGame();
  }
}

function logPrint(ev, val, PlayerFinal, finalMonster) {
  object = {
    event: ev,
    intialPvalue: val,
    FinalPvalue: PlayerFinal,
    FinalMvalue: finalMonster
  };

  logbook.push(object);
}

function restartGame() {
  resetGame(INITIAL_HEALTH);
  IS_AVAIL = true;
}

function handler(mode) {
  if (mode === "STRONG") {
    dealMonsterDamage(STRONG_HEALTH);

    const playercurrent = dealPlayerDamage(STRONG_HEALTH);

    logPrint(
      mode,
      playercurrent,
      playerHealthBar.value,
      monsterHealthBar.value
    );
    validity();

    validity();
  } else if (mode === "NORMAL") {
    dealMonsterDamage(DAMAGE);
    const playercurrent = dealPlayerDamage(DAMAGE);

    const PlayerFinal = playerHealthBar.value;

    logPrint(
      mode,
      playercurrent,
      playerHealthBar.value,
      monsterHealthBar.value
    );
    validity();
  } else if (mode === "HEAL") {
    let healvalue;

    if (playerHealthBar.value >= INITIAL_HEALTH - HEAL_HEALTH) {
      alert("Cant Heal More than Your max value");
      healvalue = INITIAL_HEALTH - playerHealthBar.value;
    } else {
      healvalue = HEAL_HEALTH;
    }
    const playercurrent = playerHealthBar.value;
    increasePlayerHealth(healvalue);
    const finalMonster = monsterHealthBar.value;

    const PlayerFinal = playerHealthBar.value;
    logPrint(mode, playercurrent, PlayerFinal, finalMonster);
    validity();
  }
}

function healPlayer() {
  handler("HEAL");
}

function strongAttack() {
  handler("STRONG");
}

function monsterAttack() {
  handler("NORMAL");
}

function showLog() {
  console.log(logbook);
}

attackBtn.addEventListener("click", monsterAttack);
strongAttackBtn.addEventListener("click", strongAttack);
healBtn.addEventListener("click", healPlayer);
logBtn.addEventListener("click", showLog);
