Feature: Bootcamp E2E

    Background: User open newgg website and close promo banner if it appears
        Given I navigate to the newegg page
        When I see promo banner
        Then I close promo banner

    Scenario: Search bar
        Given Enter the word "Windows" in the search bar top middle
        When Click the search
        Then At least one item appears

    Scenario: Internet shop logo button
        Given Open Today's Best Deals tab
        When Click on the Internet shop logo top right corner
        Then I am on the main page