# Word Search

## Inspiration/Resources

[Word search by ED](https://ed.studio/made-post/algebraic-wordsearch) 
[Crossword by Adrian Roworth](https://codepen.io/adrianroworth/pen/OpeyZq)

## Planning

Some thoughts on what I would like to do, prior to starting.
I'll be using HTML, CSS, & vanilla JavaScript/ES6.


### Essential

* Generate a grid of x by x cells
* populate the grid with words from the word list
* fill in the rest of the cells with random letters
* a list of words with checkboxes tells the user what to search for
* a canvas element goes over the top of the grid
* the user can draw over the grid to mark words they have found
* the pen is transparent and a bright colour
* house plant-themed design

### Nice to have

* the user can submit once they find all the words and 'win a prize'
* the cursor is a pencil or similar
* pick from a selection of highlighter colours
* hovering over the word name shows a small picture attached to the cursor 
* hovering over the word name goes to a link about the word
* quick poll - do you search by row/column or scan at random?
* either store this data for results (complex) or respond to the users answer (easier)
* a secret extra word - submit for validation for super special prize
* good if the grid can randomise 

### Quick notes

* I've done some of these elements before - generating a grid with the etchasketch and using the canvas with superdraw.
* Z-index for layering the canvas and grid
* Get mouse position
* pop up modal for 'prizes'
* obviously the prizes are something ridiculous like a stick figure drawing, dad joke, or a random gif.

### Words

Plants:
1. arrowhead
2. calathea
3. peperomiodes
4. ficus
5. philodendron
6. horse head
7. pothos
8. monstera
9. peace lily
10. begonia


## Workflow

### Template/Design/Wireframe

Create the grid. 
Go back to the pixel sketchpad project and take a look at the code to remember how I did it. 
I'll hard code the actual wordsearch and save it as a kind of prototype, before coding the script to automatically generate it. 