Feature: DoFixedDepoist

     Description: Used want to do fixed deposit from USDT to XLM

    Background: Login as a existing user
        Given I navigate to the vauld website
        When Enter the credentials and click on Sign in button
                | username | password |
                | ajfazt@gmail.com | Password12345 |
        And Choose Yes I trust the device option
        And Enter the OTP
        Then Navigate to dashboard page
    
    @Sanity
    Scenario: FixedDeposit using USDT crypto
        Given User in dashboard page
        When select the currency and enter amount
                | currancy | amount |
                | USDT     | 2.345 |
        Then verify payout amount and interest
        And  click on create fixed deposit button
        Then verify success message

    @Smoke
    Scenario: Loan using USDT crypto
        Given User navigate to wallet page
        When select the currency and move to loan section
                | currancy | 
                | USDT     | 
        Then enter amount and select collateral currency 
                | amount | currancy |
                | 12.23 | XLM |
        And  click on take loan button
        Then validate success message