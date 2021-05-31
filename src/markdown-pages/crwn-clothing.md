---
title: "Crwn Clothing"
date: "2021-05-23"
featured: true
codeURL: "https://github.com/gif007/crwn-clothing"
liveURL: "https://crwn-clothing-ns.herokuapp.com/"
---
Created using **React.js**, this web application represents an e-commerce website where users can sign in using their Google account or a created profile, add items to a shopping cart from various catagories of clothing and checkout their cart using a test credit card.

#### Libraries
With **React.js** in the front-end, this application makes use of **Redux** for state management along with **Redux-Sagas** for asynchronous operations, and **Redux-Persist** for local caching.

Performance optimizations include the use of **Reselect** for memoization, **Compression** on the back-end to reduce network overhead as well as **React Lazy** for code-splitting.

On the **Express** back-end a POST endpoint is established to forward requests from the checkout page to the **Stripe** server API.  On the front-end, these requests are formed and sent using **Axios**.

All of the CSS style classes for this application are generated through the **Styled-Components** library in order to group styles with the components that need them.

#### Services
Authentication is handled by the **Firebase** auth API while Firestore provides the data persistence.

A **Stripe** test account is set up to handle POS requests coming from the application.

#### Standards
This web application was made to be compliant with **Progressive Web Application** standards through the use of a **Manifest** and a **Service-Worker** as well as **HTTPS** enforcement on the **Express** server.

**Media Queries** check against a common size break-point to ensure that the application can be delivered to mobile devices according to **Responsive Web Design** principles. 