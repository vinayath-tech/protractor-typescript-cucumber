Feature: Order a dress
    As a customer
    I want to be able to order a dress
    So that I can buy the dress from the site

    Scenario: order a dress for shipping
     Given I navigate to homepage
     When I choose a dress to buy
     Then I should be able to pay for the dress
     And I should get an order confirmation message
     