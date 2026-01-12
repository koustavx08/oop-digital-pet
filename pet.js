class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 5;      // 0 = full, 10 = very hungry
    this.happiness = 5;   // 0 = sad, 10 = very happy
  }

  feed() {
    if (this.hunger > 0) {
      this.hunger--;
      this.happiness++;
      console.log(`${this.name} enjoyed the meal! 🍖`);
    } else {
      console.log(`${this.name} is already full!`);
    }
  }

  play() {
    if (this.happiness < 10) {
      this.happiness++;
      this.hunger++;
      console.log(`${this.name} had fun playing! 🎾`);
    } else {
      console.log(`${this.name} is already very happy!`);
    }
  }

  getStatus() {
    return `
🐾 Pet Status 🐾
Name: ${this.name}
Hunger Level: ${this.hunger}/10
Happiness Level: ${this.happiness}/10
`;
  }
}

// Example usage
const myPet = new Pet("Buddy");

myPet.feed();
myPet.play();
console.log(myPet.getStatus());
