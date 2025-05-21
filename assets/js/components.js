class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<h1>Monet's</h1>
        `;
    }
}

customElements.define('header-component', Header);

class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<footer class="footer">
        <section class="footer__section footer__grid">
            <div class="footer__information">
                <h3 class="">Useful Links</h3>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div class="footer__img-grid">
                <img src="" alt="pastry">
                <img src="" alt="coffee">
                <img src="" alt="sweet">
                <img src="" alt="tea">
                <img src="" alt="cake">
                <img src="" alt="storefront">
            </div>
            <div class="footer__project-info">
                <h3>About Us</h3>
                <p></p>
                <p>Project developed by <a href="https://github.com/PamellaSoto" target="_blank">@PamellaSoto</a></p>
            </div>
        </section>
        <section class="footer__section footer--secondary">
            <div class="footer__copyright">
                <p class="footer__text footer__text--title">MONET'S COFFEE SHOP</p>
                <p class="footer__text">© 2023 Monet's Coffee Shop. All rights reserved.</p>
            </div>
            <ul class="footer__links">
                <li>
                    <a href="#contact-page">Contact us</a>
                </li>
                <li><span>/</span></li>
                <li>
                    <a href="#">Instagram</a>
                </li>
                <li><span>/</span></li>
                <li>
                    <a href="#">Facebook</a>
                </li>
                <li><span>/</span></li>
                <li>
                    <a href="#">Twitter</a>
                </li>
            </ul>
        </section>
    </footer>
        `;
    }
}

customElements.define('footer-component', Footer);