//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending


function bubble(list: number[]): number[] {
    let temp: number = 0;
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[i]) {
                temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }
    return list;
}


console.log(bubble([34, 12, 24, 9, 5]));



function advancedBubble(list: number[], ascending: boolean): number[] {
    let temp: number = 0;
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (ascending) {
                if (list[j] < list[i]) {
                    temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
            }
            else {
                if (list[j] > list[i]) {
                    temp = list[j];
                    list[j] = list[i];
                    list[i] = temp;
                }
            }

        }
    }
    return list;
}

console.log(advancedBubble([34, 12, 24, 9, 5], false));




