/** @format */

export { DOM as default };

const DOM = {
	init: function () {
		this.container = document.querySelector(".weather");
	},
	displayWeather: function (data) {
		this.container.innerHTML = "";

		const icon = (function () {
			let icon = document.createElement("img");
			icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
			icon.alt = data.weather[0].description;
			return icon;
		})();

		const description = (function () {
			let description = document.createElement("p");
			description.textContent = data.weather[0].description;
			return description;
		})();

		const temp = (function () {
			let temp = document.createElement("p");
			temp.textContent = `${data.main.temp}°`;
			return temp;
		})();

		const wind = (function () {
			let wind = document.createElement("p");
			wind.textContent = `${data.wind.speed} m/s`;
			return wind;
		})();

		const humidity = (function () {
			let humidity = document.createElement("p");
			humidity.textContent = `${data.main.humidity}%`;
			return humidity;
		})();

		const windAndHumidity = document.createElement("div");
		windAndHumidity.appendChild(wind);
		windAndHumidity.appendChild(humidity);

		this.container.appendChild(icon);
		this.container.appendChild(description);
		this.container.appendChild(temp);
		this.container.appendChild(windAndHumidity);
	},
	displayLoading: function () {
		this.container.innerHTML = "";

		let loading = document.createElement("div");
		loading.classList.add("loading");

		let spinner = document.createElement("i");
		spinner.classList.add("fas", "fa-spinner", "fa-spin");
		loading.appendChild(spinner);
		this.container.appendChild(loading);
	},
	displayError: function (error) {
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
