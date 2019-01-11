function Demiurge(name, domains) {
	this.name = name;
	this.domains = domains;
}

const demiurges = [
  new Demiurge("Mr. Book", ["Point", "Blank", "Cut"]),
  new Demiurge("Mr. Clock", ["Hands", "Axis"]),
  new Demiurge("Mr. Table", ["Wood", "Scratch", "Foot"]),
  new Demiurge("Mr. Plague", ["Disease", "Virus"]),
  new Demiurge("Mr. Tower", ["Height", "Sky"]),
  new Demiurge("Mr. Cloth", ["Debt", "Fear"]),
  new Demiurge("Mr. Hand", ["Dust", "Pipe", "Apple"]),
  new Demiurge("Mr. Wire", ["Keep", "Crow", "Brick"]),
]

module.exports = {Demiurge, demiurges};
