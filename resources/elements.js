const ele = {
  baseUrl: "http://sociosource.com",
  /* Register ele*/
  registration: {
    uname: 'input[name="name"]',
    email: "#registermemail",
    countryCode: 'input[name="code"]',
    phone: 'input[name="mobile"]',
    regPwd: 'input[name="registerpassword"]',
    selGroup: 'select[name="groupname"]',
    optGroup: ' option[value="3: 3"]',
    selCountry: 'select[name="countryname"]',
    optCountry: 'option[value="4: 4"]',
    checkTerms: 'input[name="terms"]',
    btnRegister: ".btn.selected.btn-block.rounded-0",
    regSuccess: ".pricing .card-pricing"
  },
  /*login*/
  login: {
    email: 'input[name="email"]',
    pswd: '.input-group [name="nombre"]',
    loginBtn: ".text-center .btn.btn-primary",
    userIcon: ".nav-item .user",
    pswdEye: ".input-group-append .fa"
  },
  /*Media*/
  media: {
    dwndIcon: ".call-to-action .btn",
    facebookIcon: ".ti-facebook",
    twitterIcon: ".ti-twitter-alt",
    instagramIcon: ".ti-instagram",
    watchVideo: ".play-button",
    getStart: '.play-button a[href="http://sociosource.com/webapp/"]',
    closeBtn: ".modal-body .close"
  },
  forgotPswd: {
    forgotPswdLink: ".card a",
    forgotPswdEmail: "#forgotpassword",
    sendButton: ".modal-footer button"
    /* alertMessage: ".alert.alert-danger",
    closeBtn:".close" */
  },
  /*Toast container ele
   //.toast-error, .toast-warning, .toast-success*/
  toastContainer: "#toast-container",
  /*Get started link*/
  btnGetStarted: "#navbar .nav-item a.btn",
  /*LOGO present*/
  logoPresent: ".navbar .navbar-brand img"
};

module.exports = ele;