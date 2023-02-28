const navBtn = document.querySelector(".nav__button");
const navMobile = document.querySelector(".nav__list--mobile");
const currentlyYear = document.querySelector(".footer__year");
const menuItems = document.querySelectorAll(".nav__link--desktop");
const scrollSpy = document.querySelectorAll("section");
const lastSection = document.querySelector(".nav__link--last");

const handleScrollSpy = () => {
	if (document.body.classList.contains("main-page")) {
		const sections = [];

		scrollSpy.forEach((section) => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 100) {
				sections.push(section);

				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"`
				);
				menuItems.forEach((item) => item.classList.remove("active"));

				activeSection.classList.add("active");
			}

			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 200
			) {
				menuItems.forEach((item) => item.classList.remove("active"));

				lastSection.classList.add("active");
			}
		});
	}
};

// year download

const date = new Date();
const year = date.getFullYear();

currentlyYear.textContent = ` ${year}`;

//

const openMobileNav = () => {
	if (navMobile.style.display !== "flex") {
		navMobile.style.display = "flex";
	} else {
		navMobile.style.display = "none";
	}
};

navBtn.addEventListener("click", openMobileNav);
navMobile.addEventListener("click", () => {
	navMobile.style.display = "none";
});

window.addEventListener("scroll", handleScrollSpy);
