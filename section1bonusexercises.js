// Write a function called double which takes in an array of numbers and returns a
// ...new array after doubling every item in that array. double([1,2,3]) -> [2,4,6]

function double(array) {
  var returnArray;
  for (index = 0; index < a.length; ++index) {
    returnArray[0] = array[0]*2;
  }
  return returnArray;
}

// Imperative Approach

function double (arr) {
  let results = []
  for (let i = 0; i < arr.length; i++){
    results.push(arr[i] * 2)
  }
  return results
}

// Declarative Approach
function double (arr) {
  return arr.map((item) => item * 2)
}

// Write a function called add which takes in an array and returns the result of
// ...adding up every item in the array. add([1,2,3]) -> 6

function add(array) {
  var sum = 0;
  for (index = 0; index < a.length; ++index) {
    sum+=array[index];
  }
  return sum;
}

// Imperative Approach

function add (arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++){
    result += arr[i]
  }
  return result
}

// Declarative Approach

function add (arr) {
  return arr.reduce((prev, current) => prev + current, 0)
}

// Using jQuery (or vanilla JavaScript), add a click event handler to the element
// ...which has an id of btn. When clicked, toggle (add or remove) the highlight
// ...class as well as change the text to Add Highlight or Remove Highlight depending on the current state of the element.

$("btn").click(function(){
        if(this.text == 'Add Highlight') this.text = 'Remove Highlight'
        else this.text == 'Add Highlight';
        this.highlight = !this.hightlight
    });

// Imperative Approach

$("#btn").click(function() {
  $(this).toggleClass("highlight")
  $(this).text() === 'Add Highlight'
    ? $(this).text('Remove Highlight')
    : $(this).text('Add Highlight')
})

// Declarative Approach

<Btn
  onToggleHighlight={this.handleToggleHighlight}
  highlight={this.state.highlight}>
    {this.state.buttonText}
</Btn>
