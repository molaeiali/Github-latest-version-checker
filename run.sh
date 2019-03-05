#!/bin/bash

while read url; do
    node ./checker.js $url
done <urls
