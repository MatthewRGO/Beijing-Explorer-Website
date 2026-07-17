// Initialize EmailJS
emailjs.init({
	publicKey: "8wUiJ8-GUdG6OORaw",
})

// Get the form and button
const form = document.getElementById("contact-form")
const submitBtn = document.getElementById("submit")

// When the form is submitted
form.addEventListener("submit", function (e) {
	e.preventDefault()

	submitBtn.disabled = true
	submitBtn.textContent = "Sending..."

	emailjs
		.sendForm("service_otbijxc", "template_e8i5vef", form)
		.then(() => {
			submitBtn.textContent = "Message Sent!"
			form.reset()

			setTimeout(() => {
				submitBtn.disabled = false
				submitBtn.textContent = "Submit Form"
			}, 3000)
		})
		.catch((error) => {
			console.log("Status:", error.status)
			console.log("Text:", error.text)
			console.log(error)

			submitBtn.disabled = false
			submitBtn.textContent = "Try Again"

			alert("Sorry, your message couldn't be sent. Please try again.")
		})
})

const navLinks = document.getElementById("navLinks")
function showMenu() {
	navLinks.style.right = "0px"
}
function hideMenu() {
	navLinks.style.right = "-200px"
}

const polaroids = document.querySelectorAll(".polaroid")

polaroids.forEach((photo) => {
	let randomDeg = Math.floor(Math.random() * 14) - 7
	photo.style.transform = `rotate(${randomDeg}deg)`
})

// Fade in sections when they enter the screen
const fadeElements = document.querySelectorAll(".fade-in")

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show")
			}
		})
	},
	{
		threshold: 0.1,
	},
)

fadeElements.forEach((element) => {
	observer.observe(element)
})
