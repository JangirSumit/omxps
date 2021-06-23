$(document).ready(function () {
  $(".page-nav-bar").html(getNavBar());
  $(".page-footer").html(getFooterBar());
  $(".sidenav").sidenav();
  $(".parallax").parallax();
});

function getNavBar() {
  return `
  <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo"
          >OmXPS</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>

        <ul id="nav-mobile" class="sidenav">
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
      </div>
  `;
}

function getFooterBar() {
  return `
  <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">About Us</h5>
            <p class="grey-text text-lighten-4">
            Omkara Transport Private Limited’s Annual General Meeting (AGM) was last held on 30 September 2019. As per records from Ministry of Corporate Affairs (MCA), its balance sheet was last filed on 31 March 2019.. Directors of Omkara Transport Private Limited are Om Prakash Jangid and Gori Shankar Jangid.
            </p>
          </div>
          <div class="col l6 s12">
            <h5 class="white-text">Connect</h5>
            <ul>
              <li><a class="white-text" href="index.html">Home</a></li>
              <li><a class="white-text" href="services.html">Services</a></li>
              <li><a class="white-text" href="gallery.html">Gallery</a></li>
              <li><a class="white-text" href="about.html">About Us</a></li>
              <li><a class="white-text" href="contact.html">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          Developed by
          <a class="orange-text text-lighten-3" href="#"
            >TechJunkies</a
          >
        </div>
      </div>
  `;
}
