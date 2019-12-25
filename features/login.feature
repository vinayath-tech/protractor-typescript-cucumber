Feature: Login into shop site
   As a customer
   I want to be able to login to application
   So that I can track history of products ordered

   Scenario: Login with valid credentials
    Given I navigate to homepage
    When I login to the site using below credentials
      | username     | password |
      | gok@test.com | Test123  |
    Then I should be able to successfully login