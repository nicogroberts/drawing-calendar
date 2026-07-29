# Drawing Calendar Project

## Introduction

I plan on keeping this document brief as it's not a large project therefore doesn't require an elaborate explanation.
This is a personal project developed based on my own needs, serving as data visualization tool for my drawing progress.
While it's a public repo, there isn't much of a point other than showcasing work I created.
I have very bare bone plans to keep upkeep it and won't accept collaborations on it.
This project is in the final version I desire it to be.

## Overview

This project is designed as a calendar heatmap styled similar to GitHub's.
I used Vite to initialize the project and handle the dev server, and vanilla JavaScript as the main language.
It uses the File API for the user to upload a markdown file with this format:
Day One:
    - Subject: (drawing subject)
    - Time: HH:MM:SS

The uploaded file is parsed through to retrive the time of each day.
This is used to calculate total time and sessions, along with generate the heatmap on the calendar.
Each day's information is also displayed in a message log below the calendar.
Some interesting design choices were made as viewed from an outsider.
But as stated in the introduction this was designed completely for my use only.
That's the reason behind the format, why I hardcoded the start date and the assumption that I complete a single session daily.
My next project will be similar with changes to track my running progress and focus on OOP in design.