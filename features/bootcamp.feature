Feature: Bootcamp E2E

    Scenario: User open newgg website and close promo banner if it appears
        Given I navigate to the newgg page
        When I see promo banner
        Then I close promo banner

