let INITIAL_HEALTH =100;
let current_HEALTH = INITIAL_HEALTH;
const DAMAGE= 10;

adjustHealthBars(INITIAL_HEALTH);

 
function  monsterAttack(){
    console.log(monsterHealthBar.value+ "   "+ playerHealthBar.value);

    if(monsterHealthBar.value<=0 && playerHealthBar.value>=0){
        
        alert("Palyer Won");
        }
        else if ((monsterHealthBar.value>=0) && (playerHealthBar.value<=0)) {
            alert("Monster WOn");
        
        
        }



dealMonsterDamage(DAMAGE);
 




dealPlayerDamage(DAMAGE);

 
}


attackBtn.addEventListener('click',monsterAttack);
