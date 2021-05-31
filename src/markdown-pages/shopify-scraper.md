---
title: "Inventory Clerk"
date: "2021-05-13"
featured: true
codeURL: "https://github.com/gif007/store-scraper"
liveURL: ""
---
This **web scraper**, coded in **Python**, allows the user to copy the details of all products on an e-commerce website into a simple file based database in **JSON** along with an accompanying directory of full resolution product images.

#### Libraries

Using the **requests** module, the application is able to retrieve all of the necessary data from the web using the **HTTP** protocol which it can then parse using the **BeautifulSoup** package to select the proper data nodes.  Results from the **requests** module are also used to **persist** image files to the disk.

The **JSON** package allows for configuration options to be kept separate and **readable** using one of the industry's most common and well understood **data formats**.  The user customizes configuration parameters as well as views their results in the same easy to read format.

#### Optimizations

The **JSON** format allows for each product item on the website to have its details represented by **key-value pairs** which are grouped together by product name.  **Traversal** of this array of objects allows the user to then convert the data structure into any other format, including **SQL and NoSQL databases** to further persist their collection of product details.

By use of **Python's** built-in **statistics** module an additional function has been included in the application which can calculate the mean cost of a product, providing an example of how the application could be **extended**.