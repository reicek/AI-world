[![Build Status](https://travis-ci.org/reicek/AI-world.svg?branch=master)](https://travis-ci.org/reicek/AI-world) [![GitHub version](https://badge.fury.io/gh/reicek%2FAI-world.svg)](https://badge.fury.io/gh/reicek%2FAI-world) [![express](https://david-dm.org/reicek/AI-world/status.svg)](https://david-dm.org/reicek/AI-world) [![Maintainability](https://api.codeclimate.com/v1/badges/46e34004ffc45c219347/maintainability)](https://codeclimate.com/github/reicek/AI-world/maintainability) [![issues](https://img.shields.io/github/issues/reicek/AI-world.svg)](https://github.com/reicek/AI-world/issues) [![license](https://img.shields.io/github/license/reicek/AI-world.svg)](https://github.com/reicek/AI-world/blob/master/LICENSE) [![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.me/CesarAnton)

# AI World

### Javascript Neural Network, Perceptron architecture.

###### by César Antón Dorantes <a href="https://twitter.com/reicek" target="_blank">@reicek</a>

### [DEMO](https://reicek.github.io/AI-world/)

---

Life simulation that demonstrates neural networks based on the [perceptron](https://en.wikipedia.org/wiki/Perceptron) algorithm adjusting to a dynamic scenario.

Creatures continously learn how to move as a group while adjusting to changes.

When fully developed, creatures reproduce when close. After reproduction, both parents lose half their mass and have an offspring of a quarter of the initial parents mass. Chances of breeding increase or decrease in response to the number of living creatures.

Creatures age on each cycle, aging translates into a loss of maximum possible speed. Creatures die when they lose all mobility.

The simulation attempts to keep creatures alive for as long as possible, without reaching overall overpopulation or full extinction.

### Install

Run from console:

```
npm install
```

### Development

Run from console:

```
npm start
```

Open [localhost:8080](http://localhost:8080/) on a browser tab.

Install browser extension to use [Live Reload](http://livereload.com/).

---

_Inpired on [the demo](https://github.com/cazala/synaptic/tree/gh-pages/scripts/homepage) available at the [Synaptic's home page](http://caza.la/synaptic)._
