# Socializer

## Description

Socializer is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list built with MongoDB, Express.js, and Mongoose. 

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [Technologies](#technologies)
- [Test](#test)
- [Credits](#credits)
- [Badges](#badges)
- [Contribute](#how-to-contribute)
- [License](#license)

## Usage


## Installation

To run via local environment:
- Clone repository
- Run `npm i` to install dependencies
- Run `npm run start`
- When the server is started, the Mongoose models are synched to the MongoDB database.
- To create seed data and test the routes use [Insomnia](https://insomnia.rest/)

## Technologies
- MongoDB
- Mongoose
- Insomnia
- Express.js
- Node.js
- Moment.js

## Test

Routes to test:
- Users
    - Get all users `/api/users`
    - Get user by id `/api/users/:userId`
    - Create new user `/api/users/` 
    - Update user by id `/api/users/:userId`
    - Delete user by id `/api/users/:userId`

- Thoughts
    - Get all thoughts `/api/thoughts`
    - Get thought by id `/api/thoughts/:thoughtID`
    - Create new thought `/api/thoughts`
    - Update thought by id `/api/thoughts/:thoughtID`
    - Delete thought by id `/api/thoughts/:thoughtID`

- Reactions
    - Create reaction `/api/thoughts/:thoughtId/reactions`
    - Delete reaction `/api/thoughts/thoughtID/reactions/reactionId`

- Friends
    - Add friend `/api/users/:userId/friends/:friendId`
    - Delete friend `/api/users/:userId/friends/:friendId`
    * Note: friend id is another users id

## Badges

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![Npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://https://npmjs.com/)
[![macOS](https://svgshare.com/i/ZjP.svg)](https://svgshare.com/i/ZjP.svg)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://bitbucket.org/lbesson/ansi-colors)
[![GitHub license](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

## Credits 
Debug: Salissa Github: https://github.com/salissa4

## License

MIT License

Copyright (c) [2022] [DBEdelson]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
