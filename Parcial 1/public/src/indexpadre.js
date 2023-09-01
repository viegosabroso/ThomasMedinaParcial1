import * as components from "./components/indexhijo.js"
import {data} from "./components/data/data.js"

class Appcontainer extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        data.forEach(character => {
            this.shadowRoot.innerHTML += `
            <my-button buttonname="${character.name}" othername="${character.alternate_names}"></my-button>
            <my-cards  species="${character.species}" gender="${character.gender}" house="${character.house}" year="${character.yearOfBirth}"></my-cards>
            
            `
            
        });

    }


}

customElements.define ("app-container", Appcontainer)