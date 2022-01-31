/** @format */

export { DOM as default };

const DOM = {
	init: function () {
		this.container = document.querySelector(".weather");
	},
	displayWeather: function (data) {
		this.container.innerHTML = "";
		this.container.classList.add("info");

		const cityName = (function () {
			let name = document.createElement("h1");
			name.textContent = data.name;
			name.classList.add("weather-city");
			return name;
		})();

		const dateAndTime = (function () {
			let date = document.createElement("h2");
			let supportedLangs = {
				ar: "ar-SA",
				cs: "cs-CZ",
				da: "da-DK",
				de: "de-DE",
				el: "el-GR",
				en: "en-US",
				es: "es-ES",
				fi: "fi-FI",
				fr: "fr-FR",
				he: "he-IL",
				hi: "hi-IN",
				hu: "hu-HU",
				id: "id-ID",
				it: "it-IT",
				ja: "ja-JP",
				ko: "ko-KR",
				nl: "nl-NL",
				no: "no-NO",
				pl: "pl-PL",
				pt: "pt-BR",
				ro: "ro-RO",
				ru: "ru-RU",
				sv: "sv-SE",
				th: "th-TH",
				tr: "tr-TR",
				vi: "vi-VN",
				zh_cn: "zh-CN"
			};
			let lang = supportedLangs[document.querySelector("select").value] || "en-US";
			date.textContent = new Date(data.dt * 1000).toLocaleString(lang, {
				dateStyle: "medium",
				timeStyle: "short",
				hour12: false
			});
			date.classList.add("weather-date");
			return date;
		})();

		const icon = (function () {
			let icon = document.createElement("img");
			icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
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
				let selectedUnit = document.querySelector("[type=radio]:checked").id;
				let metric = selectedUnit === "metric" ? "m/s" : "mph";
				wind.textContent = `${data.wind.speed} ${metric}`;

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

		this.container.appendChild(cityName);
		this.container.appendChild(dateAndTime);
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
