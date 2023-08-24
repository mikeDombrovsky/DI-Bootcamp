const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

//Write a JavaScript program that displays the colors in the following order : 
//“1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
const logColors = () => {
    let suffix = "";

    colors.forEach((color, i) => {
        i == 0 ? suffix = ordinal[1]
            : i == 1 ? suffix = ordinal[2]
                : i == 2 ? suffix = ordinal[3]
                    : i > 2 && i < 20 ? suffix = ordinal[0]
                        : suffix = ""
        console.log(`${i + 1}${suffix} choice is ${color}`);
    });
}

logColors();