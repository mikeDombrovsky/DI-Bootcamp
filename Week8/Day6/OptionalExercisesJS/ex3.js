/**
 * Write a function that converts HEX to RGB.
 * Then Make that function auto-detect the formats so that if you enter HEX color 
 * format it returns RGB and if you enter RGB color format it returns HEX.
 */

function convertToRgb(hex) {
    let r = hex.slice(1, 3);
    r = parseInt(r, 16);
    let g = hex.slice(3, 5);
    g = parseInt(g, 16);
    let b = hex.slice(5, 7);
    b = parseInt(b, 16);
    return `rgb(${r}, ${g}, ${b})`;
}

function convertToHex(rgb) {
    rgb = rgb.slice(4, -1);
    let [h, e, x] = rgb.split(',');
    h = parseInt(h).toString(16);
    e = parseInt(e).toString(16);
    x = parseInt(x).toString(16);
    return `#${h}${e}${x}`;
}

function testConvertToRgb() {
    let rgb = 'rgb(255, 99, 71)';
    let hex = '#ff6347'
    if (rgb === convertToRgb(hex)) {
        console.log(arguments.callee.name, '== PASSED');
    } else {
        throw new Error(`${arguments.callee.name} FAILED!`);
    }
}

function convertAny(color) {
    if (color.startsWith('#')) {
        return convertToRgb(color);
    } else if (color.startsWith('grb(')) {
        return convertToHex(color);
    }
}

function testConvertToHex() {
    let rgb = 'rgb(255, 99, 71)';
    let hex = '#ff6347'
    if (hex === convertToHex(rgb)) {
        console.log(arguments.callee.name, '== PASSED');
    } else {
        throw new Error(`${arguments.callee.name} FAILED!`);
    }
}

testConvertToRgb();
testConvertToHex();