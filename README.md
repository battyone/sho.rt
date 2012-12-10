sho.rt
======

A lightweight URL shortener. Processes requests to shorten urls and returns
a JSON string containing a code and a short message

### Dependencies
* Node.js v0.8.15
* Node Package Manager \(npm\) 1.1.66
* Express.io v3.0.3
* Redis.io v0.8.2
* jQuery v1.8.3 \[included\]

## TODO
* ~~Finish writing the server code~~
* Prepare pages to be served with HTTP Status Codes for responses other than 200
* ~~Make async POST requests~~
* ~~Handle POST requests~~
* ~~Write the actual shortener~~
* ~~Log shortened URLs to redis~~
* ~~Redirect shortened URLs~~

## Response Codes
The JSON object contains the keys mcd \(message code\) and msg \(msg\). Samples:
* 1: host/sHorTurL
* 2: Invalid Protocol \(for now, only HTTP is allowed\)
* 3: URL too short \(set minUrlLength to specify this\)

## Structure
* Pages to be served with status codes go under gen/
* The root directory \("/"\) points to ./www/ 
