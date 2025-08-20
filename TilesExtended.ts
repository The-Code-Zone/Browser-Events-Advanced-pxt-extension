namespace scene {

    //% blockId=scrollTilemapWithMouse
    //% block="scroll tilemap at speed $scrollSpeed when mouse $buffer from edge"
    //% scrollSpeed.defl=3
    //% buffer.defl=20
    //% group="Tilemaps"
    //% weight=0
    export function scrollTilemapWithMouse(scrollSpeed: number, buffer: number) {

        game.onUpdate(() => {
            let camX = scene.cameraProperty(CameraProperty.X);
            let camY = scene.cameraProperty(CameraProperty.Y);
            let mouseX = browserEvents.getMouseCameraX();
            let mouseY = browserEvents.getMouseCameraY();
            let screenWidth = scene.screenWidth();
            let screenHeight = scene.screenHeight();
            if (mouseX > screenWidth - buffer) {
                scene.centerCameraAt(camX + scrollSpeed, camY);
            }
            if (mouseX < buffer) {
                scene.centerCameraAt(camX - scrollSpeed, camY);
            }
            if (mouseY > screenHeight - buffer) {
                scene.centerCameraAt(camX, camY + scrollSpeed);
            }
            if (mouseY < buffer) {
                scene.centerCameraAt(camX, camY - scrollSpeed);
            }
        })
    }

}