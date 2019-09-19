Feature: Checkout a Dress
  As a Customer
  I want to buy a dress via website
  So that I don't want to go to a shop

  Scenario: Checkout Functionality
   Given I navigate to homepage
   And I add a dress to the cart
   When I proceed to checkout
   Then the dress shoud be successfully added to the cart
   And I should be navigated to the checkout page

  Scenario: Delete a product
   Given I navigate to homepage
   And I add a dress to the cart
   When I proceed to checkout
   And I remove the product
   Then the product should be successfully removed

