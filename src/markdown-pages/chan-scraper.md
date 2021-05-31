---
title: "Chan Scraper"
date: "2020-03-15"
featured: false
codeURL: "https://github.com/gif007/chan-scraper"
liveURL: ""
---
This **web scraper**, coded in **Python**, allows the user to download all images from a given **URL** endpoint and track the **URL** over time to watch for new images being uploaded to the website.

#### Libraries

Using the **requests** module, the application is able to retrieve all of the necessary data from the web using the **HTTP** protocol which it can then parse using the **BeautifulSoup** package to select the proper data nodes.  Results from the **requests** module are also used to persist image files to the disk.

The **JSON** package allows for configuration options to be kept separate and **readable** using one of the industry's most common and well understood **data formats**.

Parsing arguments off of the **CLI** is accomplished with **Python's** built-in **argparse** module, allowing the program parameters to be supplied only once when the command is called rather than throughout the runtime.

#### Optimizations

This project uses **Python's** built-in **shelve** module, which allows for primitive objects to be **serialized** under the hood by the **pickle** module before being written to a **DBM** database.

This allows the program to keep track of previously seen **URLs** as well as which images have already been successfully downloaded.  The application can then use the **subprocess** module to call itself with each tracked **URL** sequentially to check for new images.