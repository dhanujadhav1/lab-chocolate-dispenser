var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(tag, color, count) {
    var i = 0;
    if (count <= 0)
        return 'Number cannot be zero/negative';
    else {
        while (i < count) {
            tag.unshift(color);
            i++;
        }
        return tag;
    }
}
//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(tag, number) {
    var arr = [];
    var i = 0;
    if (number <= 0)
        return 'Number cannot be zero/negative';
    else if (number > tag.length)
        return 'Insufficient chocolates in the dispenser';
    else {
        while (i < number) {
            arr.push(tag.shift());
            i++;
        }
        return arr;
    }
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(tag, number) {
    var i = 0;
    var arr = [];
    var tp;
    if (number > tag.length)
        return 'Insufficient chocolates in the dispenser';
    else if (number <= 0)
        return 'Number cannot be zero/negative';
    else {
        while (i < number) {
            tp = tag.pop();
            arr.push(tp);
            i++;
        }
        return arr;
    }
}

//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(tag, number, color) {
    var i = 0;
    var arr = [];
    var tp;
    if (number > tag.length)
        return 'Insufficient chocolates in the dispenser';
    else if (number <= 0)
        return 'Number cannot be zero/negative';
    else {
        for (let a = tag.length - 1; a >= 0 && number > 0; a--) {
            if (tag[a] == color) {
                tp = tag.pop();
                arr.push(tp);
                number--;
            }
        }
        return arr;
    }

}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(tag) {
    var green, silver, blue, crimson, purple, red, pink;
    if (tag.length == 0)
        return [];
    else {
        for (var a = 0; a < tag.length; a++) {
            switch (tag[a]) {
                case "green":
                    if (green == undefined) {
                        green = 0;
                    }
                    green++;
                    break;
                case "silver":
                    if (silver == undefined) {
                        silver = 0;
                    }
                    silver++;
                    break;
                case "blue": if (blue == undefined) {
                    blue = 0;
                }
                    blue++;
                    break;
                case "crimson":
                    if (crimson == undefined) {
                        crimson = 0;
                    }
                    crimson++;
                    break;
                case "purple":
                    if (purple == undefined) {
                        purple = 0;
                    }
                    purple++;
                    break;
                case "red":
                    if (red == undefined) {
                        red = 0;
                    }
                    red++;
                    break;
                case "pink":
                    if (pink == undefined) {
                        pink = 0;
                    }
                    pink++;
                    break;

            }
        }
        return [green, silver, blue, crimson, purple, red, pink];
    }
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(tag) {
    var arr = [];
    var green, silver, blue, crimson, purple, red, pink;
    for (var a = 0; a < tag.length; a++) {
        switch (tag[a]) {
            case "green":
                if (green == undefined) {
                    green = 0;
                }
                green++;
                break;
            case "silver":
                if (silver == undefined) {
                    silver = 0;
                }
                silver++;
                break;
            case "blue": if (blue == undefined) {
                blue = 0;
            }
                blue++;
                break;
            case "crimson":
                if (crimson == undefined) {
                    crimson = 0;
                }
                crimson++;
                break;
            case "purple":
                if (purple == undefined) {
                    purple = 0;
                }
                purple++;
                break;
            case "red":
                if (red == undefined) {
                    red = 0;
                }
                red++;
                break;
            case "pink":
                if (pink == undefined) {
                    pink = 0;
                }
                pink++;
                break;

        }
    }

    arr = [green, silver, blue, crimson, purple, red, pink];
    var temp;
    for (var a = 0; a < arr.length; a++) {
        for (var i = 0; i < a; i++) {
            if (arr[i + 1] > a[i]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

    return tag;


}
//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(tag, number, color, finalColor) {
    if (number <= 0)
        return 'Number cannot be zero/negative';
    else if (color == finalColor)
        return 'Can\'t replace the same chocolates';
    else {
        for (var i = 0; i < tag.length; i++) {
            if (tag[i] == color)
                tag[i] = finalColor;
        }
        return tag;
    }
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(tag, color, finalColor) {

    var count = 0;
    if (color == finalColor)
        return 'Can\'t replace the same chocolates';
    else {
        for (var i = 0; i < tag.length; i++) {
            if (tag[i] == color)
                tag[i] = finalColor;
            count++;
        }
        return [count, tag];
    }

}
//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor(tag, color) {


}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(tag, number) {


    return arr;

}