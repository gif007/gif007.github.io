---
title: "Project Manager"
date: "2021-01-28"
featured: false
codeURL: "https://github.com/gif007/projectmanager"
liveURL: ""
---
This web application, written entirely in **PHP**, represents project management software that allows users to create, view and modify their own individual projects while also being able to search for and view all projects that are persisted to the **database** by other users.

Backed by **MariaDB**, an **open source** fork of **MySQL**, the application uses the language's built-in **PDO** object to **dynamically** build **SQL statements** and execute them safely with **data sanitization and validation** techniques that are also built in to the core language.  Protected against **SQL injection**, the application ensures **data integrity** to the users project information.

This project also uses **password hashing** in its custom authentication and authorization code and **sass** to build the **UI/UX**.