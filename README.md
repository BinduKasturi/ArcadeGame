# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
----------------------
## I have made the below changes to finish the Project

## Downloading the Project
+ I have downloaded the project skeleton from github using the link provided by udacity and extracted the zip file.
+ I have gone through the project code given and tried to run it. But unable to get anything on the screen and understood that the code need to be changed.
+ I have created an array allEnemies[] and a class for player named as Hero. And also an object player was created for Hero class.
## Functions for Hero class
+ I have defined three functions update(),render() and handleInput() for Hero class.
+ render() function will place the sprite on the canvas.
+ update() function will updates the score and lifeline.
+ handleInput() function will take care of user inputs. It specifies the conditions to not cross the boundary.
+ Four input indications are already given. So, I defined the conditions and calculations for user input.
+ By clicking on left arrow player will move towards left side by 101 units on x-axis. When the player reaches left most area, he can not move forward.
+ By clicking on right arrow player will move towards right side by 101 units on x-axis. When the player reaches right most area, he can not move forward.
+ By clicking on up arrow player will move towards up side by 101 units on x-axis. When the player reaches top most area, he can not move forward.
+ By clicking on down arrow player will move towards down side by 101 units on x-axis. When the player reaches down most area, he can not move forward.
+ If the player touches water area then he will automatically comes to initial position and score will be incremented by 1.
## Functions for Enemy class
+ In the same way, I have defined two functions update() and render() for Enemy class.
+ render() function will place the enemy sprite on the canvas and it was already defined.
+ update() function will generate a random speed for all three enemies and updates the speed.
+ In case if player touches enemy then dangerCount will be incremented by 1 and player will come to initial position.
+ life line will be reduced for every increment in dangerCount by 2.
+ score and life line is an addon for this project.
+ when the life line is over a message will be displayed. User can play the game again by clicking on the PlayAgain button. Window will be refreshed if player clicks on PlayAgain button.  
+ User can play the game by opening `index.html` file in browser. So please open `index.html` file in chrome.
