---
title: "Weather Buddy"
date: "2021-05-18"
featured: true
codeURL: "https://github.com/gif007/py-weather-app"
liveURL: ""
---
Written in **Python**, this **web scraper** allows the user to select a region and have the latest 24 hour weather forecast displayed in a table along with a toggle to change between Celsius and Fahrenheit.

#### Libraries

Upon launching the script, a **graphical user interface** is created using the **tkinter** package which provides the user with all of the drop-down lists, buttons and display areas that they need to navigate the simple interface.

The **JSON** package allows for configuration options to be kept separate and **readable** using one of the industry's most common and well understood **data formats**.

Using the **requests** module, the application is able to retrieve all of the necessary data from the web using the **HTTP** protocol which it can then parse using the **BeautifulSoup** package to select the proper data nodes.

#### Optimizations

The first time that weather data for a particular region is loaded into memory, its contents are **memoized** using a **hash table** so that on subsequent user requests the data can be retrieved from this **cache** to speed up processing.  Should the user wish to clear the **cache** without exiting the application, a reset button is provided.

All of the data on regions is kept in a separate **JSON** document which makes it very simple to modify existing region parameters as well as add new entries which will be **dynamically** added to the list of available regions.