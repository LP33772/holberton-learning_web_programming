<!DOCTYPE javascript>
let number = process.argv[2];
if (isNaN(number)) {
  score= "this is not a score";
} else if (score=(number >= 95)){
  score = "A+"

} else if (score=(number>=90)) {
   score="A"
} else if (score=(number>=85)) {
   score="B+"

} else if (score=(number>=80)) {
   score="B"

} else if (score=(number>=75)) {
   score="C+"

} else if (score=(number>=70)) {
   score="C"
 } else if (score=(number>=65)) {
    score="D+"
} else {
  score="D"
}
console.log(score)
