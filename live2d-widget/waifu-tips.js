/*
 * Live2D Widget
 * https://github.com/stevenjoezhang/live2d-widget
 */

function loadWidget(config) {
	let { waifuPath, apiPath, cdnPath } = config;
	let useCDN = false, modelList;
	if (typeof cdnPath === "string") {
		useCDN = true;
		if (!cdnPath.endsWith("/")) cdnPath += "/";
	} else if (typeof apiPath === "string") {
		if (!apiPath.endsWith("/")) apiPath += "/";
	} else {
		console.error("Invalid initWidget argument!");
		return;
	}
	localStorage.removeItem("waifu-display");
	sessionStorage.removeItem("waifu-text");
	document.body.insertAdjacentHTML("beforeend", `<div id="waifu">
			<div id="waifu-tips"></div>
			<canvas id="live2d" width="800" height="800"></canvas>
			<div id="waifu-tool">
				<span class="fa fa-lg fa-comment"></span>
				<span class="fa fa-lg fa-paper-plane"></span>
				<span class="fa fa-lg fa-user-circle"></span>
				<span class="fa fa-lg fa-street-view"></span>
				<span class="fa fa-lg fa-camera-retro"></span>
				<span class="fa fa-lg fa-info-circle"></span>
				<span class="fa fa-lg fa-times"></span>
			</div>
		</div>`);
	// https://stackoverflow.com/questions/24148403/trigger-css-transition-on-appended-element
	setTimeout(() => {
		document.getElementById("waifu").style.bottom = 0;
	}, 0);

	function randomSelection(obj) {
		return Array.isArray(obj) ? obj[Math.floor(Math.random() * obj.length)] : obj;
	}
	// Track user activity and show a message when the visitor is idle
	let userAction = false,
		userActionTimer,
		messageTimer,
		messageArray = ["Long time no see! Time really flies...", "Meanie! You've been ignoring me for ages~", "Hey~ come play with me!", "*pokes you* Pay attention to me!", "Don't forget to add this site to your ad-blocker's allowlist!"];
	window.addEventListener("mousemove", () => userAction = true);
	window.addEventListener("keydown", () => userAction = true);
	setInterval(() => {
		if (userAction) {
			userAction = false;
			clearInterval(userActionTimer);
			userActionTimer = null;
		} else if (!userActionTimer) {
			userActionTimer = setInterval(() => {
				showMessage(randomSelection(messageArray), 6000, 9);
			}, 20000);
		}
	}, 1000);

	(function registerEventListener() {
		document.querySelector("#waifu-tool .fa-comment").addEventListener("click", showQuote);
		document.querySelector("#waifu-tool .fa-paper-plane").addEventListener("click", () => {
			if (window.Asteroids) {
				if (!window.ASTEROIDSPLAYERS) window.ASTEROIDSPLAYERS = [];
				window.ASTEROIDSPLAYERS.push(new Asteroids());
			} else {
				const script = document.createElement("script");
				script.src = "https://cdn.jsdelivr.net/gh/stevenjoezhang/asteroids/asteroids.js";
				document.head.appendChild(script);
			}
		});
		document.querySelector("#waifu-tool .fa-user-circle").addEventListener("click", loadOtherModel);
		document.querySelector("#waifu-tool .fa-street-view").addEventListener("click", loadRandModel);
		document.querySelector("#waifu-tool .fa-camera-retro").addEventListener("click", () => {
			showMessage("Got the shot? Don't I look cute?", 6000, 9);
			Live2D.captureName = "photo.png";
			Live2D.captureFrame = true;
		});
		document.querySelector("#waifu-tool .fa-info-circle").addEventListener("click", () => {
			open("https://github.com/stevenjoezhang/live2d-widget");
		});
		document.querySelector("#waifu-tool .fa-times").addEventListener("click", () => {
			localStorage.setItem("waifu-display", Date.now());
			showMessage("May you meet again with someone dear to you one day.", 2000, 11);
			document.getElementById("waifu").style.bottom = "-500px";
			setTimeout(() => {
				document.getElementById("waifu").style.display = "none";
				document.getElementById("waifu-toggle").classList.add("waifu-toggle-active");
			}, 3000);
		});
		const devtools = () => {};
		console.log("%c", devtools);
		devtools.toString = () => {
			showMessage("Haha, you opened the console! Trying to peek at my little secrets?", 6000, 9);
		};
		window.addEventListener("copy", () => {
			showMessage("What did you copy? Remember to credit the source if you share it!", 6000, 9);
		});
		window.addEventListener("visibilitychange", () => {
			if (!document.hidden) showMessage("Yay, you're finally back~", 6000, 9);
		});
	})();

	(function welcomeMessage() {
		let text;
		if (location.pathname === "/") { // Home page
			const now = new Date().getHours();
			if (now > 5 && now <= 7) text = "Good morning! The early bird gets the worm. A lovely day is about to begin.";
			else if (now > 7 && now <= 11) text = "Good morning! Is work going well? Don't sit too long, get up and stretch!";
			else if (now > 11 && now <= 13) text = "It's noon! You've worked all morning, time for lunch!";
			else if (now > 13 && now <= 17) text = "Afternoons make me sleepy... Have you hit your exercise goal today?";
			else if (now > 17 && now <= 19) text = "It's evening! The sunset outside is so pretty~";
			else if (now > 19 && now <= 21) text = "Good evening! How was your day?";
			else if (now > 21 && now <= 23) text = ["It's getting late, get some rest soon. Good night~", "Take care of your eyes this late at night!"];
			else text = "Are you a night owl? Still up this late? Can you even get up tomorrow?";
		} else if (document.referrer !== "") {
			const referrer = new URL(document.referrer),
				domain = referrer.hostname.split(".")[1];
			if (location.hostname === referrer.hostname) text = `Welcome! Enjoy reading <span>"${document.title.split(" - ")[0]}"</span>`;
			else if (domain === "baidu") text = `Hello, friend from Baidu Search!<br>Did you find me by searching <span>${referrer.search.split("&wd=")[1].split("&")[0]}</span>?`;
			else if (domain === "so") text = `Hello, friend from 360 Search!<br>Did you find me by searching <span>${referrer.search.split("&q=")[1].split("&")[0]}</span>?`;
			else if (domain === "google") text = `Hello, friend from Google Search!<br>Enjoy reading <span>"${document.title.split(" - ")[0]}"</span>`;
			else text = `Hello, friend from <span>${referrer.hostname}</span>!`;
		} else {
			text = `Welcome! Enjoy reading <span>"${document.title.split(" - ")[0]}"</span>`;
		}
		showMessage(text, 7000, 8);
	})();

	// Local English quotes (replaces the remote hitokoto.cn quote API)
	const quotes = [
		{ text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", author: "Albert Einstein" },
		{ text: "I have no special talents. I am only passionately curious.", author: "Albert Einstein" },
		{ text: "We are made of star-stuff.", author: "Carl Sagan" },
		{ text: "We are a way for the cosmos to know itself.", author: "Carl Sagan" },
		{ text: "Look up at the stars and not down at your feet.", author: "Stephen Hawking" },
		{ text: "Nothing in life is to be feared, it is only to be understood.", author: "Marie Curie" },
		{ text: "The first principle is that you must not fool yourself, and you are the easiest person to fool.", author: "Richard Feynman" }
	];

	function showQuote() {
		const quote = randomSelection(quotes);
		showMessage(`"${quote.text}"<br>&mdash; <span>${quote.author}</span>`, 6000, 9);
	}

	function showMessage(text, timeout, priority) {
		if (!text || (sessionStorage.getItem("waifu-text") && sessionStorage.getItem("waifu-text") > priority)) return;
		if (messageTimer) {
			clearTimeout(messageTimer);
			messageTimer = null;
		}
		text = randomSelection(text);
		sessionStorage.setItem("waifu-text", priority);
		const tips = document.getElementById("waifu-tips");
		tips.innerHTML = text;
		tips.classList.add("waifu-tips-active");
		messageTimer = setTimeout(() => {
			sessionStorage.removeItem("waifu-text");
			tips.classList.remove("waifu-tips-active");
		}, timeout);
	}
//	let modelId = localStorage.getItem("modelId")
	(function initModel() {
		let modelId = 6,
			modelTexturesId = localStorage.getItem("modelTexturesId");
		if (modelId === null) {
			// On first visit, load the specified texture of the specified model
			modelId = 6; // Model ID
			modelTexturesId = 53; // Texture ID
		}
		loadModel(modelId, modelTexturesId);
		fetch(waifuPath)
			.then(response => response.json())
			.then(result => {
				window.addEventListener("mouseover", event => {
					for (let { selector, text } of result.mouseover) {
						if (!event.target.matches(selector)) continue;
						text = randomSelection(text);
						text = text.replace("{text}", event.target.innerText);
						showMessage(text, 4000, 8);
						return;
					}
				});
				window.addEventListener("click", event => {
					for (let { selector, text } of result.click) {
						if (!event.target.matches(selector)) continue;
						text = randomSelection(text);
						text = text.replace("{text}", event.target.innerText);
						showMessage(text, 4000, 8);
						return;
					}
				});
				result.seasons.forEach(({ date, text }) => {
					const now = new Date(),
						after = date.split("-")[0],
						before = date.split("-")[1] || after;
					if ((after.split("/")[0] <= now.getMonth() + 1 && now.getMonth() + 1 <= before.split("/")[0]) && (after.split("/")[1] <= now.getDate() && now.getDate() <= before.split("/")[1])) {
						text = randomSelection(text);
						text = text.replace("{year}", now.getFullYear());
						//showMessage(text, 7000, true);
						messageArray.push(text);
					}
				});
			});
	})();

	async function loadModelList() {
		const response = await fetch(`${cdnPath}model_list.json`);
		modelList = await response.json();
	}

	async function loadModel(modelId, modelTexturesId, message) {
		localStorage.setItem("modelId", modelId);
		localStorage.setItem("modelTexturesId", modelTexturesId);
		showMessage(message, 4000, 10);
		if (useCDN) {
			if (!modelList) await loadModelList();
			const target = randomSelection(modelList.models[modelId]);
			loadlive2d("live2d", `${cdnPath}model/${target}/index.json`);
		} else {
			loadlive2d("live2d", `${apiPath}get/?id=${modelId}-${modelTexturesId}`);
			console.log(`Live2D model ${modelId}-${modelTexturesId} loaded`);
		}
	}

	async function loadRandModel() {
		const modelId = localStorage.getItem("modelId"),
			modelTexturesId = localStorage.getItem("modelTexturesId");
		if (useCDN) {
			if (!modelList) await loadModelList();
			const target = randomSelection(modelList.models[modelId]);
			loadlive2d("live2d", `${cdnPath}model/${target}/index.json`);
			showMessage("Do you like my new outfit?", 4000, 10);
		} else {
			// Options: "rand" (random), "switch" (sequential)
			fetch(`${apiPath}rand_textures/?id=${modelId}-${modelTexturesId}`)
				.then(response => response.json())
				.then(result => {
					if (result.textures.id === 1 && (modelTexturesId === 1 || modelTexturesId === 0)) showMessage("I don't have any other outfits yet!", 4000, 10);
					else loadModel(modelId, result.textures.id, "Do you like my new outfit?");
				});
		}
	}

	async function loadOtherModel() {
		let modelId = localStorage.getItem("modelId");
		if (useCDN) {
			if (!modelList) await loadModelList();
			const index = (++modelId >= modelList.models.length) ? 0 : modelId;
			loadModel(index, 0, "Hi! Nice to meet you~");
		} else {
			fetch(`${apiPath}switch/?id=${modelId}`)
				.then(response => response.json())
				.then(result => {
					loadModel(result.model.id, 0, "Hi! Nice to meet you~");
				});
		}
	}
}

function initWidget(config, apiPath) {
	if (typeof config === "string") {
		config = {
			waifuPath: config,
			apiPath
		};
	}
	document.body.insertAdjacentHTML("beforeend", `<div id="waifu-toggle">
			<span>Mascot</span>
		</div>`);
	const toggle = document.getElementById("waifu-toggle");
	toggle.addEventListener("click", () => {
		toggle.classList.remove("waifu-toggle-active");
		if (toggle.getAttribute("first-time")) {
			loadWidget(config);
			toggle.removeAttribute("first-time");
		} else {
			localStorage.removeItem("waifu-display");
			document.getElementById("waifu").style.display = "";
			setTimeout(() => {
				document.getElementById("waifu").style.bottom = 0;
			}, 0);
		}
	});
	if (localStorage.getItem("waifu-display") && Date.now() - localStorage.getItem("waifu-display") <= 86400000) {
		toggle.setAttribute("first-time", true);
		setTimeout(() => {
			toggle.classList.add("waifu-toggle-active");
		}, 0);
	} else {
		loadWidget(config);
	}
}
