namespace browserEvents {

    // keyboard typing functionality

    export let keyButtons: KeyButton[] = [
        A, B, C, D, E, F, G, H, I, J, K, L, M,
        N, O, P, Q, R, S, T, U, V, W, X, Y, Z,
        Zero, One, Two, Three, Four, Five,
        Six, Seven, Eight, Nine, 
        Shift, Enter, CapsLock, Tab, Control,
        Meta, Alt, ArrowUp, ArrowDown,
        ArrowLeft, ArrowRight, BackTick, Hyphen,
        Equals, OpenBracket, CloseBracket, 
        BackSlash, Space, PageUp, SemiColon,
        Apostrophe, Comma, Period, ForwardSlash,
        PageDown, End, Home
    ]

    let mostRecentLetter: string;

    //% blockId=setupKeyboardInput
    //% block="setup keyboard typing input"
    //% group="Keyboard"
    //% weight=1
    export function setupKeyboardInput(){
        for (let keyButton of keyButtons) {
            keyButton.onEvent(KeyEvent.Pressed, () => {
                mostRecentLetter = keyToString(keyButton.id);
            })
        }
    }

    //% blockId=getMostRecentLetter
    //% block="get most recently input letter"
    //% group="Keyboard"
    //% weight=0
    export function getMostRecentLetter(){
        return mostRecentLetter;
    }

}

