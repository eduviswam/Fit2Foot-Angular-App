# Fit2Foot
## _Web application to list products and implements add to cart functionality_

Fit2Foot Application is a website which list the shoe products and provides the add to cart feature.

## Features

- View different products
- View product details
- Add/Delete Cart Functionality
- Recently view products list

## Tech

Fit2Foot uses a number of open source projects to work properly:

- [Angular] - HTML enhanced for web apps!
- [Bootstrap5] - Used for  all products related UI
- [PrimeNg] - Used for Recently viewed products UI

## Development

The project architecture is as given below:
- AppModule - The root module

- Product Module - This module contains product related components 

- Services
  - API Serive for api call
  - Cart Service to handle cart functionality
  - Message service to handle messaging across application

- Components
     - ProductList Component - To display products list
     - ProductDetails Component - To display products details
     - Cart Component -  To display added products in Cart
     - Header Component - Header navigation bar which can be used to add additional features like Log in, Sign Out etc

- Shared/Reusable Components
  - Message Component to handle message
  - PageNotFound Component to display page not found
  - Carousel Component to handle recently view products which can be re-used
    across applications

- Routing
    - App module routing - Basic routing paths
    - Products Routing - Product related routing paths


## Projects steps
- Set up your environment.
- Create a new angular application.
  - Create a required Modules.
  - Create a required Components.
  - Create a required Services.
  - Design UI 
  - Make changes to the application.
  - Add application styles.
  - Change the application logics.
  - Implement routing 
  - Final code review.

  ## Notes
   - Recent;y viewed items will appear when there is a history only which means you should select alleast 3 items to view the history
 

## License
MIT
**Free Software, Hell Yeah!**
