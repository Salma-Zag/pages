import Player from '../GameEngine/Player.js';
import Projectile from './Projectile.js';

class SpookFight extends Player {
    // Construct the class, with a list of stored projectiles
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.projectiles = [];
    }

    // Update spook and the projectiles
    update(...args) {
        super.update(...args);  // Do normal player updating
        // Update every projectile
        [...this.projectiles].forEach(p => {
            if (p.revComplete) {
                p.destroy();
            } else {
                p.update();
            }
        });
    }

    // Execute an attack
    attack() {
        this.projectiles.push(new Projectile(this.gameEnv, target.position.x, target.position.y, this.position.x, this.position.y, "PLAYER"));
    }
}

export default SpookFight;
