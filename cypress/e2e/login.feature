# Feature: Login Validation
# Scenario: LoginPage
# Given User is on the loginpage
# When User enters 'mercury' and 'mercury'
# Then Click on the login button
# And Verify title of the webpage should be 'Login: Mercury Tours'

@regression
Feature: Login Validation

Background:
Given User is on the loginpage
Scenario: Login with valid credentials
When I login as the following
|userName|password|
|mercury |mercury |
Then Click on the login button
And Verify title of the webpage should be 'Login: Mercury Tours'

Scenario: Verifying the page title
When I login as the following
|userName|password|
|mercury |mercury |
Then Click on the login button
And Verify title of the webpage should be 'Login: Mercury Tours'




