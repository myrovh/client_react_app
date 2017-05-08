class Dog {
	constructor(name) {
		this.name = name
	}

	bark() {
		return `Wah wah wah, I am ${this.name}`
	}
}

module.exports = Dog
