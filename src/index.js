import './css/style.scss'
import Rellax from 'rellax'
window.onload = function () {
    let rellax = new Rellax('.rellax');
}
let root = document.createElement('div')
root.className = "bg"
root.innerHTML = `<section class="section section-top">
<div class="content rellax" data-rellax-speed="5">
    <h1>Community Based Driven Video</h1>
    <a href="#" class="btn btn-primary">Learn More</a>
</div>
</section>
<section class="section section-stream">
<img class="play rellax" src="/img/play-button.png" alt="" data-rellax-speed="-1" data-rellax-xs-speed="-4" />
<div class="content rellax" data-rellax-speed="10">
    <div>
        <h2 class="secondary-text">Stream Everything</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
        </p>
    </div>
    <div>
        <h2 class="secondary-text">Short is the New Long</h2 class="secondary-text">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
        </p>
    </div>
</div>
</section>

<section class="section section-grid">
<div class="rellax" data-rellax-speed="1" data-rellax-xs-speed="3">
    <i class="fas fa-video fa-3x secondary-text"></i>
    <h2>Watch<span class="secondary-text dot">.</span></h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
        dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
    </p>
</div>
<div class="rellax" data-rellax-speed="4" data-rellax-xs-speed="3">
    <i class="fas fa-users fa-3x secondary-text"></i>
    <h2>Sir Coolchi<span class="secondary-text dot">.</span></h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
        dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
    </p>
</div>
<div class="rellax" data-rellax-speed="7" data-rellax-xs-speed="3">
    <i class="fas fa-book fa-3x secondary-text"></i>
    <h2>Learn<span class="secondary-text dot">.</span></h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
        dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
    </p>
</div>
</section>

<footer class="footer">
<ul>
    <li><a href="#">Faq</a></li>
    <li><a href="#">Terms of Use</a></li>
    <li><a href="#">About Us</a></li>
</ul>
</footer>`

document.body.appendChild(root)