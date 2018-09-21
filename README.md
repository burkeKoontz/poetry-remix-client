# Poetry Remix
![A look at the application](https://user-images.githubusercontent.com/39100656/45902107-42e95000-bd9a-11e8-99e7-6a84edea6e1d.gif)


## Introduction
"Immature poets imitate; mature poets steal" - T.S. Eliot</p><p className="spaced centered"> To become a mature poet, a good thief, a bit of imitation is in order. 
 Shakespeare, Whitman, Dickinson, Wordworth...all of these great authors' poems and more can be remixed on this application, as if their words were fridge magnets on your kitchen refrigerator. 
 This application uses [PoetryDB](https://github.com/thundercomb/poetrydb) to search for public domain poetry.

## See for yourself
Check out the application [here](https://poetry-remix-client.herokuapp.com/).

![A look at the application](https://user-images.githubusercontent.com/39100656/45892094-04449d00-bd7c-11e8-9e56-2a5b75898f10.PNG)

![Another look at the application](https://user-images.githubusercontent.com/39100656/45898630-5ba03880-bd8f-11e8-84ed-45ac59e27209.PNG)

## Key Parts of Project
The most interesting parts of this project are located in the DragAndDrop component and the Magnet component. Each poem chosen to remix is split up into words that are dynamically placed on a drag and drop board. Line breaks in the original poem are maintained.

The server side code for this project lives [here](https://github.com/burkeKoontz/poetry-remix-server).

## Tech Stack
### MERN
* MongoDB
* Express.js
* React
* Node.js

### Other dependencies
* react-dnd
* redux
* redux-form
* react-router
* react-redux

## License
[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)
