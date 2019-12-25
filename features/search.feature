Feature: Search for a dress
    As a customer
    I should be able to search for a dress
    So that I can find my favourite cloth with less browsing time

    Scenario: Search for available dress
     Given I navigate to homepage
     When I search for "Summer dress"
     Then I should get the following dress:
       | Product                     |
       | Printed Summer Dress        |
       | Printed Summer Dress        |
       | Printed Chiffon Dress       |
       | Faded Short Sleeve T-shirts |