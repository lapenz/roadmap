describe("Drag and Drop", () => {
    beforeEach(() => {
        cy.viewport(800, 680);
        cy.visit("http://localhost:3000/");
    });

    it("should move new lanes and bars to the board", () => {

        cy.get('#closeLaneTipBtn').trigger('click');

        movePiece("#addLane", '#newLane', 40);

        cy.get('#closeBarTipBtn').trigger('click');

        movePiece("#addBar", '#bar-container1', 40);
        movePiece("#addBar", '#bar-container2', 40);
        movePiece("#addBar", '#bar-container1', 40);

        movePiece("#addLane", '#newLane', 40);

        movePiece("#addBar", '#bar-container3', 40);
        movePiece("#addBar", '#bar-container4', 40);
        movePiece("#addBar", '#bar-container3', 40);
        movePiece("#addBar", '#bar-container3', 40);

        cy.get(':nth-child(1) > .card-header').should('contain', 'Lane 1');
        cy.get(':nth-child(2) > .card-header').should('contain', 'Lane 2');
        cy.get('#bar-container3 > .bar').eq(0).should('contain', 'Bar 4');
        cy.get('#bar-container3 > .bar').eq(1).should('contain', 'Bar 6');
    });
});

// helper functions

function movePiece(element, target, offset) {
    cy.get(target)
        .then($target => {
            let coords = $target[0].getBoundingClientRect();

            cy.get(element)
                .trigger('mousedown', {which: 1})
                .trigger('mousemove', {pageX: coords.x + offset, pageY: coords.y + offset, which: 1})
                .trigger('mouseup', {force: true})
        })


}

