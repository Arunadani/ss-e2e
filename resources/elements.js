const ele = {
  baseUrl: "http://sociosource.com",
  excelFilePath: "./resources/imports/loginTestData.xlsx",
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
    //loginBtn: ".text-center .btn.btn-primary",
    userIcon: ".nav-item .user",
    pswdEye: ".input-group-append .fa"
  },
  signOut: ".fa.fa-sign-out",
  /*Media*/
  media: {
    dwndIcon: ".call-to-action .btn",
    facebookIcon: ".ti-facebook",
    twitterIcon: ".ti-twitter-alt",
    instagramIcon: ".ti-instagram",
    watchVideo: ".play-button .ti-control-play",
    getStart: '.play-button a[href="http://sociosource.com/webapp/"]',
    closeBtn: ".modal-body .close"
  },
  forgotPswd: {
    forgotPswdLink: ".card a",
    forgotPswdEmail: "#forgotpassword",
    sendButton: ".modal-footer button",
    alertMessage: ".alert.alert-danger",
    closeBtn: "body.modal-open .close"
  },
  coreApp: {
    btnAddmore: ".btn-primary.float-right",
    ssMedia: "#mediaModal h4",
    selectMedia: "#mediaModal h5",
    leftReport: ".col-lg-2.border-left",
    calender: ".btn.btn-outline-secondary.calendar",
    fromCalender: '.input-group [placeholder="From"]',
    toCalender: '.input-group [placeholder="To"]',
    generate: ".btn.btn-primary",
    month: ".custom-select",
    createNotes: ".mt-1 h5",
    notes: ".mt-1 h4",
    writeNotes: ".form-control",
    copyText: ".cursor"
  },
  dashBd: {
    googleIcon: 'a [src="assets/pictures/google-icon.png"]',
    allTab: "#nav-tab",
    commentsTab: ".nav-item.nav-link"
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
