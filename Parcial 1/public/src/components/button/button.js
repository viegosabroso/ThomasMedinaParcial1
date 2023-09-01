

export class Buttonchange extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.clickbutton = this.clickbutton.bind(this)
    }

    connectedCallback(){
        this.mount()
    }

    attributeChangedCallback(prompName,oldValue,newValue){
        this[prompName] = newValue
        this.mount()   
    }

     static get observedAttributes(){
    return["buttonname","othername"]
    }

    mount(){
        this.render()
        this.addEventListener()
    }

    clickbutton(){
        
        const changename = this.getAttribute("othername")
        
        this.setAttribute("buttonname",changename)
    
        
        
    }

    addEventListener(){
        this.shadowRoot.querySelector("button").addEventListener('click',this.clickbutton)
    }

    
    render(){
        this.shadowRoot.innerHTML =`
        <button>${this.buttonname}</button>

        `
    }

}

customElements.define("my-button", Buttonchange)