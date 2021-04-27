# NoColJs

Multi object orbiting simulation converging towards collision free trajectories.

This is a JavaScript version of Jean Tampons wonderful [NoCol](https://github.com/johnBuffer/NoCol) project (written in C++).


## User Interaction

* <kbd>E</kbd> toggle v-sync. V-sync limits the number of frames per second, so disabling it speeds up the simulation.
* <kbd>S</kbd> single step animation.
* <kbd>space</kbd> toggle animation
* <kbd>R</kbd> reset the view.
* <kbd>mouse-click</kbd> to spawn a new object.

On a Mac you can pan and scroll around. Not sure if it behaves the same way on Windows and Linux.

## Setup

Requirement: NodeJS v10+

```sh
git clone git@github.com:mablay/NoColJS.git
cd NoColJS
npm install
```

## Run

```sh
npm start
```
