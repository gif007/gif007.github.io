---
title: "Local Library"
date: "2020-11-15"
featured: false
codeURL: "https://github.com/gif007/locallibrary"
liveURL: ""
---
Built using the **Django** framework, this website hosts a virtual library where users can use the site's **web API** to view information about books and authors as well as a list of their own currently borrowed books.  Library staff can view all users' borrowed books and renew borrowed status if needed.

Using **Django's** built-in authentication and form validation tools, users sign in using personal accounts which may or may not be authorized to access librarian-only parts of the website.  The **UI/UX** is further optimized using **sass** and best practices.


The **Django-Rest-API** provides all of the functionality needed to offer **API** endpoints where users can programmatically access book and author data in a variety of common **data formats** including the popular **JSON**.  The interface is also browsable, containing **hyperlinked** relationships between models at the **serializer** level.