 export class Cards extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    static get observedAttributes(){
        return["species","gender","house","year"]
    }

    attributeChangedCallback(prompName,oldValue,newValue){
        this[prompName] = newValue
    this.render()   
    }
    render(){
        this.shadowRoot.innerHTML = `
        <section>
        <h2>${this.species}</h2>
        <h2>${this.gender}</h2>
        <h3>${this.house}</h3>
        <h4>${this.year}</h4>
        </section>
        ` 
    }

}

customElements.define ("my-cards", Cards)