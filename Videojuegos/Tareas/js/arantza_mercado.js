/*
 * Example functions to practice JavaScript
 *
 * Arantza Monique Mercado Moreno
 * 2026-02-25
 */

"use strict";

function firstNonRepeating(str){
    // Create an empty array to store the candidates.
    const candidates = [];
    for (let i = 0; i < str.length; i++){
        // Compare against the candidates
        let found = false;
        for (let cand of candidates){
            if (cand.char == str[i]){
                cand.count += 1;
                found = true;
            }
        }
        if (!found){
            candidates.push({char: str[i], count: 1});
        }
    }

    // Look for the char that appeared only once.
    for(let index in candidates){
        if (candidates[index].count == 1){
            return candidates[index].char;
        }
    }

}

function bubbleSort(num){
    for (let i = 1; i < num.length; i++){
        let flag = true;
        for (let j = 0; j < num.length - 1; j++){
            flag = false;
            // Compare each element of the array.
            if (num[j] > num[j+1]){
                [num[j], num[j+1]] = [num[j+1], num[j]];
                flag = true;
            }
        }
    }
    return num;
    
}

function invertArray(num){
    // Create an empty array to store the numbers.
    const nuevo = [];
    for (let i = num.length - 1; i >= 0; i--){
        nuevo.push(num[i]);
    }
    return nuevo;
}

function invertArrayInplace(num){
    // Changes the numbers in the same array.
    for (let i = 0; i < num.length/2; i++){
        // Changes places.
        [num[i], num[num.length - 1 - i]] = [num[num.length - 1 - i], num[i]];
    }
    return num;
}

function capitalize(str){
    let n = "";
    if (str == ""){
        return "";
    }
    else{
    n += (str[0].toUpperCase());    // Converts to a capital letter.
    for (let i = 1; i < str.length; i++){

        if (str[i - 1] == " "){
            n += str[i].toUpperCase();
        }
        else{
            n += str[i];
        }

    }
    }
    return n;
}

function mcd(a, b){
    // Euclid's algorithm
    while (b != 0){
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function hackerSpeak(str){
    let hacker = "";
    for (let i = 0; i < str.length; i++){
        // Changes the letters for numbers.
        if (str[i] == "a"){
            hacker += 4;
        }
        else if (str[i] == "e"){
            hacker += 3;
        }
        else if (str[i] == "i"){
            hacker += 1;
        }
        else if (str[i] == "o"){
            hacker += 0;
        }
        else if (str[i] == "s"){
            hacker += 5;
        }
        else {
            hacker += str[i];
        }
    }
    return hacker;
}

function factorize(num){
    // Create an empty array to store the numbers.
    const factors = [];
    for (let i = 1; i <= num; i++){
        if (num % i == 0){
            factors.push(i)
        }
    }
    return factors;
}

function deduplicate(array){
    // Create an empty array to store the numbers.
    const list = [];
    for (let i = 0; i < array.length; i++){
        let found = false;
        for (let j = 0; j < i; j++){
            if (array[i] == array[j]){
                found = true;
            }
        }
        if (found == false){
            list.push(array[i]);
        }
    }
    return list;
}

function findShortestString(str){
    if (str.length == 0){
        return 0;
    }
    else{
        let len = str[0].length;
        for(let i = 0; i < str.length; i++){
            if (len > str[i].length){
                len = str[i].length
            }
        }
        return len; 
    }   
}

function isPalindrome(str){
    if (str.length == 0){
        return true;
    }
    else{
        for (let i = 0; i < str.length/2; i++){
            if (str[i] != str[str.length - 1 - i]){
                return false;
            }
        }
    }
    return true;
}

/* Another way of doing sortStrings.
function sortStrings(str){
    let list = bubbleSort(str);
    return list;
}*/

function sortStrings(str){
    // Copies the array.
    const list = [...str];
    for (let i = 1; i < list.length; i++){
        for (let j = 0; j < list.length - 1; j++){
            if (list[j] > list[j+1]){
                [list[j], list[j+1]] = [list[j+1], list[j]];    // Changes places.
            }
        }
    }
    return list;
}

function stats(list){
    if (list.length === 0){
        return [0, 0];
    }
    let sum = 0;
    for(let i = 0; i < list.length; i++){
        sum = sum + list[i];
    }

    // Create an empty array to store the candidates.
    const candidates = [];
    for (let i = 0; i < list.length; i++){
        // Compare against the candidates
        let found = false;
        for (let cand of candidates){
            if (cand.char == list[i]){
                cand.count += 1;
                found = true;
            }

        }
        if (!found){
            candidates.push({char: list[i], count: 1});
        }
    }

    let max = 0;
    let trend = list[0];
    for (let i = 0; i < candidates.length; i++){
        if (candidates[i].count > max){
            max = candidates[i].count;
            trend = candidates[i].char;
        }
    }
    return [sum/list.length, trend];
}

function popularString(str){
    if (str.length == 0){
        return "";
    }

    // Create an empty array to store the candidates.
    const candidates = [];
    for (let i = 0; i < str.length; i++){
        // Compare against the candidates
        let found = false;
        for (let cand of candidates){
            if (cand.char == str[i]){
                cand.count += 1;
                found = true;
            }

        }
        if (!found){
            candidates.push({char: str[i], count: 1});
        }
    }

    let max = 0;
    let trend = str[0];
    for (let i = 0; i < candidates.length; i++){
        if (candidates[i].count > max){
            max = candidates[i].count;
            trend = candidates[i].char;
        }
    }
    return trend;
}

function isPowerOf2(num){
    if (num <= 0){
        return false;
    }

    while (num % 2 == 0){
        num = num/2;
    }

    if (num == 1){
        return true;
    }
    else{
        return false;
    }
}

function sortDescending(list){
    // Copies the array.
    const desc = [...list];
    for (let i = 1; i < desc.length; i++){
        for (let j = 0; j < desc.length - 1; j++){
            if (desc[j] < desc[j+1]){
                // Changes places.
                [desc[j], desc[j+1]] = [desc[j+1], desc[j]];
            }
        }
    }
    return desc;
}

export {
    firstNonRepeating,
    bubbleSort,
    invertArray,
    invertArrayInplace,
    capitalize,
    mcd,
    hackerSpeak,
    factorize,
    deduplicate,
    findShortestString,
    isPalindrome,
    sortStrings,
    stats,
    popularString,
    isPowerOf2,
    sortDescending,
};
