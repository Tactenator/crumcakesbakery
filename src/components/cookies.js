class Cookies extends HTMLElement{
    constructor() {
        super()
    }

    close(e) {
        console.log(e.target)
    }

    connectedCallback() {
        this.innerHTML = `
    <div id="cookies-modal" class="modal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-3/4 h-auto  bg-white rounded-xl">
        <div class="relative h-[300px] overflow-hidden" style="background: linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url('https://images.unsplash.com/photo-1572978577765-462b91a7f9e1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); background-repeat: no-repeat; background-position: center; background-size: cover;">
        <div id="close" onclick="close()" class="absolute top-5 right-10 text-white text-4xl hover:text-black hover:cursor-pointer">X</div>
          </div>
          <div class="container px-6 md:px-12">
            <div
              class="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div class="flex flex-col sm:flex-row gap-20">
                <div class="mb-12 shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                  <div class="text-3xl font-bold">Fresh Baked Cookies</div>
                  <div class="text-lg">Whether you're treating yourself or surprising a loved one, our warm and gooey cookies are the perfect way to sweeten any moment. Visit us today to savor the goodness of freshly baked cookies that are made with love and guaranteed to delight your taste buds.</div>
                </div>
                <div class="w-full lg:w-7/12">
                    <div class="text-4xl font-bold pb-3">Our Flavors</div>
                    <div class="text-xl italic text-primary font-bold">$20 per dozen</div>
                    <div class="flex flex-col lg:flex-row gap-20">
                        <div>
                            <p>Chocolate Chip</p>
                            <p>M&M</p>
                            <p>Raspberry Sugar</p>
                            <p>Chocolate Pecan</p>
                            <p>Triple Chocolate</p>
                            <p>Cookies & Cream</p>
                        </div>
                        <div>
                            <p>Monster</p>
                            <p>Peanut Butter Cup</p>
                            <p>Chai Snicker Doodle</p>
                            <p>Loaded Oatmeal</p>
                            <p>Confetti Sugar</p>
                            <p>Soft Sugar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
}

customElements.define('cookie-modal', Cookies)

