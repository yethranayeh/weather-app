/** @format */

export { DOM as default };

const DOM = {
	init: function () {
		this.container = document.querySelector(".weather");
	},
	displayWeather: function (data) {
		this.container.innerHTML = "";
		this.container.classList.add("info");
		const icon = (function () {
			let icon = document.createElement("img");
			icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
			icon.alt = data.weather[0].description;
			return icon;
		})();

		const description = (function () {
			let description = document.createElement("p");
			description.classList.add("weather-description");
			description.textContent = data.weather[0].description;
			return description;
		})();

		const temp = (function () {
			let temp = document.createElement("p");
			temp.classList.add("weather-temp");
			temp.textContent = `${Math.round(data.main.temp)}°`;
			return temp;
		})();

		const windAndHumidity = (function () {
			const wind = (function () {
				let container = document.createElement("div");

				let icon = document.createElement("i");
				icon.classList.add("fas", "fa-wind");

				let wind = document.createElement("span");
				wind.textContent = `${data.wind.speed} m/s`;

				container.appendChild(icon);
				container.appendChild(wind);
				return container;
			})();

			const humidity = (function () {
				let container = document.createElement("div");

				let icon = document.createElement("i");
				icon.classList.add("fas", "fa-tint");

				let humidity = document.createElement("span");
				humidity.textContent = `${data.main.humidity}%`;

				container.appendChild(icon);
				container.appendChild(humidity);
				return container;
			})();

			let windAndHumidity = document.createElement("div");
			windAndHumidity.classList.add("wind-and-humidity");
			windAndHumidity.appendChild(wind);
			windAndHumidity.appendChild(humidity);
			return windAndHumidity;
		})();

		this.container.appendChild(icon);
		this.container.appendChild(description);
		this.container.appendChild(temp);
		this.container.appendChild(windAndHumidity);
	},
	displayLoading: function () {
		this.container.classList.remove("info");
		this.container.innerHTML = "";
		let loading = document.createElement("div");
		loading.classList.add("loading");

		let spinner = document.createElement("i");
		spinner.classList.add("fas", "fa-spinner", "fa-spin");
		loading.appendChild(spinner);
		this.container.appendChild(loading);
	},
	displayError: function (error) {
		this.container.classList.remove("info");
		this.container.innerHTML = "";
		let errAlert = document.createElement("div");
		errAlert.classList.add("error");

		let errIcon = document.createElement("i");
		errIcon.classList.add("fas", "fa-exclamation-triangle");
		errAlert.appendChild(errIcon);

		let errorMessage = document.createElement("p");
		errorMessage.textContent = error;
		errAlert.appendChild(errorMessage);
		this.container.appendChild(errAlert);
	}
};
