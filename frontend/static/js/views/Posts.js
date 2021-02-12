import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super()
        this.setTitle('Posts')
    }
    async getHtml() {
        return `
        <h1>Posts</h1>
        <p>Imperdiet ullamcorper tellus, fusce ridiculus ligula amet class sed lobortis morbi parturient fames sapien at, id class magnis blandit, odio euismod ullamcorper vivamus, commodo donec nam. Praesent condimentum praesent interdum, dolor condimentum proin elit nisl et.

        Elementum magnis. Velit tempor maecenas justo cursus. Nec, justo. A facilisi consequat, molestie semper. Tempus luctus Quis mus ac tellus in ultrices sollicitudin convallis a curabitur. Potenti adipiscing fringilla dictum fermentum fusce.
        
        Lobortis, etiam sed. Est et Magnis primis eleifend justo. Amet curae; lectus risus. Felis, neque aenean proin. Quisque. Ante duis scelerisque nisi. Ante mollis massa fusce porttitor diam sollicitudin bibendum mollis blandit.</p>`
    }
}