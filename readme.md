# Word Search

## Inspiration/Resources

[Word search by ED](https://ed.studio/made-post/algebraic-wordsearch)  
[Crossword by Adrian Roworth](https://codepen.io/adrianroworth/pen/OpeyZq)  [Sitepoint](https://www.sitepoint.com/how-built-pure-css-crossword-puzzle/)  
[The Word Search](https://thewordsearch.com/puzzle/46/star-trek/)  
[Code Guppy](https://codeguppy.com/site/tutorials/word-search.html)  
[Timer, scoreboard](https://lovattspuzzles.com/online-puzzles-competitions/play-daily-word-search-puzzle-online/)  
[My Word Search](https://mywordsearch.com/)  
[Maven Spun](https://mavenspun.com/javascript/word-search/01-create-a-wordsearch-game-board.htm)  
[More about word searches!](https://en.wikipedia.org/wiki/Word_search)  

## Planning

Some thoughts on what I would like to do, prior to starting.
I'll be using HTML, CSS, & vanilla JavaScript/ES6.


### Essential

* Generate a grid of x by x cells
* populate the grid with words from the word list
* fill in the rest of the cells with random letters
* a list of words with checkboxes tells the user what to search for
* a canvas element goes over the top of the grid
* the user can draw over the grid to mark words they have found [Example](https://stackoverflow.com/questions/30015951/create-line-in-canvas-word-search-game)
* the pen is transparent and a bright colour
* house plant-themed design

### Nice to have

* the user can submit once they find all the words and 'win a prize'
* the cursor is a pencil or similar or a littLE HAND!?
* pick from a selection of highlighter colours
* hovering over the word name shows a small picture attached to the cursor 
* hovering over the word name goes to a link about the word
* quick poll - do you search by row/column or scan at random?
* either store this data for results (complex) or respond to the users answer (easier)
* a secret extra word - submit for validation for super special prize
* good if the grid can randomise 
* cross off a word when it has been found

### Quick notes

* I've done some of these elements before - generating a grid with the etchasketch and using the canvas with superdraw.
* Z-index for layering the canvas and grid
* [Get mouse position](https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas) 
* pop up modal for 'prizes'
* prizes are something ridiculous like a stick figure drawing, dad joke, or a random gif.

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

Create the grid.   
Go back to the pixel sketchpad project and take a look at the code to remember how I did it.  
I've considered just hard coding the actual wordsearch and save it as a kind of prototype, before coding the script to automatically generate it. Then I realised I would have to hand code 100 cells and decided that is not in the spirit of what I'm trying to do here 😅  

So I need to write a function thts will create cells in the form of a span tag with a letter inside.  
Each 'cell' (span tag) should have a class of cell and an id of cell000 (number from 001 to 100).  
Create a cell, give it a common class, give it a unique ID (number from 1 to 100), append it to the grid.  

**Problem 1** - Cell is only appending to the grid once. Even though this part of the code is inside the for loop which counts from 0 to 100.  
The problem was in the nested for loop that was supposed to be handing out unique IDs. I actually realised I didn't need this as I was already counting to *value* (100) so I used the counter variable in the for loop to provide the id. Deleting that part of the code fixed the problem 🎶but I don't know why 🎶.

**Problem 2** - Span is an inline element. So when the cells are now appending to the grid, they continue horizontally instead of wrapping. 
[!](./screenshots/screenshot-p2.png)

The grid is set to `grid-template: repeat(10, 10%)/repeat(10,10%);`.  
I changed span to div (from an inline element to a block element) and the divs then fill the width of the container but stretch it out vertically. I want the create elements, whether they are spans or divs, to be bound by the size of their container.  


