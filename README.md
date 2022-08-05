# Notes on Completed Technical Assessment

- Technologies Used for the First Time
    - Cypress
    - Angular Material UI

- Implemented
    - Transaction Endpoints and Injectable Service
    - Cart Dropdown Purchase Button
    - Cheese Info Dialog (Click on Cheese Image)
    - Recent Purchases Dropdown
    - Full Purchase History Dialog w/ Expandable Grid
    - Recent Purchases Cypress Tests

- Improvements
    - UX Improvements
        - Restaurant Button now has Hover and Active States
        - Improved Hover State of Cheese Cards
        - More Clear that the Cheese Card can open a dialog (Could probs be improved more)
    - Responsiveness
        - Cart Dropdown now works on lower resolutions

- What I would do if I had more time
    - Recent Purchases Dropdown: Have the dropdown closed when 'View Purchase History' Button is clicked
    - Purchase Dialog:
        - Make it more Mobile Friendly
        - Make Dialog have a fixed size so its not jankily resizing when a row is expanded
        - Make the Purchase Grid itself its own Component to reduce Code Duplication
    - Make CSS Styles more Modular and Globalized: 
        - I.e. Make a Dedicated CSS File for the Restaurant Styles
        - Also, make it easier to directly applied styling to make it easier to mix and match styles as needed
    - More Error Handling and State Loading

- Duration 
    - About 15 Hours
    - Time spent more focused on leisurely learning than getting the Assessment done as quickly as possible
    - Frontend became a timesink at times due to being new to Angular Material UI and being less experience w/ Frontend Work. Namely,
        - Took me a bit to figure out the Expandable Purchase Grid, Pagination and Sorting Situation
        - Fixing weird UI Issues like the Cart Menu disappearing completely at lower Screen Widths


# Welcome to Patient Zero's Cheeseria Coding Challenge (For Juniors)

## Overview

Help us complete our Cheese shopping cart.<br />
So we can start selling cheese to the delight of our customers, we will need you to implement a few more desired features. As you can see, there is already some code to get you started. The backend server is using .NET 5.0 and the frontend client is using Angular 10. See the ***Important Scripts*** section below to get you started.<br />
We recommend you fork this repository under your own username.

Once these features are completed, you will also make sure the functionality you implemented is covered by automated tests.

Following are the features you will need to complete

1. When clicking on a Cheese card, open a [Dialog](https://material.angular.io/components/dialog/examples) that contains all the details of the card, including the item's **description**.

2. Add a **Purchase** button to the Cart (In the sliding view that opens when you click the 'View Cart' button). Clicking on the **Purchase** button will send all items in the cart to the server (backend) and store them for later use (You are not required to use a Database in this exercise, but you may do so if you wish).

3. Show all recently purchased items when clicking on the "Recent Purchases" button on the top left of the page. You may choose to display those items in a Drawer, a Dialog or any other control you see fit. Note that the recent purchased items **must** be retrieved from the server.

4. Add a UI automation test that performs the Purchase action you implemented as part of Feature #2. For this test case you will add two separate items to the cart and click on the **Purchase** button you have added as part of Feature #2.
For this exercise we will be using the Cypress.io tool-set. You will find code to get you started in the 'e2e' folder.
***Note: You are free to add any selectors to your client code which may be required by the e2e tests.***

Once done, please notify us of your repository details and make sure it is publicly accessible. As part of your assessment we will confirm that all features were implemented as instructed.

## Important Scripts

This project was tested with node v16.15.0 and npm v8.5.5.

In the client project directory, you can run:

### `npm install`

Installs package dependencies (using node v16.15.0)

### `npm start`

Builds and runs the app in the development mode.\
The browser will be ready under [http://localhost:4200](http://localhost:4200).

To run the server backend, see instructions in backend/README.md.

### Cypress.io

You will open the e2e folder, then run following commands to get started

```bash
npm install
npm test
```

### Helpful links

[React Material UI](https://material-ui.com/getting-started/usage/)