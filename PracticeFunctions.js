function attemptCombine (a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return "The sum is " + (a+b) +"."
    }
    if (typeof a === "string" && typeof b === "string") {
        return "These are both strings and cannot be added."
    }
    if ((!isNaN(a) && isNaN(b)) || (!isNaN(b) && isNaN(a))) {
        return "Sorry I cannot add those things together."
    }
    else {
        return "I can’t do anything with this."
    }
}
/*console.log(attemptCombine(1,3))
console.log(attemptCombine("test","test"))
console.log(attemptCombine(1,"test"))
var array1 = ["1",3,'x']
var array2 = ["2",2,'y']
console.log(attemptCombine(array1,array2))*/

function wordShift(a) {
    var strArr = a.split(" ")
    var retArr = []
    var retString = ""
    var last = strArr[strArr.length - 1]
    last = last.charAt(0)

    for (i = 0; i < strArr.length; i++) {

            if (i == 0) {
                var first = strArr[0]
                retArr.push( last + first.substring(1))
                console.log(retArr)
            } else {
                var curr  = strArr[i-1]

                retArr.push( curr.charAt(0) + strArr[i].substring(1))
            }



        }

    for (i = 0; i < retArr.length; i++) {
        if (i == 0) {
            retString = retArr[i]
        } else {
            retString = retString + " " + retArr[i]
        }
    }
    return retString


}
//console.log(wordShift("The fox jumped over the hound"))
