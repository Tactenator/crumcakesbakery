class Cookies extends HTMLElement{
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div class=""></div>
            </div>
        `
    }
}

