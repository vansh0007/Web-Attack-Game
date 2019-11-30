let INITIAL_HEALTH = 100;
let CURRENT_HEALTH = INITIAL_HEALTH;
const STRONG_HEALTH = 17;
const HEAL_HEALTH = 20;
const DAMAGE = 10;

adjustHealthBars(INITIAL_HEALTH);

function handler(mode) {
  if (mode === "STRONG") {
    dealMonsterDamage(STRONG_HEALTH);

    dealPlayerDamage(STRONG_HEALTH);
  } else if (mode === "NORMAL") {
    dealMonsterDamage(DAMAGE);

    dealPlayerDamage(DAMAGE);
  } else if (mode === "HEAL") {
    let healvalue;
    if (playerHealthBar.value >= INITIAL_HEALTH - HEAL_HEALTH) {
      alert("Cant Heal More than Your max value");
      healvalue = INITIAL_HEALTH - playerHealthBar.value;
      increasePlayerHealth(healvalue);
    } else {
      healvalue = HEAL_HEALTH;
      increasePlayerHealth(healvalue);
    }
  }

  if (monsterHealthBar.value <= 0 && playerHealthBar.value >= 0) {
    alert("Player Won");
  } else if (monsterHealthBar.value >= 0 && playerHealthBar.value <= 0) {
    alert("Monster Won");
  } else if (monsterHealthBar.value <= 0 && playerHealthBar.value <= 0) {
    alert("Match is drawn:");
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

attackBtn.addEventListener("click", monsterAttack);
strongAttackBtn.addEventListener("click", strongAttack);
healBtn.addEventListener("click", healPlayer);
