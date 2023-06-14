# Cows & Bulls

## Introduction
  The game of bulls and cows but with English (UK) words.

## How to Play

Host will select a word and give the number of alphabets in it.

Player has to guess the word by typing words with same number of alphabets.

As hints host will assign numbers to `C` and `B`.

Suppose host is thinking of `FISH`.
host will say, Guess 4

Player might guess `POTS`

When we compare `FISH` with `POTS`, pots has `S` in `FISH` but it's not at the correct place

So host will respond with
POTS C1B0

Next player might guess `CASE`
`CASE` has `S` and it's at the correct place

So host will respond with
CASE C0B1

Player has to keep guessing until they get the right word by analysing the hints.

Words with multiple occurrence of letters are not allowed. Proper names are not allowed.

## How this package works

//TODO