let ClickCollider = SpriteKind.create()

namespace browserEvents{

    //% blockId=getMouseCameraX
    //% block="getMouseCameraX"
    //% group="Mouse"
    //% weight=14
    export function getMouseCameraX(): number{
        return mouseX();
    };

    //% blockId=getMouseCameraY
    //% block="getMouseCameraY"
    //% group="Mouse"
    //% weight=13
    export function getMouseCameraY(): number {
        return mouseY();
    };

    //% blockId=getMouseSceneX
    //% block="getMouseSceneX"
    //% group="Mouse"
    //% weight=12
    export function getMouseSceneX(): number{
        return getMouseCameraX() + scene.cameraProperty(CameraProperty.Left);
    };

    //% blockId=getMouseSceneY
    //% block="getMouseSceneY"
    //% group="Mouse"
    //% weight=11
    export function getMouseSceneY(): number {
        return getMouseCameraY() + scene.cameraProperty(CameraProperty.Top);
    };

    //% blockId=spriteFollowMousePointer
    //% block="$sprite follows mouse pointer"
    //% sprite.defl=mySprite
    //% sprite.shadow=variables_get
    //% group="Mouse"
    //% weight=10
    export function spriteFollowMousePointer(sprite: Sprite): void {
        game.onUpdate( () => {
            sprite.setPosition(getMouseSceneX(), getMouseSceneY());
        })
    };


    // click functionality

    let colliderDot = image.create(1, 1);
    colliderDot.fill(1);
    let hasClickColliderBeenActivated = false;
    let clickColliderCurrentlyActive = false;

    //% blockId=createColliderOnClick
    //% block="when $mouseButton is clicked create collider with invisibility $isInvisible of kind $kind=spritekind"
    //% group="Mouse"
    //% weight=5
    export function createColliderOnClick(mouseButton: MouseButton, isInvisible = true, kind = ClickCollider) {
        hasClickColliderBeenActivated = true;
        clickColliderCurrentlyActive = true;
        let collider: Sprite;
        mouseButton.onEvent(MouseButtonEvent.Pressed, function createClick() {
            if (!clickColliderCurrentlyActive) {return};
            collider = sprites.create(colliderDot, kind);
            collider.setPosition(getMouseSceneX(), getMouseSceneY());
            collider.setFlag(SpriteFlag.Invisible, isInvisible);
            collider.setFlag(SpriteFlag.GhostThroughWalls, true);
        })
        mouseButton.onEvent(MouseButtonEvent.Released, function deleteClick() {
            if (!clickColliderCurrentlyActive) { return };
            collider.destroy();
        })
    };


    //% blockId=changeClickColliderImage
    //% block="change click collider image to %img=screen_image_picker"
    //% group="Mouse"
    //% weight=4
    export function changeClickColliderImage(image: Image){
        colliderDot = image;
    };


    /**
    * toggle click collider functionality on and off if createColliderOnClick has been called first
    **/
    //% blockId=setClickColliderActive
    //% block="turn click collider $active"
    //% active.shadow="toggleOnOff"
    //% group="Mouse"
    //% weight=3
    export function setClickColliderActive(active: boolean){
        clickColliderCurrentlyActive = active;
    }

}
