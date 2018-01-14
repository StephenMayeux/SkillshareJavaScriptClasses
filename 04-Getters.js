class Person {
  static get species() {
    return 'Homo sapiens';
  }

  static speciesSentence() {
    return `Humans are classified as ${this.species}`
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }
}

class Worker extends Person {
  constructor(firstName, lastName, job) {
    super(firstName, lastName);
    this.job = job;
    this.hasJob = true;
  }

  setJob(job) {
    this.job = job;
  }

  get biography() {
    const bio = `${this.fullName()} is a ${this.job}`.toUpperCase();
    return bio;
  }
}
