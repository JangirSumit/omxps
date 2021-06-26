$(document).ready(function () {
  $(".page-nav-bar").html(getNavBar());
  $(".page-footer").html(getFooterBar());
  $(".sidenav").sidenav();
  $(".parallax").parallax();
});

function getNavBar() {
  return `
  <div class="nav-wrapper container">
        <a id="logo-container" href="index.html" class="brand-logo"
          ><img src="./content/logo omkara bg.png" alt="omkara-transport logo" class="logo"/></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="offices.html">Our Offices</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>

        <ul id="nav-mobile" class="sidenav">
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="offices.html">Our Offices</a></li>
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
          <div class="col m6 s12">
            <h5 class="white-text">About Us</h5>
            <p class="grey-text text-lighten-4">
            Omkara Transport Private Limited’s Annual General Meeting (AGM) was last held on 30 September 2019. 
            We provide PARCEL Services from MUMBAI, BHIWANDI, PUNE, VAPI & SILVASA to DELHI, GURGAON, FARIDABAD, CHANDIGARH, PANTNAGAR 
            & vice versa in lowest transit time of 4 days. We are specialist in transportation of project over dimension cargo and machinery. 
            We are lifting the 20’ & 40’ containers of import &export from MUMBAI AND NAHVA SHEVA PORT for various I.C.Ds & C.F.Ss (dry ports). 
            We have the trained staff and skilled labor to handle your consignments and cargo at the safest method. We trust in view of above facts 
            your good self will consider us & give an opportunity to prove ourselves. Looking forward to handle your transportation at the very earliest.
            </p>
          </div>
          <div class="col m3 s12">
            <h5 class="white-text">Connect</h5>
            <ul>
              <li><a class="white-text" href="index.html">Home</a></li>
              <li><a class="white-text" href="services.html">Services</a></li>
              <li><a class="white-text" href="gallery.html">Gallery</a></li>
              <li><a class="white-text" href="offices.html">Our Offices</a></li>
              <li><a class="white-text" href="about.html">About Us</a></li>
              <li><a class="white-text" href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div class="col m3 s12">
            <h5 class="white-text">Contats</h5>
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
