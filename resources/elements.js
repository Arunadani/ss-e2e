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
    btnRegister: ".btn.selected.btn-block.rounded-0"
  },
  /*login*/
  login: {
    email: 'input[name="email"]',
    pswd: '.input-group [name="nombre"]',
    loginBtn: ".text-center .btn.btn-primary",
    userIcon: ".nav-item .user"
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
