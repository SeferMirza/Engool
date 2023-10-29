# Engool

This is an English learning app.

## Aim and Motivation

It is a job that I plan to develop in order to eliminate the deficiency in my
vocabulary pool in English and to practice it, and I started with the
motivation to achieve many goals at once by doing this with my job.

## Project

It is a project with a server developed with `.Net` and a mobile app developed
with `React Native`. The [Do](https://do.mouseless.codes) framework library was
also used for the server.

### Server

The purpose on the server side is only to transmit the words and sentences in
the database to the client. No manipulation of the data in the database is
allowed. The reason for keeping the words in the database is to reduce the
size of the interface applications.

### Mobile App

The purpose of the mobile app is to show the desired word and sentence from the
server to the user and to ensure that the word or sentence that the user has
memorized and studied is kept in the local store and that the same word or
sentence is not shown to the user again.

The reason for using local store is not to tire the server with the word and
sentence records memorized by different users.
