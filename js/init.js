$(document).ready(function () {
  $(".page-nav-bar").html(getNavBar());
  $(".page-footer").html(getFooterBar());
  $(".sidenav").sidenav();
  $(".parallax").parallax();
  getGalleryImages();
});

function getNavBar() {
  return `
  <div class="nav-wrapper container">
        <a id="logo-container" href="index.html" class="brand-logo"
          ><img src="./content/logo omkara bg.png" alt="omkara-transport logo" class="logo"/></a>
        <ul class="right hide-on-med-and-down">
          <li><a class="teal-text" href="index.html">Home</a></li>
          <li><a class="teal-text" href="services.html">Services</a></li>
          <li><a class="teal-text" href="gallery.html">Gallery</a></li>
          <li><a class="teal-text" href="offices.html">Our Offices</a></li>
          <li><a class="teal-text" href="about.html">About Us</a></li>
          <li><a class="teal-text" href="contact.html">Contact Us</a></li>
        </ul>

        <ul id="nav-mobile" class="sidenav">
          <li><a class="teal-text" href="index.html">Home</a></li>
          <li><a class="teal-text" href="services.html">Services</a></li>
          <li><a class="teal-text" href="gallery.html">Gallery</a></li>
          <li><a class="teal-text" href="offices.html">Our Offices</a></li>
          <li><a class="teal-text" href="about.html">About Us</a></li>
          <li><a class="teal-text" href="contact.html">Contact Us</a></li>
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
          <div class="col m6 s12">
            <h5 class="white-text">About Us</h5>
            <p class="grey-text text-lighten-4">
              We are very much pleased to introduce ourselves as one of the
              leading IBA Approved vide Code DLO-1879 transporters in India,
              having our Head Office at Delhi, Branch Offices and Associated
              Offices in almost all the major cities and ports of India.
              <br /><br />
              In list of our fleet, We have entire range of GOODS VEHICLES i.e.
              trailers, trucks, LCVs and containerized vehicles. <br /><br />
              We are providing PARCEL Services from MUMBAI, BHIWANDI, VAPI and
              SILVASSA to DELHI, GURGAON, BHIWARI, FARIDABAD, NOIDA and vice
              versa in lowest transit time of 4 days. <br /><br />
              We are providing 48 hours committed fast delivery service for
              above stations also. We are specialist in the transportation of
              over dimension cargo and machinery. We are lifting the 20’ &amp;
              40’ containers of import &amp; export from MUMBAI AND NAHVA SHEVA
              PORT for various I.C.Ds &amp; C.F.Ss.(dry ports). <br /><br />
              We have trained staff and skilled labour to handle your
              consignments and cargo at the very safest method. We trust in view
              of above facts your good self will consider us &amp; give an
              opportunity to prove ourselves. We will be highly obliged and
              grateful to you if you will pass on any enquiry for road freight
              so that you will find our rates as best and very competitive.
            </p>
          </div>
          <div class="col m3 s12">
            <h5 class="white-text">Connect</h5>
            <ul style="line-height: 30px;">
              <li><a class="white-text" href="index.html">Home</a></li>
              <li><a class="white-text" href="services.html">Services</a></li>
              <li><a class="white-text" href="gallery.html">Gallery</a></li>
              <li><a class="white-text" href="offices.html">Our Offices</a></li>
              <li><a class="white-text" href="about.html">About Us</a></li>
              <li><a class="white-text" href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div class="col m3 s12">
            <h5 class="white-text">Headquater</h5>
            <b>Omkara Transport P Ltd</b><br/>
                The Professional Carriers with Personal Care<br/>
              <address>Head Office:-660,Sanjay Enclave,<br/>Opp.G.T.K.Depot.G.T.Karnal Road, Delhi-33
              Ph.[91-11] 27639241,27639341,27630041,27634841,27633841<br/>
                Website: <a href="#" target="_blank">www.omkaratransport.com</a>
                <br/>Email: <a href="mailTo:accounts@omkaratransport.com">accounts@omkaratransport.com</a></address>
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

function getGalleryImages() {
  if (window.location.pathname !== "/gallery.html") {
    return;
  }
  renderODCImages();
  renderRandomImages();
  $(".materialboxed").materialbox();
  $(".progress").hide();
}

function renderODCImages(params) {
  var odc = "";

  for (let index = 0; index < 6; index++) {
    odc += `
    <div class="row">
      <div class="col s12 m4">
        <img
          src="./content/gallery/ODC/ODC (${3 * index + 1}).jpeg"
          alt=""
          class="responsive-img materialboxed"
          async
        />
        <br />
      </div>
      <div class="col s12 m4">
        <img
          src="./content/gallery/ODC/ODC (${3 * index + 2}).jpeg"
          alt=""
          class="responsive-img materialboxed"
        />
        <br />
      </div>
      <div class="col s12 m4">
        <img
          src="./content/gallery/ODC/ODC (${3 * index + 3}).jpeg"
          alt=""
          class="responsive-img materialboxed"
        />
        <br />
      </div>
    </div>
    `;
  }

  $(".img-gallery-odc").append(odc);
}

function renderRandomImages() {
  var odc = "";

  for (let index = 0; index < 7; index++) {
    odc += `
    <div class="row">
      <div class="col s12 m4">
        <img
          src="./content/gallery/Random/Random (${3 * index + 1}).jpg"
          alt=""
          class="responsive-img materialboxed" async
        />
        <br />
      </div>
      <div class="col s12 m4">
        <img
          src="./content/gallery/Random/Random (${3 * index + 2}).jpg"
          alt=""
          class="responsive-img materialboxed"
        />
        <br />
      </div>
      <div class="col s12 m4">
        <img
          src="./content/gallery/Random/Random (${3 * index + 3}).jpg"
          alt=""
          class="responsive-img materialboxed"
        />
        <br />
      </div>
    </div>
    `;
  }

  $(".img-gallery-random").append(odc);
}
