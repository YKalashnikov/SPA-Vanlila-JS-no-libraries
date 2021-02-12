import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super()
        this.setTitle('Dashboard')
    }
    async getHtml() {
       return ` <h1>Dashboard</h1>
       <p>Eros aptent aptent nisi arcu, vehicula risus dolor habitant velit torquent faucibus suscipit per dapibus. Consectetuer lobortis consequat orci magna.

       Nisl tristique ultricies suscipit vitae cubilia class turpis hac varius massa ante. Viverra aptent blandit ullamcorper pellentesque vehicula rutrum curae; aliquet gravida risus nibh porttitor parturient. Natoque ultrices mi congue nisi erat. Gravida natoque, ligula quis parturient aptent curae; lacus gravida integer ridiculus.
       
       Rhoncus commodo ipsum aenean mi congue amet. Litora luctus sem ante, proin. Vel mattis dis. Nostra nunc commodo cursus aliquet etiam venenatis eleifend proin ridiculus ultricies dolor dictumst iaculis blandit Id nam ultrices quam consectetuer vel habitasse.</p>
       
       `;
    }
}