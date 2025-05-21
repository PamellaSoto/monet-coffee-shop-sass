class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<header class="header">
        <nav>
            <ul class="nav__menu">
                <div class="nav__container nav__container--left">
                    <li>
                        <a class="nav__item" href="index.html">Home</a>
                    </li>
                    <li>
                        <a class="nav__item" href="about-us.html">About Us</a>
                    </li>
                    <li>
                        <a class="nav__item" href="menu.html">Our Menu</a>
                    </li>
                </div>
                <li>
                    <img class="nav__logo" src="../assets/images/monet-coffee__logo.png" alt="Monet's Coffee Shop logo">
                </li>
                <div class="nav__container nav__container--right">
                    <li>
                        <a class="nav__item" href="claude-monet.html">Who is Monet?</a>
                    </li>
                    <li>
                        <a class="nav__item" href="contact.html">Contact Us</a>
                    </li>
                    <li>
                        <a class="nav__item" href="#">Order Online</a>
                    </li>
                </div>
            </ul>
        </nav>
    </header>`;
    }
}

customElements.define('header-component', Header);

class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = ``;
    }
}

customElements.define('footer-component', Footer);