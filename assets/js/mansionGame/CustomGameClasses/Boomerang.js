import Character from '../GameEngine/Character.js';

class Boomerang extends Character {
    constructor(gameEnv = null, sourcex, sourcey, targetx, targety) {
        // Use minimal placeholder data; sprite will override it
        super({ id: 'scythe' }, gameEnv);

        this.source_coords = { x: sourcex, y: sourcey };
        this.target_coords = { x: targetx, y: targety };

        // Ellipse calculations
        this.ellipse_center = {
            x: (sourcex + targetx) / 2,
            y: (sourcey + targety) / 2
        };

        this.ellipse_width = Math.sqrt((targetx - sourcex) ** 2 + (targety - sourcey) ** 2);
        this.ellipse_height = this.ellipse_width / 4; // tweakable
        this.ellipse_tilt = Math.atan2(targety - sourcey, targetx - sourcex);

        this.radian_prog = 0;
        this.radian_limit = 2 * Math.PI;
        this.projectileSpeed = 0.05;

        this.revComplete = false;

        // Load scythe image
        this.spriteSheet = new Image();
        this.spriteSheet.onload = () => this.imageLoaded = true;
        this.spriteSheet.src = (gameEnv?.path || "") + "/images/mansionGame/scythe.png";

        // Logical display size (scale down 300x280 px to reasonable in-game size)
        this.width = 64;  // adjust to fit game world
        this.height = Math.floor(64 * 280 / 300); // preserve aspect ratio
        this.isAnimated = false;

        this.position = { x: sourcex, y: sourcey };
    }

    update() {
        if (this.revComplete) return;

        if (this.radian_prog >= this.radian_limit) {
            this.revComplete = true;
            this.destroy();
        } else {
            this.radian_prog += this.projectileSpeed;

            const cosProg = Math.cos(this.radian_prog);
            const sinProg = Math.sin(this.radian_prog);
            const cosTilt = Math.cos(this.ellipse_tilt);
            const sinTilt = Math.sin(this.ellipse_tilt);

            const x_coord = this.ellipse_center.x + 
                            (this.ellipse_width / 2) * cosProg * cosTilt - 
                            this.ellipse_height * sinProg * sinTilt;

            const y_coord = this.ellipse_center.y + 
                            (this.ellipse_width / 2) * cosProg * sinTilt + 
                            this.ellipse_height * sinProg * cosTilt;

            this.position.x = x_coord;
            this.position.y = y_coord;
        }

        this.draw();
    }

    draw() {
        if (!this.imageLoaded) return;

        const ctx = this.ctx;
        this.clearCanvas();

        const dstW = Math.max(1, Math.floor(this.width));
        const dstH = Math.max(1, Math.floor(this.height));

        this.canvas.width = dstW;
        this.canvas.height = dstH;

        ctx.save();
        ctx.translate(dstW / 2, dstH / 2);

        // Optional: rotate based on progress for a spinning effect
        const rotationAngle = this.radian_prog * 2; // tweak multiplier for visual spin
        ctx.rotate(rotationAngle);

        ctx.drawImage(
            this.spriteSheet,
            0, 0, this.spriteSheet.naturalWidth, this.spriteSheet.naturalHeight,
            -dstW / 2, -dstH / 2, dstW, dstH
        );
        ctx.restore();

        this.setupCanvas();
    }

    destroy() {
        super.destroy();
    }
}

export default Boomerang;
