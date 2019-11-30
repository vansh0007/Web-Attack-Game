let INITIAL_HEALTH = 100;
let CURRENT_HEALTH = INITIAL_HEALTH;
const STRONG_HEALTH = 17;
const HEAL_HEALTH = 20;
const DAMAGE = 10;
let playercurrent;

let IS_AVAIL = true;

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
  } else if (monsterHealthBar.value >= 0 && playerHealthBar.value <= 0) {
    alert("Monster Won");
  } else if (monsterHealthBar.value <= 0 && playerHealthBar.value <= 0) {
    alert("Match is drawn:");
  }
}

function handler(mode) {
  playercurrent = 0;

  if (mode === "STRONG") {
    dealMonsterDamage(STRONG_HEALTH);

    playercurrent = dealPlayerDamage(STRONG_HEALTH);

    validity();
  } else if (mode === "NORMAL") {
    dealMonsterDamage(DAMAGE);

    playercurrent = dealPlayerDamage(DAMAGE);

    validity();
  } else if (mode === "HEAL") {
    let healvalue;

    if (playerHealthBar.value >= INITIAL_HEALTH - HEAL_HEALTH) {
      alert("Cant Heal More than Your max value");
      healvalue = INITIAL_HEALTH - playerHealthBar.value;
    } else {
      healvalue = HEAL_HEALTH;
    }

    increasePlayerHealth(healvalue);
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
  console.log(CURRENT_HEALTH + " HEAL PLAYER:");
  handler("NORMAL");
}

attackBtn.addEventListener("click", monsterAttack);
strongAttackBtn.addEventListener("click", strongAttack);
healBtn.addEventListener("click", healPlayer);
