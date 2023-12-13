const cardData = [
	{
		title: 'Copy Writing',
		icon: 'Insert Icon',
		url: '#',
	},
	{
		title: 'Eamil Writing',
		icon: 'Insert Icon',
		url: '#',
	},
	{
		title: 'Bussiness Writing',
		icon: 'Insert Icon',
		url: '#',
	},
	{
		title: 'AI Tools',
		icon: 'Insert Icon',
		url: '#',
	},
	{
		title: 'Generate Content',
		icon: 'Insert Icon',
		url: '#',
	},
]

const carouselTrack = document.querySelector('.carousel-tracker');
const prevBtn = document.querySelector('.controller .prev');
const nextBtn = document.querySelector('.controller .next');
const cards = carouselTrack.children;
const firstCard = carouselTrack.firstElementChild;
const lastCard = carouselTrack.lastElementChild;
const cardWidth = carouselTrack.firstElementChild.clientWidth + 20;
let index = 0;
const prevSlide = function (DOMEvent) {
	if (index < 1)
		for (let i = cardData.length - 1; i >= 0; i--) {
			const HTML =
				`
				<aside class="card create-by-foop">
					<div class="card-title">
						<h3>Insert ${cardData[i].icon}</h3>
						<h2>${cardData[i].title}</h2>
					</div>
					<div class="card-content">
						<button type="button" class="btn primary">Create Content</button>
						<a href="#${cardData[i].url}" class="btn secondary">Generate with prompt</a>
					</div>
				</aside>
			`
			carouselTrack.insertAdjacentHTML("afterbegin", HTML);
		}
	carouselTrack.style.transform = `translateX(${cardWidth * ++index}px)`;
}

const nextSlide = function (DOMEvent) {

	for (let i = 0; i < cardData.length; i++) {
		const HTML =
			`
		<aside class="card create-by-foop">
			<div class="card-title">
				<h3>Insert ${cardData[i].icon}</h3>
				<h2>${cardData[i].title}</h2>
			</div>
			<div class="card-content">
				<button type="button" class="btn primary">Create Content</button>
				<a href="#${cardData[i].url}" class="btn secondary">Generate with prompt</a>
			</div>
		</aside>
		`
		carouselTrack.insertAdjacentHTML("beforeend", HTML);
	}
	carouselTrack.style.transform = `translateX(${cardWidth * --index}px)`;
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);