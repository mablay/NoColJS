# NoColJs

Multi object orbiting simulation converging towards collision free trajectories.

This is a JavaScript rewrite of Jean Tampons wonderful [NoCol](https://github.com/johnBuffer/NoCol) C++ project.


## User Interaction

* <kbd>E</kbd> toggle v-sync. V-sync limits the number of frames per second, so disabling it speeds up the simulation.
* <kbd>A</kbd> toggle the visibility of the traces.
* <kbd>space</kbd> toggle slow-motion.
* <kbd>R</kbd> reset the view.
* <kbd>mouse-click</kbd> to spawn a new object.

On a Mac you can pan and scroll around. Not sure if it behaves the same way on Windows and Linux.

## Setup

Requirement: NodeJS v10+

```sh
npm install
```

## Run

```sh
npm start
```
