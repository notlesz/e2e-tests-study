const colors = {
  error: "rgb(220, 53, 69)",
};

describe("Feature: Image Registration", () => {
  describe("Submitting an image with invalid inputs", () => {
    it("Given I am on the image registration page", () => {
      cy.visit("/");
    });

    it(`When I enter "" in the title field`, () => {
      const titleInput = cy.get("#title");

      titleInput.focus().blur();
    });

    it(`Then I enter "" in the URL field`, () => {
      const inputUrl = cy.get("#imageUrl");

      inputUrl.focus().blur();
    });

    it("Then I click the submit button", () => {
      const submitButton = cy.get("#btnSubmit");

      submitButton.click();
    });

    it('Then I should see "Please type a title for the image" message above the title field', () => {
      const titleFeedback = cy.get("#titleFeedback");

      titleFeedback.should(
        "contain.text",
        "Please type a title for the image."
      );
    });

    it('And I should see "Please type a valid URL" message above the imageUrl field', () => {
      const urlFeedback = cy.get("#urlFeedback");

      urlFeedback.should("contain.text", "Please type a valid URL");
    });

    it("And I should see an exclamation icon in the title and URL fields", () => {
      const titleFeedback = cy.get("#titleFeedback");
      const urlFeedback = cy.get("#urlFeedback");

      titleFeedback.should(([element]) => {
        const styles = window.getComputedStyle(element);
        const computedBorder = styles.getPropertyValue("border-right-color");

        expect(computedBorder).to.equal(colors.error);
      });

      urlFeedback.should(([element]) => {
        const styles = window.getComputedStyle(element);
        const computedBorder = styles.getPropertyValue("border-right-color");

        expect(computedBorder).to.equal(colors.error);
      });
    });
  });
  describe("Submitting an image with valid inputs using enter key", () => {});
  describe("Submitting an image and updating the list", () => {});
  describe("Refreshing the page after submitting an image clicking in the submit button", () => {});
});
