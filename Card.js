class Card {
	constructor(product, title, description, price) {
		this.product = product;
		this.title = title;
		this.description = description;
		this.price = price;
	}

	viewCard() {
		document.body.innerHTML += `<div class='card'><small>${this.product}</small><h2>${this.title}</h2>
									<p>${this.description}</p>
									<mark>${this.price}$</mark></div>`;
	}
}