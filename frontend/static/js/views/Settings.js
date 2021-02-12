import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle('Settings')
    }
    async getHtml(){
        return `
        <h1>Settings</h1>
        <p>Fusce nostra, lobortis iaculis ante lobortis libero morbi. Eleifend Nisl fames. Tempor libero nisl sed habitasse quam eget litora cras. Fermentum primis pellentesque velit bibendum nullam ac sociis netus metus ultrices donec. Sit.

        Parturient mus. Tellus sed molestie quam congue cras dictum velit lacus gravida placerat eros risus nisi eget habitant ad commodo, donec congue. Quis hendrerit eleifend volutpat. Quam Urna potenti sapien sociis ultrices nullam.
        
        Suscipit mi ridiculus porta rhoncus sem rutrum ut volutpat class felis dis vulputate hymenaeos quam dictumst vestibulum cubilia tellus, lacinia purus congue. At sollicitudin lacus. Ac eros, sociis senectus sollicitudin vitae erat iaculis mauris.</p>`
    }
}