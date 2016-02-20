'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Projects',
    'state': 'projects'
  }
];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('hacksummitApp')
  .controller('NavbarController', NavbarController);
