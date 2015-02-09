describe('queenAttack', function() {
  it("is false if the coordinates are not horizontally, vertically, or diagnoally aligned with each other", function() {
    expect(queenAttack([1,1], [2,3])).to.equal(false);
  });

  it("is true when attacking horizontally", function() {
    expect(queenAttack([1,1], [8,1])).to.equal(true);
  });

  it("is true when attacking vertically", function() {
    expect(queenAttack([2,1], [2,8])).to.equal(true);
  });

  it("is true when attacking diagnoally", function() {
    expect(queenAttack([2,2], [1,3])).to.equal(true);
  });

  it("is true when attacking diagnoally", function() {
    expect(queenAttack([6,1], [4,3])).to.equal(true);
  });

  it("is true when attacking diagnoally", function() {
    expect(queenAttack([8,8], [2,2])).to.equal(true);
  });

  it("is true when attacking diagnoally", function() {
    expect(queenAttack([2,7], [4,5])).to.equal(true);
  });

  it("is true when attacking diagnoally", function() {
    expect(queenAttack([1,1], [8,8])).to.equal(true);
  });

  it("is true when attacking diagnoally", function() {
    expect(queenAttack([1,8], [8,1])).to.equal(true);
  });

  it("is true when attacking diagnoally", function() {
    expect(queenAttack([8,1], [1,8])).to.equal(true);
  });

  it("is true when attacking diagnoally", function() {
    expect(queenAttack([1,1], [8,8])).to.equal(true);
  });
});
