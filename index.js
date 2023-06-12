import { renderNavigation } from './scripts/renderNavigation.js'
import { createHero } from './scripts/createHero.js'

const app = document.querySelector('.app')

const handleHomePage = () => {
	app.textContent = ''

	renderNavigation()

	const section = createHero()
	app.append(section)
}

const init = () => {
	handleHomePage()
}

init()
