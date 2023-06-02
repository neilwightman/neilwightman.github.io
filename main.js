(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"white\" role=\"navigation\">\n    <div class=\"nav-wrapper container\">\n        <a id=\"logo-container\" href=\"#\" class=\"brand-logo\" routerLink=\"/home\">\n            <img class=\"hide-on-med-and-down\" src=\"assets/logo_trans_s.png\"/>\n            <span class=\"hide-on-med-and-down\">Abbey Hulton Utd F.C.</span>\n            <small class=\"hide-on-large-only\">Abbey Hulton Utd F.C.</small>\n        </a>\n\n        <ul id=\"nav-mobile\" class=\"side-nav\" style=\"transform: translateX(-100%);\">\n            <li class=\"waves-effect waves-light\" style=\"border-bottom: 1px solid #888; width: 100%;\">\n\n                <a class=\"red-text\">\n                    <img src=\"assets/logo_trans_s.png\"\n                         class=\"left\" style=\"height: 56px;\"/> Abbey Hulton Utd F.C.\n                </a>\n            </li>\n            <li><a class=\"waves-effect waves-light\" style=\"vertical-align: top;\" routerLink=\"/home\"\n                   routerLinkActive=\"active active-sm\">\n                <i class=\"fa fa-2x fa-home left\" aria-hidden=\"true\"></i>Home</a></li>\n            <li><a class=\"waves-effect waves-light\" style=\"vertical-align: top;\" routerLink=\"/events\"\n                   routerLinkActive=\"active active-sm\">\n                <i class=\"fa fa-2x fa-calendar left\" aria-hidden=\"true\"></i>Events</a></li>\n            <li><a class=\"waves-effect waves-light\" style=\"vertical-align: top;\" routerLink=\"/news\"\n                   routerLinkActive=\"active active-sm\">\n                <i class=\"fa fa-2x fa-file-text left\" aria-hidden=\"true\"></i>News</a></li>\n            <li><a class=\"waves-effect waves-light\" style=\"vertical-align: top;\" routerLink=\"/gallery\"\n                   routerLinkActive=\"active active-sm\">\n                <i class=\"fa fa-2x fa-camera left\" aria-hidden=\"true\"></i>Gallery</a></li>\n            <li><a class=\"waves-effect waves-light\" style=\"vertical-align: top;\" routerLink=\"/committee\"\n                   routerLinkActive=\"active active-sm\">\n                <i class=\"fa fa-2x fa-male left\" aria-hidden=\"true\"></i>Committee</a></li>\n            <li *ngIf=\"!_authService.isLoggedIn; else logoutLink\">\n                <a class=\"waves-effect waves-light\" style=\"vertical-align: top;\" routerLink=\"/login\"\n                   routerLinkActive=\"active active-sm\">\n                    <i class=\"fa fa-2x fa-sign-in left\" aria-hidden=\"true\"></i>Login</a></li>\n            <ng-template #logoutLink>\n                <li>\n                    <a [matMenuTriggerFor]=\"menu\" class=\"waves-effect waves-light\" style=\"vertical-align: top;\">\n                        <i class=\"fa fa-2x fa-user left\" aria-hidden=\"true\"></i> Account\n                    </a>\n                    <mat-menu #menu=\"matMenu\">\n                        <a class=\"waves-effect waves-light\" style=\"vertical-align: top;\" mat-menu-item\n                           routerLink=\"/admin\" routerLinkActive=\"active\" *ngIf=\"_authService.user._role === 'admin'\"\n                           style=\"color: #00B060;\">\n                            <i class=\"fa fa-2x fa-cog left\" style=\"height: 40px; line-height: 48px;\"\n                               aria-hidden=\"true\"></i> Admin\n                        </a>\n                        <a class=\"waves-effect waves-light\" style=\"vertical-align: top;\" mat-menu-item\n                           routerLink=\"/login\" style=\"color: #00B060;\">\n                            <i class=\"fa fa-2x fa-sign-out left\" style=\"height: 40px; line-height: 48px;\" aria-hidden=\"\n                               true\"></i>Logout\n                        </a>\n                    </mat-menu>\n                </li>\n            </ng-template>\n        </ul>\n        <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\" style=\"color: #000;\"><i class=\"material-icons\">menu</i></a>\n    </div>\n</nav>\n\n<simple-notifications [options]=\"options\"></simple-notifications>\n\n<router-outlet></router-outlet>\n\n<footer class=\"page-footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col s12 m5 offset-m1 white-text\">\n                <h5 class=\"white-text\">Get in touch</h5>\n                <div>\n                    <p>We prefer to be contacted via <a style=\"color: #FFF;\" href=\"https://www.facebook.com/abbeyhultonutd/\">Facebook Messenger</a>.</p>\n                    <i class=\"fa fa-facebook-square fa-2x pull-left\"></i>\n                    <span><a style=\"color: #FFF;\" href=\"https://www.facebook.com/abbeyhultonutd/\">Abbey Hulton Utd FC</a></span>\n                </div>\n            </div>\n\n            <div class=\"col s12 m5 offset-m1 white-text\">\n                <div class=\"col s6 white-text\">\n                    <h5 class=\"white-text\">Contact</h5>\n                    <div class=\"row\">\n                        <div class=\"col s2\">\n                            <i class=\"material-icons prefix\">home</i>\n                        </div>\n                        <div class=\"col s10\">\n                            <ul style=\"margin: 0\">\n                                <li>Birches Head Road,</li>\n                                <li>Abbey Hulton,</li>\n                                <li>Stoke On Trent,</li>\n                                <li>Staffordshire</li>\n                                <li>ST2 8DD</li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col s2\">\n                            <i class=\"material-icons prefix\">phone</i>\n                        </div>\n                        <div class=\"col s10\">\n                            <span>01782 570302</span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col s6 white-text\">\n                    <h5 class=\"white-text\">Social</h5>\n                    <h5 class=\"white-text\"></h5>\n                    <div class=\"row\">\n                        <i class=\"fa fa-twitter-square fa-2x pull-left\"></i>\n\n                        <div class=\"text\">\n                            <span> <a style=\"color: #FFF;\" href=\"https://twitter.com/HultonUtd\">@HultonUtd</a></span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <i class=\"fa fa-facebook-square fa-2x pull-left\"></i>\n\n                        <div class=\"text\">\n                            <span><a style=\"color: #FFF;\" href=\"https://www.facebook.com/abbeyhultonutd/\">Abbey Hulton Utd FC</a></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"footer-copyright\">\n        <div class=\"container\">\n            <span>&copy; Copyright {{ date | date:'y' }} Abbey Hulton United Football Club  |\n              <a style=\"color: #FFF;\" href=\"assets/Abbey Hulton United FC Data Protection Policy.pdf\">Data Protection Policy</a></span>\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"index-banner\" class=\"parallax-container\" style=\" background: rgba(0, 0, 0, 0.3)\">\n    <div class=\"section no-pad-bot\">\n        <div class=\"container\">\n            <h1 class=\"header center\">Abbey Hulton United <span style=\"color: #FF6F39;\">Football Club</span></h1>\n\n            <div class=\"row center\">\n                <h5 class=\"header col s12\">Founded in 1947 and one of the <span\n                        style=\"color: #FF6F39;\">oldest clubs</span> in <span\n                        style=\"color: #FF6F39;\">Staffordshire</span></h5>\n            </div>\n\n            <div class=\"row center\">\n              <a href=\"https://twitter.com/hultonUtd/\" class=\"btn-large waves-effect waves-light\" style=\"text-shadow: none; background: #ff6f39;\">Latest Twitter</a>\n              <a href=\"https://www.facebook.com/abbeyhultonutd\" class=\"btn-large waves-effect waves-light\" style=\"text-shadow: none; background: #ff6f39;\">Latest Facebook</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"parallax\">\n        <img src=\"assets/pitch2.jpg\" id=\"parallax-img\"\n             alt=\"Unsplashed background img 1\">\n    </div>\n</div>\n\n<div class=\"section\">\n    <div class=\"row\">\n        <h4 class=\"center\">About Us</h4>\n        <div class=\"col s12 m3\">\n            <div class=\"icon-block\">\n                <img class=\"responsive-img\"\n                     src=\"assets/logo_trans.png\"\n                     style=\"display: block; margin: 0 auto;\"/>\n            </div>\n        </div>\n        <div class=\"col s12 m9\">\n            <div class=\"icon-block\">\n\n                <p class=\"light\">\n                    Abbey Hulton United Football Club is a long established,\n                    well supported and successful club with eight teams competing in many Staffordshire\n                    leagues.</p>\n\n                <p class=\"light\">\n                    Abbey Hulton Utd F.C. was founded in 1947 and is one of the oldest clubs in Staffordshire.</p>\n\n                <p class=\"light\">\n                    If you have any photographs or info you think would be good for this website, please email them\n                    using the contact form provided <a onclick=\"window.scrollTo(0,document.body.scrollHeight)\"\n                                                       style=\"cursor: pointer;\">here</a>, or use our\n                    <a href=\"https://www.facebook.com/abbeyhultonutd/\">facebook</a> profile.\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"section white\" style=\"border-bottom: 1px solid #d2d2d2; border-top: 1px solid #d2d2d2;\ntext-align: justify;\">\n    <div class=\"row\">\n        <h4 class=\"center\">Our History</h4>\n        <div class=\"col s12 m5 offset-m1\">\n            <h5>Roll of Honour</h5>\n            <table class=\"bordered highlight striped responsive\">\n                <thead>\n                <tr>\n                    <th>League</th>\n                    <th></th>\n                    <th>Year</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                    <td>Burslem and Tunstall</td>\n                    <td><b>Division 2</b> Runners Up</td>\n                    <td>1973/1974</td>\n                </tr>\n                <tr>\n                    <td>Burslem and Tunstall</td>\n                    <td><b>Division 1</b> League Champions and Cup Winners</td>\n                    <td>1978/1979</td>\n                </tr>\n                <tr>\n                    <td>President</td>\n                    <td>Fenton and District Runners up</td>\n                    <td>1981/1982</td>\n                </tr>\n                <tr>\n                    <td>Fenton and District</td>\n                    <td>League Champions, Cup Winners and Charity Cup Winners</td>\n                    <td>1982/1983</td>\n                </tr>\n                <tr>\n                    <td>Challenge Cup</td>\n                    <td>Runners Up</td>\n                    <td>1986/1987</td>\n                </tr>\n                <tr>\n                    <td>Staffs County League</td>\n                    <td>League Champions, Cup Winners and Fair Play Award</td>\n                    <td>1997/1998</td>\n                </tr>\n                <tr>\n                    <td>Staffs County Senior League</td>\n                    <td>League Champions</td>\n                    <td>2003/2004</td>\n                </tr>\n                <tr>\n                    <td>Leek Cup</td>\n                    <td>Runners Up</td>\n                    <td>2007/2008</td>\n                </tr>\n\n                <tr>\n                    <td>Under 10s</td>\n                    <td>League and League Cup Winners</td>\n                    <td>2011/2012</td>\n                </tr>\n\n                <tr>\n                    <td>Under 11s</td>\n                    <td>League Winners</td>\n                    <td>2012/2013</td>\n                </tr>\n\n                <tr>\n                    <td>Presidents Trophy</td>\n                    <td>Winners</td>\n                    <td>2013/2014</td>\n                </tr>\n\n                <tr>\n                    <td>Under 12s</td>\n                    <td>League and Cup Winners</td>\n                    <td>2013/2014</td>\n                </tr>\n\n                <tr>\n                    <td>Under 13s</td>\n                    <td>League and Cup Winners</td>\n                    <td>2014/2015</td>\n                </tr>\n\n                <tr>\n                    <td>Leek Cup</td>\n                    <td>Winners</td>\n                    <td>2014/2015</td>\n                </tr>\n                <tr>\n                    <td>Challenge Cup</td>\n                    <td>Winners</td>\n                    <td>2014/2015</td>\n                </tr>\n\n                <tr>\n                    <td>Under 14s</td>\n                    <td>League and Sub Cup Winners</td>\n                    <td>2015/2016</td>\n                </tr>\n\n                <tr>\n                    <td>Under 14s</td>\n                    <td>England Super Cup Winners</td>\n                    <td>2015/2016</td>\n                </tr>\n\n                <tr>\n                    <td>Leek Cup</td>\n                    <td>Winner</td>\n                    <td>2016-2017</td>\n                </tr>\n\n                <tr>\n                    <td>Staffordshire County Senior Premier League</td>\n                    <td>Champions</td>\n                    <td>2016-2017</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <div class=\"col s12 m5\">\n            <h5>Some background</h5>\n\n            <p class=\"light\">\n                Abbey Hulton United Football Club was formed 70 years ago in 1947, making it one of the oldest formed\n                clubs still playing Saturday football in North Staffordshire\n                During its very early days the club played on Council land in the Abbey Hulton area. It continued to use\n                this facility for the first 15 years, despite the fact that\n                the changing facilities were more than a mile away from the actual pitch.\n                In 1962 it was decided that the team should move to the Parks facility at\n                <a class=\"link\"\n                   href=\"https://maps.google.com/maps?q=bucknall+park&hl=en&ll=53.025916,-2.150134&spn=0.005433,0.010825&oe=utf-8&client=firefox-a&channel=fflb&hq=bucknall+park&t=h&z=17\"\n                   target=\"_blank\">Bucknall park</a>, which was complete with its own changing rooms and showers\n                adjacent to the pitch. What a luxury.\n                The team continued to use Bucknall Park for another 23 years, until 1985.\n            </p>\n            <p class=\"light\">\n                During the period from 1947 to 1985 the team played in many local junior leagues such as:\n            </p>\n            <ol style=\"list-style-type: disc\">\n                <li>The Longton League</li>\n                <li>Fenton and District League</li>\n                <li>Burslem and Tunstall League</li>\n                <li>Newcastle and District League</li>\n            </ol>\n            <p class=\"light\">\n                They graced all the above leagues with great distinction.\n            </p>\n            <p class=\"light\">\n                Over the years the club became more financially stable and grew in ambition. Finally in 1985 they\n                acquired a piece of land at Birches Head Road on which it was able to obtain a 99 year lease. This is\n                the clubs current address.\n                Immediately, a clubhouse was built containing a bar and changing rooms for both teams and officials. At\n                the same time an outside 5 a-side football facility was built, complete with floodlights.\n                Having moved to this new facility the club opted to join the North Staffs Alliance League. It completed\n                in this leauge before seeking election to one of the top leagues in the area, The Staffs County League\n                (North), in 1987\n                The team played in this league and finally had a momentous season in 1997-1998 by winning the league,\n                the cup and also the fair play award all in one season.\n                Having achieved this feat the club applied to join what is the top junior league in North Staffordshire,\n                the <a class=\"link\" href=\"https://www.staffscounty-senior-league.org.uk/\" target=\"_blank\">Staffordshire County\n                Senior League</a>.\n            </p>\n\n            <img class=\"responsive-img materialboxed\" style=\"margin: 0 auto;\" src=\"assets/2017-07-08.png\">\n\n            <h5>Ground Improvements and Promotion</h5>\n\n            <p class=\"light\">\n                In the season 2016-2017 Abbey Hulton United FC won the Leek Cup and were the Staffordshire County\n                Premier League champions. We felt that it was the right time to apply to go into the Hallmark\n                Security League. Major ground improvements had to be achieved to allow us to enter the League.\n                With great support form Club members and local volunteers this has been achieved. After all the\n                hard work we were proud to be accepted into the League.\n            </p>\n\n            <h5>Our Name</h5>\n\n            <p class=\"light\">\n                Abbey Hulton United Football Club is named after the Scheduled Monument of Hulton Abbey.\n                The abbey was founded by Henry de Audley in the early 13th century. Throughout its life,\n                the abbey was relatively small and poor, with one of the lowest incomes of all Staffordshire religious\n                houses. The abbey was dissolved by Henry VIII in 1538, with its land and assets being sold.\n                Hulton Abbey was surrendered to the Crown on 18th September 1538 by which time it was worth\n                only £200 per year and had only nine monks including the abbot.\n            </p>\n            <p class=\"light\">\n                Little remains of the abbey today, but continued excavations have revealed the foundations of a\n                number of the principal claustral buildings, as well as human burials. In 1963, Hulton Abbey was\n                designated a Scheduled Monument, under the Ancient Monuments and Archaeological Areas Act 1979,\n                however due to its poor condition it is considered Heritage at Risk. The site is now owned and\n                managed by Stoke-on-Trent City Council.\n            </p>\n\n            <p class=\"light\">\n                In the Domesday Book, Hulton is recorded as ‘Heltone’ meaning ‘hill town’.\n            </p>\n\n            <img class=\"responsive-img materialboxed\" style=\"margin: 0 auto;\" src=\"assets/hilton_abbey_plot_1670.jpg\">\n            <p class=\"light\">\n                Above: shows a map from 1670 shows Hulton Abbey as Hilton Abbey.\n            </p>\n        </div>\n    </div>\n</div>\n\n<div class=\"section\">\n    <!--   Icon Section   -->\n    <div class=\"row\">\n        <h3><i class=\"mdi-content-send brown-text\"></i></h3>\n        <h4 class=\"center\">Facilities</h4>\n        <div class=\"col s6 m2 offset-m1\">\n            <div class=\"icon-block\">\n                <h2 class=\"center\" style=\"color: #FF4500; border-bottom: 1px solid;\">\n                    <i class=\"material-icons\">launch</i>\n                </h2>\n                <p class=\"light center\"> Full sized pitch </p>\n            </div>\n        </div>\n        <div class=\"col s6 m2\">\n            <div class=\"icon-block\">\n                <h2 class=\"center\" style=\"color: #FF4500; border-bottom: 1px solid;\">\n                    <i class=\"fa fa-lightbulb-o\" style=\"padding: 5px 0;\" aria-hidden=\"true\"></i>\n                </h2>\n                <p class=\"light center\"> Floodlights</p>\n            </div>\n        </div>\n        <div class=\"col s6 m2\">\n            <div class=\"icon-block\">\n                <h2 class=\"center\" style=\"color: #FF4500; border-bottom: 1px solid;\">\n                    <i class=\"material-icons\">tv</i>\n                </h2>\n                <p class=\"light center\"> Full perimeter fence</p>\n            </div>\n        </div>\n        <div class=\"col s6 m2\">\n            <div class=\"icon-block\">\n                <h2 class=\"center\" style=\"color: #FF4500; border-bottom: 1px solid;\">\n                    <i class=\"fa fa-shopping-bag\" style=\"padding: 5px 0;\" aria-hidden=\"true\"></i>\n                </h2>\n                <p class=\"light center\"> Changing rooms for officials and both teams </p>\n            </div>\n        </div>\n        <div class=\"col s6 m2\">\n            <div class=\"icon-block\">\n                <h2 class=\"center\" style=\"color: #FF4500; border-bottom: 1px solid;\">\n                    <i class=\"material-icons\">contacts</i>\n                </h2>\n                <p class=\"light center\"> 50 seater spectator stand</p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col s6 m2 offset-m1\">\n            <div class=\"icon-block\">\n                <h2 class=\"center\" style=\"color: #FF4500; border-bottom: 1px solid;\">\n                    <i class=\"material-icons\">toll</i>\n                </h2>\n                <p class=\"light center\"> Outdoor 5 a-side football pitch (AstroTurf), complete with floodlights </p>\n            </div>\n        </div>\n        <div class=\"col s6 m2\">\n            <div class=\"icon-block\">\n                <h2 class=\"center\" style=\"color: #FF4500; border-bottom: 1px solid;\">\n                    <i class=\"material-icons\">contacts</i>\n                </h2>\n                <p class=\"light center\"> Hard standing spectator area down both sides of the pitch.<br>(Ground capacity is 1000)</p>\n            </div>\n        </div>\n        <div class=\"col s6 m2\">\n            <div class=\"icon-block\">\n                <h2 class=\"center\" style=\"color: #FF4500; border-bottom: 1px solid;\">\n                    <i class=\"fa fa-user-circle\" style=\"padding: 5px 0;\" aria-hidden=\"true\"></i>\n                </h2>\n                <p class=\"light center\"> Home and away 8 seater perspex dug out.</p>\n            </div>\n        </div>\n        <div class=\"col s6 m2\">\n            <div class=\"icon-block\">\n                <h2 class=\"center\" style=\"color: #FF4500; border-bottom: 1px solid;\">\n                    <i class=\"fa fa-coffee\" style=\"padding: 5px 0;\" aria-hidden=\"true\"></i>\n                </h2>\n                <p class=\"light center\"> Clubhouse, complete with bar selling food and drinks. (including darts and\n                    a free pool table) </p>\n            </div>\n        </div>\n        <div class=\"col s6 m2\">\n            <div class=\"icon-block\">\n                <h2 class=\"center\" style=\"color: #FF4500; border-bottom: 1px solid;\">\n                    <i class=\"fa fa-car\" style=\"padding: 5px 0;\" aria-hidden=\"true\"></i>\n                </h2>\n                <p class=\"light center\"> Car park </p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"section white\" style=\"border-top: 1px solid #d2d2d2;\">\n    <div class=\"container\">\n        <!--   Icon Section   -->\n        <div class=\"row\">\n            <h4 class=\"center\">How to find us</h4>\n\n            <div class=\"col s12 m5 offset-m1\">\n                <div class=\"icon-block\">\n                    <h2 class=\"center\" style=\"color: #FF4500; border-bottom: 1px solid;\"><i class=\"material-icons\">directions</i>\n                    </h2>\n\n                    <ol class=\"light\">\n                        <li>From the A500, take Leek Road A5009 towards Leek</li>\n                        <li>Turn left onto Birches Head Road</li>\n                        <li>Go over the narrow bridge</li>\n                        <li>Continue past the junction with Redhills Road, then turn right into the ground</li>\n                    </ol>\n                    <i>*If you go over the canal bridge you have gone too far</i>\n                </div>\n            </div>\n\n            <div class=\"col s12 m5\">\n                <div class=\"icon-block\">\n                    <h2 class=\"center\" style=\"color: #FF4500;border-bottom: 1px solid;\"><i\n                            class=\"material-icons\">home</i></h2>\n                    <ul class=\"light center\">\n                        <li>Birches Head Road,</li>\n                        <li>Abbey Hulton,</li>\n                        <li>Stoke On Trent,</li>\n                        <li>Staffordshire</li>\n                        <li>ST2 8DD</li>\n                    </ul>\n                    <i>For satnavs, use post code ST2 8DD for Trent Squash Club, which is next door to the football\n                        club.</i>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"section white\" style=\"padding-bottom: 0;\">\n    <!-- Polyline -->\n    <agm-map [latitude]=\"map.center.latitude\" [longitude]=\"map.center.longitude\" [zoom]=\"map.zoom\"\n             [styles]=\"['Satellite']\" [scrollwheel]=\"false\"\n             style=\"height: 50vh; width: 100%; position: relative; border-top: 1px solid #d2d2d2;\">\n    </agm-map>\n</div>\n\n<div class=\"section white\" style=\"border-top: 1px solid #d2d2d2;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <h4 class=\"center\">Partners</h4>\n            <div class=\"col s12 m4 offset-m4\">\n                <div class=\"col s12 valign-wrapper white-text\">\n                    <img src=\"assets/nwcfl-201617.png\" class=\"footer-img-tags\"\n                         onclick=\"window.open('https://www.nwcfl.com/')\">\n                    <img src=\"assets/links-respect.png\" class=\"footer-img-tags\"\n                         onclick=\"window.open('https://www.thefa.com/get-involved/player/respect')\">\n                    <img src=\"assets/scsl.png\" class=\"footer-img-tags\"\n                         onclick=\"window.open('https://www.staffscounty-senior-league.org.uk/')\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"section\" style=\"border-top: 1px solid #d2d2d2;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <h4 class=\"center\">Sponsors</h4>\n            <div class=\"col s12\">\n                <div class=\"row\">\n                    <img class=\"center-block\" src=\"assets/sponsors/db_group_logo.png\">\n                </div>\n                <!--<div class=\"row\">-->\n                    <!--<div class=\"col s12\">-->\n                        <img class=\"col s6 m2 sponsor-img\" src=\"assets/sponsors/funky_fillerz_sponsor.jpg\">\n                        <img class=\"col s6 m2 sponsor-img\" src=\"assets/sponsors/griff_sponsor.jpg\">\n                        <img class=\"col s6 m2 sponsor-img\" src=\"assets/sponsors/harding_sponsor.jpg\">\n                        <img class=\"col s6 m2 sponsor-img\" src=\"assets/sponsors/stage_sponsor.jpg\">\n                        <img class=\"col s6 m2 sponsor-img\" src=\"assets/sponsors/target_sponsor.jpg\">\n                        <img class=\"col s6 m2 sponsor-img\" src=\"assets/sponsors/woodys_sponsor.jpg\">\n                    <!--</div>-->\n                <!--</div>-->\n            </div>\n\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
* @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
* (c) 2010-2020 Google LLC. https://angular.io/
* License: MIT
*/
(function (factory) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function () {
  'use strict';
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  var Zone$1 = function (global) {
    var performance = global['performance'];

    function mark(name) {
      performance && performance['mark'] && performance['mark'](name);
    }

    function performanceMeasure(name, label) {
      performance && performance['measure'] && performance['measure'](name, label);
    }

    mark('Zone'); // Initialize before it's accessed below.
    // __Zone_symbol_prefix global can be used to override the default zone
    // symbol prefix with a custom one if needed.

    var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

    function __symbol__(name) {
      return symbolPrefix + name;
    }

    var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

    if (global['Zone']) {
      // if global['Zone'] already exists (maybe zone.js was already loaded or
      // some other lib also registered a global object named Zone), we may need
      // to throw an error, but sometimes user may not want this error.
      // For example,
      // we have two web pages, page1 includes zone.js, page2 doesn't.
      // and the 1st time user load page1 and page2, everything work fine,
      // but when user load page2 again, error occurs because global['Zone'] already exists.
      // so we add a flag to let user choose whether to throw this error or not.
      // By default, if existing Zone is from zone.js, we will not throw the error.
      if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
        throw new Error('Zone already loaded.');
      } else {
        return global['Zone'];
      }
    }

    var Zone =
    /** @class */
    function () {
      function Zone(parent, zoneSpec) {
        this._parent = parent;
        this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
        this._properties = zoneSpec && zoneSpec.properties || {};
        this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
      }

      Zone.assertZonePatched = function () {
        if (global['Promise'] !== patches['ZoneAwarePromise']) {
          throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
        }
      };

      Object.defineProperty(Zone, "root", {
        get: function get() {
          var zone = Zone.current;

          while (zone.parent) {
            zone = zone.parent;
          }

          return zone;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Zone, "current", {
        get: function get() {
          return _currentZoneFrame.zone;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Zone, "currentTask", {
        get: function get() {
          return _currentTask;
        },
        enumerable: true,
        configurable: true
      }); // tslint:disable-next-line:require-internal-with-underscore

      Zone.__load_patch = function (name, fn) {
        if (patches.hasOwnProperty(name)) {
          if (checkDuplicate) {
            throw Error('Already loaded patch: ' + name);
          }
        } else if (!global['__Zone_disable_' + name]) {
          var perfName = 'Zone:' + name;
          mark(perfName);
          patches[name] = fn(global, Zone, _api);
          performanceMeasure(perfName, perfName);
        }
      };

      Object.defineProperty(Zone.prototype, "parent", {
        get: function get() {
          return this._parent;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Zone.prototype, "name", {
        get: function get() {
          return this._name;
        },
        enumerable: true,
        configurable: true
      });

      Zone.prototype.get = function (key) {
        var zone = this.getZoneWith(key);
        if (zone) return zone._properties[key];
      };

      Zone.prototype.getZoneWith = function (key) {
        var current = this;

        while (current) {
          if (current._properties.hasOwnProperty(key)) {
            return current;
          }

          current = current._parent;
        }

        return null;
      };

      Zone.prototype.fork = function (zoneSpec) {
        if (!zoneSpec) throw new Error('ZoneSpec required!');
        return this._zoneDelegate.fork(this, zoneSpec);
      };

      Zone.prototype.wrap = function (callback, source) {
        if (typeof callback !== 'function') {
          throw new Error('Expecting function got: ' + callback);
        }

        var _callback = this._zoneDelegate.intercept(this, callback, source);

        var zone = this;
        return function () {
          return zone.runGuarded(_callback, this, arguments, source);
        };
      };

      Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      };

      Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
        if (applyThis === void 0) {
          applyThis = null;
        }

        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          try {
            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      };

      Zone.prototype.runTask = function (task, applyThis, applyArgs) {
        if (task.zone != this) {
          throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
        } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
        // will run in notScheduled(canceled) state, we should not try to
        // run such kind of task but just return


        if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
          return;
        }

        var reEntryGuard = task.state != running;
        reEntryGuard && task._transitionTo(running, scheduled);
        task.runCount++;
        var previousTask = _currentTask;
        _currentTask = task;
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          if (task.type == macroTask && task.data && !task.data.isPeriodic) {
            task.cancelFn = undefined;
          }

          try {
            return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          // if the task's state is notScheduled or unknown, then it has already been cancelled
          // we should not reset the state to scheduled
          if (task.state !== notScheduled && task.state !== unknown) {
            if (task.type == eventTask || task.data && task.data.isPeriodic) {
              reEntryGuard && task._transitionTo(scheduled, running);
            } else {
              task.runCount = 0;

              this._updateTaskCount(task, -1);

              reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
            }
          }

          _currentZoneFrame = _currentZoneFrame.parent;
          _currentTask = previousTask;
        }
      };

      Zone.prototype.scheduleTask = function (task) {
        if (task.zone && task.zone !== this) {
          // check if the task was rescheduled, the newZone
          // should not be the children of the original zone
          var newZone = this;

          while (newZone) {
            if (newZone === task.zone) {
              throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
            }

            newZone = newZone.parent;
          }
        }

        task._transitionTo(scheduling, notScheduled);

        var zoneDelegates = [];
        task._zoneDelegates = zoneDelegates;
        task._zone = this;

        try {
          task = this._zoneDelegate.scheduleTask(this, task);
        } catch (err) {
          // should set task's state to unknown when scheduleTask throw error
          // because the err may from reschedule, so the fromState maybe notScheduled
          task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        if (task._zoneDelegates === zoneDelegates) {
          // we have to check because internally the delegate can reschedule the task.
          this._updateTaskCount(task, 1);
        }

        if (task.state == scheduling) {
          task._transitionTo(scheduled, scheduling);
        }

        return task;
      };

      Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
        return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
      };

      Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
      };

      Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
      };

      Zone.prototype.cancelTask = function (task) {
        if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

        task._transitionTo(canceling, scheduled, running);

        try {
          this._zoneDelegate.cancelTask(this, task);
        } catch (err) {
          // if error occurs when cancelTask, transit the state to unknown
          task._transitionTo(unknown, canceling);

          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        this._updateTaskCount(task, -1);

        task._transitionTo(notScheduled, canceling);

        task.runCount = 0;
        return task;
      };

      Zone.prototype._updateTaskCount = function (task, count) {
        var zoneDelegates = task._zoneDelegates;

        if (count == -1) {
          task._zoneDelegates = null;
        }

        for (var i = 0; i < zoneDelegates.length; i++) {
          zoneDelegates[i]._updateTaskCount(task.type, count);
        }
      };

      return Zone;
    }(); // tslint:disable-next-line:require-internal-with-underscore


    Zone.__symbol__ = __symbol__;
    var DELEGATE_ZS = {
      name: '',
      onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
        return delegate.hasTask(target, hasTaskState);
      },
      onScheduleTask: function onScheduleTask(delegate, _, target, task) {
        return delegate.scheduleTask(target, task);
      },
      onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
        return delegate.invokeTask(target, task, applyThis, applyArgs);
      },
      onCancelTask: function onCancelTask(delegate, _, target, task) {
        return delegate.cancelTask(target, task);
      }
    };

    var ZoneDelegate =
    /** @class */
    function () {
      function ZoneDelegate(zone, parentDelegate, zoneSpec) {
        this._taskCounts = {
          'microTask': 0,
          'macroTask': 0,
          'eventTask': 0
        };
        this.zone = zone;
        this._parentDelegate = parentDelegate;
        this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
        this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
        this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
        this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
        this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
        this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
        this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
        this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
        this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
        this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
        this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
        this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
        this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
        this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
        this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
        this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
        this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
        this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
        this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
        this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
        this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
        this._hasTaskZS = null;
        this._hasTaskDlgt = null;
        this._hasTaskDlgtOwner = null;
        this._hasTaskCurrZone = null;
        var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
        var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

        if (zoneSpecHasTask || parentHasTask) {
          // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
          // a case all task related interceptors must go through this ZD. We can't short circuit it.
          this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
          this._hasTaskDlgt = parentDelegate;
          this._hasTaskDlgtOwner = this;
          this._hasTaskCurrZone = zone;

          if (!zoneSpec.onScheduleTask) {
            this._scheduleTaskZS = DELEGATE_ZS;
            this._scheduleTaskDlgt = parentDelegate;
            this._scheduleTaskCurrZone = this.zone;
          }

          if (!zoneSpec.onInvokeTask) {
            this._invokeTaskZS = DELEGATE_ZS;
            this._invokeTaskDlgt = parentDelegate;
            this._invokeTaskCurrZone = this.zone;
          }

          if (!zoneSpec.onCancelTask) {
            this._cancelTaskZS = DELEGATE_ZS;
            this._cancelTaskDlgt = parentDelegate;
            this._cancelTaskCurrZone = this.zone;
          }
        }
      }

      ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
      };

      ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
      };

      ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
      };

      ZoneDelegate.prototype.handleError = function (targetZone, error) {
        return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
      };

      ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
        var returnTask = task;

        if (this._scheduleTaskZS) {
          if (this._hasTaskZS) {
            returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
          } // clang-format off


          returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

          if (!returnTask) returnTask = task;
        } else {
          if (task.scheduleFn) {
            task.scheduleFn(task);
          } else if (task.type == microTask) {
            scheduleMicroTask(task);
          } else {
            throw new Error('Task is missing scheduleFn.');
          }
        }

        return returnTask;
      };

      ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
      };

      ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
        var value;

        if (this._cancelTaskZS) {
          value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
        } else {
          if (!task.cancelFn) {
            throw Error('Task is not cancelable');
          }

          value = task.cancelFn(task);
        }

        return value;
      };

      ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
        // hasTask should not throw error so other ZoneDelegate
        // can still trigger hasTask callback
        try {
          this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
        } catch (err) {
          this.handleError(targetZone, err);
        }
      }; // tslint:disable-next-line:require-internal-with-underscore


      ZoneDelegate.prototype._updateTaskCount = function (type, count) {
        var counts = this._taskCounts;
        var prev = counts[type];
        var next = counts[type] = prev + count;

        if (next < 0) {
          throw new Error('More tasks executed then were scheduled.');
        }

        if (prev == 0 || next == 0) {
          var isEmpty = {
            microTask: counts['microTask'] > 0,
            macroTask: counts['macroTask'] > 0,
            eventTask: counts['eventTask'] > 0,
            change: type
          };
          this.hasTask(this.zone, isEmpty);
        }
      };

      return ZoneDelegate;
    }();

    var ZoneTask =
    /** @class */
    function () {
      function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
        // tslint:disable-next-line:require-internal-with-underscore
        this._zone = null;
        this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

        this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

        this._state = 'notScheduled';
        this.type = type;
        this.source = source;
        this.data = options;
        this.scheduleFn = scheduleFn;
        this.cancelFn = cancelFn;

        if (!callback) {
          throw new Error('callback is not defined');
        }

        this.callback = callback;
        var self = this; // TODO: @JiaLiPassion options should have interface

        if (type === eventTask && options && options.useG) {
          this.invoke = ZoneTask.invokeTask;
        } else {
          this.invoke = function () {
            return ZoneTask.invokeTask.call(global, self, this, arguments);
          };
        }
      }

      ZoneTask.invokeTask = function (task, target, args) {
        if (!task) {
          task = this;
        }

        _numberOfNestedTaskFrames++;

        try {
          task.runCount++;
          return task.zone.runTask(task, target, args);
        } finally {
          if (_numberOfNestedTaskFrames == 1) {
            drainMicroTaskQueue();
          }

          _numberOfNestedTaskFrames--;
        }
      };

      Object.defineProperty(ZoneTask.prototype, "zone", {
        get: function get() {
          return this._zone;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ZoneTask.prototype, "state", {
        get: function get() {
          return this._state;
        },
        enumerable: true,
        configurable: true
      });

      ZoneTask.prototype.cancelScheduleRequest = function () {
        this._transitionTo(notScheduled, scheduling);
      }; // tslint:disable-next-line:require-internal-with-underscore


      ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
        if (this._state === fromState1 || this._state === fromState2) {
          this._state = toState;

          if (toState == notScheduled) {
            this._zoneDelegates = null;
          }
        } else {
          throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
        }
      };

      ZoneTask.prototype.toString = function () {
        if (this.data && typeof this.data.handleId !== 'undefined') {
          return this.data.handleId.toString();
        } else {
          return Object.prototype.toString.call(this);
        }
      }; // add toJSON method to prevent cyclic error when
      // call JSON.stringify(zoneTask)


      ZoneTask.prototype.toJSON = function () {
        return {
          type: this.type,
          state: this.state,
          source: this.source,
          zone: this.zone.name,
          runCount: this.runCount
        };
      };

      return ZoneTask;
    }(); //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////


    var symbolSetTimeout = __symbol__('setTimeout');

    var symbolPromise = __symbol__('Promise');

    var symbolThen = __symbol__('then');

    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;

    function scheduleMicroTask(task) {
      // if we are not running in any task, and there has not been anything scheduled
      // we must bootstrap the initial task creation by manually scheduling the drain
      if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
        // We are not running in Task, so we need to kickstart the microtask queue.
        if (!nativeMicroTaskQueuePromise) {
          if (global[symbolPromise]) {
            nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
          }
        }

        if (nativeMicroTaskQueuePromise) {
          var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

          if (!nativeThen) {
            // native Promise is not patchable, we need to use `then` directly
            // issue 1078
            nativeThen = nativeMicroTaskQueuePromise['then'];
          }

          nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
        } else {
          global[symbolSetTimeout](drainMicroTaskQueue, 0);
        }
      }

      task && _microTaskQueue.push(task);
    }

    function drainMicroTaskQueue() {
      if (!_isDrainingMicrotaskQueue) {
        _isDrainingMicrotaskQueue = true;

        while (_microTaskQueue.length) {
          var queue = _microTaskQueue;
          _microTaskQueue = [];

          for (var i = 0; i < queue.length; i++) {
            var task = queue[i];

            try {
              task.zone.runTask(task, null, null);
            } catch (error) {
              _api.onUnhandledError(error);
            }
          }
        }

        _api.microtaskDrainDone();

        _isDrainingMicrotaskQueue = false;
      }
    } //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////


    var NO_ZONE = {
      name: 'NO ZONE'
    };
    var notScheduled = 'notScheduled',
        scheduling = 'scheduling',
        scheduled = 'scheduled',
        running = 'running',
        canceling = 'canceling',
        unknown = 'unknown';
    var microTask = 'microTask',
        macroTask = 'macroTask',
        eventTask = 'eventTask';
    var patches = {};
    var _api = {
      symbol: __symbol__,
      currentZoneFrame: function currentZoneFrame() {
        return _currentZoneFrame;
      },
      onUnhandledError: noop,
      microtaskDrainDone: noop,
      scheduleMicroTask: scheduleMicroTask,
      showUncaughtError: function showUncaughtError() {
        return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
      },
      patchEventTarget: function patchEventTarget() {
        return [];
      },
      patchOnProperties: noop,
      patchMethod: function patchMethod() {
        return noop;
      },
      bindArguments: function bindArguments() {
        return [];
      },
      patchThen: function patchThen() {
        return noop;
      },
      patchMacroTask: function patchMacroTask() {
        return noop;
      },
      setNativePromise: function setNativePromise(NativePromise) {
        // sometimes NativePromise.resolve static function
        // is not ready yet, (such as core-js/es6.promise)
        // so we need to check here.
        if (NativePromise && typeof NativePromise.resolve === 'function') {
          nativeMicroTaskQueuePromise = NativePromise.resolve(0);
        }
      },
      patchEventPrototype: function patchEventPrototype() {
        return noop;
      },
      isIEOrEdge: function isIEOrEdge() {
        return false;
      },
      getGlobalObjects: function getGlobalObjects() {
        return undefined;
      },
      ObjectDefineProperty: function ObjectDefineProperty() {
        return noop;
      },
      ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
        return undefined;
      },
      ObjectCreate: function ObjectCreate() {
        return undefined;
      },
      ArraySlice: function ArraySlice() {
        return [];
      },
      patchClass: function patchClass() {
        return noop;
      },
      wrapWithCurrentZone: function wrapWithCurrentZone() {
        return noop;
      },
      filterProperties: function filterProperties() {
        return [];
      },
      attachOriginToPatched: function attachOriginToPatched() {
        return noop;
      },
      _redefineProperty: function _redefineProperty() {
        return noop;
      },
      patchCallbacks: function patchCallbacks() {
        return noop;
      }
    };
    var _currentZoneFrame = {
      parent: null,
      zone: new Zone(null, null)
    };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;

    function noop() {}

    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
  }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;

    function readableObjectToString(obj) {
      if (obj && obj.toString === Object.prototype.toString) {
        var className = obj.constructor && obj.constructor.name;
        return (className ? className : '') + ': ' + JSON.stringify(obj);
      }

      return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }

    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

    var symbolPromise = __symbol__('Promise');

    var symbolThen = __symbol__('then');

    var creationTrace = '__creationTrace__';

    api.onUnhandledError = function (e) {
      if (api.showUncaughtError()) {
        var rejection = e && e.rejection;

        if (rejection) {
          console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
        } else {
          console.error(e);
        }
      }
    };

    api.microtaskDrainDone = function () {
      var _loop_1 = function _loop_1() {
        var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

        try {
          uncaughtPromiseError.zone.runGuarded(function () {
            throw uncaughtPromiseError;
          });
        } catch (error) {
          handleUnhandledRejection(error);
        }
      };

      while (_uncaughtPromiseErrors.length) {
        _loop_1();
      }
    };

    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

    function handleUnhandledRejection(e) {
      api.onUnhandledError(e);

      try {
        var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

        if (typeof handler === 'function') {
          handler.call(this, e);
        }
      } catch (err) {}
    }

    function isThenable(value) {
      return value && value.then;
    }

    function forwardResolution(value) {
      return value;
    }

    function forwardRejection(rejection) {
      return ZoneAwarePromise.reject(rejection);
    }

    var symbolState = __symbol__('state');

    var symbolValue = __symbol__('value');

    var symbolFinally = __symbol__('finally');

    var symbolParentPromiseValue = __symbol__('parentPromiseValue');

    var symbolParentPromiseState = __symbol__('parentPromiseState');

    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;

    function makeResolver(promise, state) {
      return function (v) {
        try {
          resolvePromise(promise, state, v);
        } catch (err) {
          resolvePromise(promise, false, err);
        } // Do not return value or you will break the Promise spec.

      };
    }

    var once = function once() {
      var wasCalled = false;
      return function wrapper(wrappedFunction) {
        return function () {
          if (wasCalled) {
            return;
          }

          wasCalled = true;
          wrappedFunction.apply(null, arguments);
        };
      };
    };

    var TYPE_ERROR = 'Promise resolved with itself';

    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


    function resolvePromise(promise, state, value) {
      var onceWrapper = once();

      if (promise === value) {
        throw new TypeError(TYPE_ERROR);
      }

      if (promise[symbolState] === UNRESOLVED) {
        // should only get value.then once based on promise spec.
        var then = null;

        try {
          if (typeof value === 'object' || typeof value === 'function') {
            then = value && value.then;
          }
        } catch (err) {
          onceWrapper(function () {
            resolvePromise(promise, false, err);
          })();
          return promise;
        } // if (value instanceof ZoneAwarePromise) {


        if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
          clearRejectedNoCatch(value);
          resolvePromise(promise, value[symbolState], value[symbolValue]);
        } else if (state !== REJECTED && typeof then === 'function') {
          try {
            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
          } catch (err) {
            onceWrapper(function () {
              resolvePromise(promise, false, err);
            })();
          }
        } else {
          promise[symbolState] = state;
          var queue = promise[symbolValue];
          promise[symbolValue] = value;

          if (promise[symbolFinally] === symbolFinally) {
            // the promise is generated by Promise.prototype.finally
            if (state === RESOLVED) {
              // the state is resolved, should ignore the value
              // and use parent promise value
              promise[symbolState] = promise[symbolParentPromiseState];
              promise[symbolValue] = promise[symbolParentPromiseValue];
            }
          } // record task information in value when error occurs, so we can
          // do some additional work such as render longStackTrace


          if (state === REJECTED && value instanceof Error) {
            // check if longStackTraceZone is here
            var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

            if (trace) {
              // only keep the long stack trace into error when in longStackTraceZone
              ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: trace
              });
            }
          }

          for (var i = 0; i < queue.length;) {
            scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
          }

          if (queue.length == 0 && state == REJECTED) {
            promise[symbolState] = REJECTED_NO_CATCH;
            var uncaughtPromiseError = value;

            if (!isDisableWrappingUncaughtPromiseRejection) {
              // If disable wrapping uncaught promise reject
              // and the rejected value is an Error object,
              // use the value instead of wrapping it.
              try {
                // Here we throws a new Error to print more readable error log
                // and if the value is not an error, zone.js builds an `Error`
                // Object here to attach the stack information.
                throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
              } catch (err) {
                uncaughtPromiseError = err;
              }
            }

            uncaughtPromiseError.rejection = value;
            uncaughtPromiseError.promise = promise;
            uncaughtPromiseError.zone = Zone.current;
            uncaughtPromiseError.task = Zone.currentTask;

            _uncaughtPromiseErrors.push(uncaughtPromiseError);

            api.scheduleMicroTask(); // to make sure that it is running
          }
        }
      } // Resolving an already resolved promise is a noop.


      return promise;
    }

    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

    function clearRejectedNoCatch(promise) {
      if (promise[symbolState] === REJECTED_NO_CATCH) {
        // if the promise is rejected no catch status
        // and queue.length > 0, means there is a error handler
        // here to handle the rejected promise, we should trigger
        // windows.rejectionhandled eventHandler or nodejs rejectionHandled
        // eventHandler
        try {
          var handler = Zone[REJECTION_HANDLED_HANDLER];

          if (handler && typeof handler === 'function') {
            handler.call(this, {
              rejection: promise[symbolValue],
              promise: promise
            });
          }
        } catch (err) {}

        promise[symbolState] = REJECTED;

        for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
          if (promise === _uncaughtPromiseErrors[i].promise) {
            _uncaughtPromiseErrors.splice(i, 1);
          }
        }
      }
    }

    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
      clearRejectedNoCatch(promise);
      var promiseState = promise[symbolState];
      var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
      zone.scheduleMicroTask(source, function () {
        try {
          var parentPromiseValue = promise[symbolValue];
          var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

          if (isFinallyPromise) {
            // if the promise is generated from finally call, keep parent promise's state and value
            chainPromise[symbolParentPromiseValue] = parentPromiseValue;
            chainPromise[symbolParentPromiseState] = promiseState;
          } // should not pass value to finally callback


          var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
          resolvePromise(chainPromise, true, value);
        } catch (error) {
          // if error occurs, should always return this error
          resolvePromise(chainPromise, false, error);
        }
      }, chainPromise);
    }

    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

    var noop = function noop() {};

    var ZoneAwarePromise =
    /** @class */
    function () {
      function ZoneAwarePromise(executor) {
        var promise = this;

        if (!(promise instanceof ZoneAwarePromise)) {
          throw new Error('Must be an instanceof Promise.');
        }

        promise[symbolState] = UNRESOLVED;
        promise[symbolValue] = []; // queue;

        try {
          executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
        } catch (error) {
          resolvePromise(promise, false, error);
        }
      }

      ZoneAwarePromise.toString = function () {
        return ZONE_AWARE_PROMISE_TO_STRING;
      };

      ZoneAwarePromise.resolve = function (value) {
        return resolvePromise(new this(null), RESOLVED, value);
      };

      ZoneAwarePromise.reject = function (error) {
        return resolvePromise(new this(null), REJECTED, error);
      };

      ZoneAwarePromise.race = function (values) {
        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        });

        function onResolve(value) {
          resolve(value);
        }

        function onReject(error) {
          reject(error);
        }

        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
          var value = values_1[_i];

          if (!isThenable(value)) {
            value = this.resolve(value);
          }

          value.then(onResolve, onReject);
        }

        return promise;
      };

      ZoneAwarePromise.all = function (values) {
        return ZoneAwarePromise.allWithCallback(values);
      };

      ZoneAwarePromise.allSettled = function (values) {
        var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: function thenCallback(value) {
            return {
              status: 'fulfilled',
              value: value
            };
          },
          errorCallback: function errorCallback(err) {
            return {
              status: 'rejected',
              reason: err
            };
          }
        });
      };

      ZoneAwarePromise.allWithCallback = function (values, callback) {
        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

        var unresolvedCount = 2;
        var valueIndex = 0;
        var resolvedValues = [];

        var _loop_2 = function _loop_2(value) {
          if (!isThenable(value)) {
            value = this_1.resolve(value);
          }

          var curValueIndex = valueIndex;

          try {
            value.then(function (value) {
              resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
              unresolvedCount--;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }, function (err) {
              if (!callback) {
                reject(err);
              } else {
                resolvedValues[curValueIndex] = callback.errorCallback(err);
                unresolvedCount--;

                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }
            });
          } catch (thenErr) {
            reject(thenErr);
          }

          unresolvedCount++;
          valueIndex++;
        };

        var this_1 = this;

        for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
          var value = values_2[_i];

          _loop_2(value);
        } // Make the unresolvedCount zero-based again.


        unresolvedCount -= 2;

        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }

        return promise;
      };

      Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
        get: function get() {
          return 'Promise';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ZoneAwarePromise.prototype, Symbol.species, {
        get: function get() {
          return ZoneAwarePromise;
        },
        enumerable: true,
        configurable: true
      });

      ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
        var C = this.constructor[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = this.constructor || ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }

        return chainPromise;
      };

      ZoneAwarePromise.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
      };

      ZoneAwarePromise.prototype.finally = function (onFinally) {
        var C = this.constructor[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        chainPromise[symbolFinally] = symbolFinally;
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }

        return chainPromise;
      };

      return ZoneAwarePromise;
    }(); // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.


    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];

    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

    if (!desc || desc.configurable) {
      desc && delete desc.writable;
      desc && delete desc.value;

      if (!desc) {
        desc = {
          configurable: true,
          enumerable: true
        };
      }

      desc.get = function () {
        // if we already set ZoneAwarePromise, use patched one
        // otherwise return native one.
        return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
      };

      desc.set = function (NewNativePromise) {
        if (NewNativePromise === ZoneAwarePromise) {
          // if the NewNativePromise is ZoneAwarePromise
          // save to global
          global[ZONE_AWARE_PROMISE] = NewNativePromise;
        } else {
          // if the NewNativePromise is not ZoneAwarePromise
          // for example: after load zone.js, some library just
          // set es6-promise to global, if we set it to global
          // directly, assertZonePatched will fail and angular
          // will not loaded, so we just set the NewNativePromise
          // to global[symbolPromise], so the result is just like
          // we load ES6 Promise before zone.js
          global[symbolPromise] = NewNativePromise;

          if (!NewNativePromise.prototype[symbolThen]) {
            patchThen(NewNativePromise);
          }

          api.setNativePromise(NewNativePromise);
        }
      };

      ObjectDefineProperty(global, 'Promise', desc);
    }

    global['Promise'] = ZoneAwarePromise;

    var symbolThenPatched = __symbol__('thenPatched');

    function patchThen(Ctor) {
      var proto = Ctor.prototype;
      var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

      if (prop && (prop.writable === false || !prop.configurable)) {
        // check Ctor.prototype.then propertyDescriptor is writable or not
        // in meteor env, writable is false, we should ignore such case
        return;
      }

      var originalThen = proto.then; // Keep a reference to the original method.

      proto[symbolThen] = originalThen;

      Ctor.prototype.then = function (onResolve, onReject) {
        var _this = this;

        var wrapped = new ZoneAwarePromise(function (resolve, reject) {
          originalThen.call(_this, resolve, reject);
        });
        return wrapped.then(onResolve, onReject);
      };

      Ctor[symbolThenPatched] = true;
    }

    api.patchThen = patchThen;

    function zoneify(fn) {
      return function () {
        var resultPromise = fn.apply(this, arguments);

        if (resultPromise instanceof ZoneAwarePromise) {
          return resultPromise;
        }

        var ctor = resultPromise.constructor;

        if (!ctor[symbolThenPatched]) {
          patchThen(ctor);
        }

        return resultPromise;
      };
    }

    if (NativePromise) {
      patchThen(NativePromise);
      var fetch_1 = global['fetch'];

      if (typeof fetch_1 == 'function') {
        global[api.symbol('fetch')] = fetch_1;
        global['fetch'] = zoneify(fetch_1);
      }
    } // This is not part of public API, but it is useful for tests, so we expose it.


    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
  });
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  /**
   * Suppress closure compiler errors about unknown 'Zone' variable
   * @fileoverview
   * @suppress {undefinedVars,globalThis,missingRequire}
   */
  /// <reference types="node"/>
  // issue #989, to reduce bundle size, use short name

  /** Object.getOwnPropertyDescriptor */


  var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  /** Object.defineProperty */

  var ObjectDefineProperty = Object.defineProperty;
  /** Object.getPrototypeOf */

  var ObjectGetPrototypeOf = Object.getPrototypeOf;
  /** Object.create */

  var ObjectCreate = Object.create;
  /** Array.prototype.slice */

  var ArraySlice = Array.prototype.slice;
  /** addEventListener string const */

  var ADD_EVENT_LISTENER_STR = 'addEventListener';
  /** removeEventListener string const */

  var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
  /** zoneSymbol addEventListener */

  var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
  /** zoneSymbol removeEventListener */


  var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
  /** true string const */


  var TRUE_STR = 'true';
  /** false string const */

  var FALSE_STR = 'false';
  /** Zone symbol prefix string const. */

  var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

  function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
  }

  function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
  }

  var zoneSymbol = Zone.__symbol__;
  var isWindowExists = typeof window !== 'undefined';
  var internalWindow = isWindowExists ? window : undefined;

  var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

  var REMOVE_ATTRIBUTE = 'removeAttribute';
  var NULL_ON_PROP_VALUE = [null];

  function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
      if (typeof args[i] === 'function') {
        args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
      }
    }

    return args;
  }

  function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];

    var _loop_3 = function _loop_3(i) {
      var name_1 = fnNames[i];
      var delegate = prototype[name_1];

      if (delegate) {
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);

        if (!isPropertyWritable(prototypeDesc)) {
          return "continue";
        }

        prototype[name_1] = function (delegate) {
          var patched = function patched() {
            return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
          };

          attachOriginToPatched(patched, delegate);
          return patched;
        }(delegate);
      }
    };

    for (var i = 0; i < fnNames.length; i++) {
      _loop_3(i);
    }
  }

  function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
      return true;
    }

    if (propertyDesc.writable === false) {
      return false;
    }

    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
  }

  var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
  // this code.

  var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
  var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
  // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
  // this code.

  var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
  var zoneSymbolEventNames = {};

  var wrapFn = function wrapFn(event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;

    if (!event) {
      return;
    }

    var eventNameSymbol = zoneSymbolEventNames[event.type];

    if (!eventNameSymbol) {
      eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }

    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;

    if (isBrowser && target === internalWindow && event.type === 'error') {
      // window.onerror have different signiture
      // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
      // and onerror callback will prevent default when callback return true
      var errorEvent = event;
      result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

      if (result === true) {
        event.preventDefault();
      }
    } else {
      result = listener && listener.apply(this, arguments);

      if (result != undefined && !result) {
        event.preventDefault();
      }
    }

    return result;
  };

  function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

    if (!desc && prototype) {
      // when patch window object, use prototype to check prop exist or not
      var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

      if (prototypeDesc) {
        desc = {
          enumerable: true,
          configurable: true
        };
      }
    } // if the descriptor not exists or is not configurable
    // just return


    if (!desc || !desc.configurable) {
      return;
    }

    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
      return;
    } // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified


    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];

    if (!eventNameSymbol) {
      eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }

    desc.set = function (newValue) {
      // in some of windows's onproperty callback, this is undefined
      // so we need to check it
      var target = this;

      if (!target && obj === _global) {
        target = _global;
      }

      if (!target) {
        return;
      }

      var previousValue = target[eventNameSymbol];

      if (previousValue) {
        target.removeEventListener(eventName, wrapFn);
      } // issue #978, when onload handler was added before loading zone.js
      // we should remove it with originalDescSet


      if (originalDescSet) {
        originalDescSet.apply(target, NULL_ON_PROP_VALUE);
      }

      if (typeof newValue === 'function') {
        target[eventNameSymbol] = newValue;
        target.addEventListener(eventName, wrapFn, false);
      } else {
        target[eventNameSymbol] = null;
      }
    }; // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null


    desc.get = function () {
      // in some of windows's onproperty callback, this is undefined
      // so we need to check it
      var target = this;

      if (!target && obj === _global) {
        target = _global;
      }

      if (!target) {
        return null;
      }

      var listener = target[eventNameSymbol];

      if (listener) {
        return listener;
      } else if (originalDescGet) {
        // result will be null when use inline event attribute,
        // such as <button onclick="func();">OK</button>
        // because the onclick function is internal raw uncompiled handler
        // the onclick will be evaluated when first time event was triggered or
        // the property is accessed, https://github.com/angular/zone.js/issues/525
        // so we should use original native get to retrieve the handler
        var value = originalDescGet && originalDescGet.call(this);

        if (value) {
          desc.set.call(this, value);

          if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
            target.removeAttribute(prop);
          }

          return value;
        }
      }

      return null;
    };

    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
  }

  function patchOnProperties(obj, properties, prototype) {
    if (properties) {
      for (var i = 0; i < properties.length; i++) {
        patchProperty(obj, 'on' + properties[i], prototype);
      }
    } else {
      var onProperties = [];

      for (var prop in obj) {
        if (prop.substr(0, 2) == 'on') {
          onProperties.push(prop);
        }
      }

      for (var j = 0; j < onProperties.length; j++) {
        patchProperty(obj, onProperties[j], prototype);
      }
    }
  }

  var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

  function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass) return; // keep original class in global

    _global[zoneSymbol(className)] = OriginalClass;

    _global[className] = function () {
      var a = bindArguments(arguments, className);

      switch (a.length) {
        case 0:
          this[originalInstanceKey] = new OriginalClass();
          break;

        case 1:
          this[originalInstanceKey] = new OriginalClass(a[0]);
          break;

        case 2:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
          break;

        case 3:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
          break;

        case 4:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
          break;

        default:
          throw new Error('Arg list too long.');
      }
    }; // attach original delegate to patched function


    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () {});
    var prop;

    for (prop in instance) {
      // https://bugs.webkit.org/show_bug.cgi?id=44721
      if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

      (function (prop) {
        if (typeof instance[prop] === 'function') {
          _global[className].prototype[prop] = function () {
            return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
          };
        } else {
          ObjectDefineProperty(_global[className].prototype, prop, {
            set: function set(fn) {
              if (typeof fn === 'function') {
                this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                // use it in Function.prototype.toString to return
                // the native one.

                attachOriginToPatched(this[originalInstanceKey][prop], fn);
              } else {
                this[originalInstanceKey][prop] = fn;
              }
            },
            get: function get() {
              return this[originalInstanceKey][prop];
            }
          });
        }
      })(prop);
    }

    for (prop in OriginalClass) {
      if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
        _global[className][prop] = OriginalClass[prop];
      }
    }
  }

  function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
      return;
    }

    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
      var desc = Object.getOwnPropertyDescriptor(src, symbol);
      Object.defineProperty(dest, symbol, {
        get: function get() {
          return src[symbol];
        },
        set: function set(value) {
          if (desc && (!desc.writable || typeof desc.set !== 'function')) {
            // if src[symbol] is not writable or not have a setter, just return
            return;
          }

          src[symbol] = value;
        },
        enumerable: desc ? desc.enumerable : true,
        configurable: desc ? desc.configurable : true
      });
    });
  }

  var shouldCopySymbolProperties = false;

  function patchMethod(target, name, patchFn) {
    var proto = target;

    while (proto && !proto.hasOwnProperty(name)) {
      proto = ObjectGetPrototypeOf(proto);
    }

    if (!proto && target[name]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = target;
    }

    var delegateName = zoneSymbol(name);
    var delegate = null;

    if (proto && !(delegate = proto[delegateName])) {
      delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
      // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

      var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

      if (isPropertyWritable(desc)) {
        var patchDelegate_1 = patchFn(delegate, delegateName, name);

        proto[name] = function () {
          return patchDelegate_1(this, arguments);
        };

        attachOriginToPatched(proto[name], delegate);

        if (shouldCopySymbolProperties) {
          copySymbolProperties(delegate, proto[name]);
        }
      }
    }

    return delegate;
  } // TODO: @JiaLiPassion, support cancel task later if necessary


  function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;

    function scheduleTask(task) {
      var data = task.data;

      data.args[data.cbIdx] = function () {
        task.invoke.apply(this, arguments);
      };

      setNative.apply(data.target, data.args);
      return task;
    }

    setNative = patchMethod(obj, funcName, function (delegate) {
      return function (self, args) {
        var meta = metaCreator(self, args);

        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
          return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        } else {
          // cause an error by calling it directly.
          return delegate.apply(self, args);
        }
      };
    });
  }

  function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
  }

  var isDetectedIEOrEdge = false;
  var ieOrEdge = false;

  function isIE() {
    try {
      var ua = internalWindow.navigator.userAgent;

      if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
        return true;
      }
    } catch (error) {}

    return false;
  }

  function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
      return ieOrEdge;
    }

    isDetectedIEOrEdge = true;

    try {
      var ua = internalWindow.navigator.userAgent;

      if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
        ieOrEdge = true;
      }
    } catch (error) {}

    return ieOrEdge;
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
  // override Function.prototype.toString to make zone.js patched function
  // look like native function


  Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');

    var newFunctionToString = function toString() {
      if (typeof this === 'function') {
        var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

        if (originalDelegate) {
          if (typeof originalDelegate === 'function') {
            return originalFunctionToString.call(originalDelegate);
          } else {
            return Object.prototype.toString.call(originalDelegate);
          }
        }

        if (this === Promise) {
          var nativePromise = global[PROMISE_SYMBOL];

          if (nativePromise) {
            return originalFunctionToString.call(nativePromise);
          }
        }

        if (this === Error) {
          var nativeError = global[ERROR_SYMBOL];

          if (nativeError) {
            return originalFunctionToString.call(nativeError);
          }
        }
      }

      return originalFunctionToString.call(this);
    };

    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';

    Object.prototype.toString = function () {
      if (this instanceof Promise) {
        return PROMISE_OBJECT_TO_STRING;
      }

      return originalObjectToString.call(this);
    };
  });
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  var passiveSupported = false;

  if (typeof window !== 'undefined') {
    try {
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passiveSupported = true;
        }
      });
      window.addEventListener('test', options, options);
      window.removeEventListener('test', options, options);
    } catch (err) {
      passiveSupported = false;
    }
  } // an identifier to tell ZoneTask do not create a new invoke closure


  var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
  };
  var zoneSymbolEventNames$1 = {};
  var globalSources = {};
  var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
  var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

  function prepareEventNames(eventName, eventNameToString) {
    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames$1[eventName] = {};
    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
  }

  function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

    var invokeTask = function invokeTask(task, target, event) {
      // for better performance, check isRemoved which is set
      // by removeEventListener
      if (task.isRemoved) {
        return;
      }

      var delegate = task.callback;

      if (typeof delegate === 'object' && delegate.handleEvent) {
        // create the bind version of handleEvent when invoke
        task.callback = function (event) {
          return delegate.handleEvent(event);
        };

        task.originalDelegate = delegate;
      } // invoke static task.invoke


      task.invoke(task, target, [event]);
      var options = task.options;

      if (options && typeof options === 'object' && options.once) {
        // if options.once is true, after invoke once remove listener here
        // only browser need to do this, nodejs eventEmitter will cal removeListener
        // inside EventEmitter.once
        var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
        target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
      }
    }; // global shared zoneAwareCallback to handle all event callback with capture = false


    var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
      // https://github.com/angular/zone.js/issues/911, in IE, sometimes
      // event will be undefined, so we need to use window.event
      event = event || _global.event;

      if (!event) {
        return;
      } // event.target is needed for Samsung TV and SourceBuffer
      // || global is needed https://github.com/angular/zone.js/issues/190


      var target = this || event.target || _global;
      var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

      if (tasks) {
        // invoke all tasks which attached to current target with given event.type and capture = false
        // for performance concern, if task.length === 1, just invoke
        if (tasks.length === 1) {
          invokeTask(tasks[0], target, event);
        } else {
          // https://github.com/angular/zone.js/issues/836
          // copy the tasks array before invoke, to avoid
          // the callback will remove itself or other listener
          var copyTasks = tasks.slice();

          for (var i = 0; i < copyTasks.length; i++) {
            if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
              break;
            }

            invokeTask(copyTasks[i], target, event);
          }
        }
      }
    }; // global shared zoneAwareCallback to handle all event callback with capture = true


    var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
      // https://github.com/angular/zone.js/issues/911, in IE, sometimes
      // event will be undefined, so we need to use window.event
      event = event || _global.event;

      if (!event) {
        return;
      } // event.target is needed for Samsung TV and SourceBuffer
      // || global is needed https://github.com/angular/zone.js/issues/190


      var target = this || event.target || _global;
      var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

      if (tasks) {
        // invoke all tasks which attached to current target with given event.type and capture = false
        // for performance concern, if task.length === 1, just invoke
        if (tasks.length === 1) {
          invokeTask(tasks[0], target, event);
        } else {
          // https://github.com/angular/zone.js/issues/836
          // copy the tasks array before invoke, to avoid
          // the callback will remove itself or other listener
          var copyTasks = tasks.slice();

          for (var i = 0; i < copyTasks.length; i++) {
            if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
              break;
            }

            invokeTask(copyTasks[i], target, event);
          }
        }
      }
    };

    function patchEventTargetMethods(obj, patchOptions) {
      if (!obj) {
        return false;
      }

      var useGlobalCallback = true;

      if (patchOptions && patchOptions.useG !== undefined) {
        useGlobalCallback = patchOptions.useG;
      }

      var validateHandler = patchOptions && patchOptions.vh;
      var checkDuplicate = true;

      if (patchOptions && patchOptions.chkDup !== undefined) {
        checkDuplicate = patchOptions.chkDup;
      }

      var returnTarget = false;

      if (patchOptions && patchOptions.rt !== undefined) {
        returnTarget = patchOptions.rt;
      }

      var proto = obj;

      while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
        proto = ObjectGetPrototypeOf(proto);
      }

      if (!proto && obj[ADD_EVENT_LISTENER]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = obj;
      }

      if (!proto) {
        return false;
      }

      if (proto[zoneSymbolAddEventListener]) {
        return false;
      }

      var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
      // so we do not need to create a new object just for pass some data

      var taskData = {};
      var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
      var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
      var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
      var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
      var nativePrependEventListener;

      if (patchOptions && patchOptions.prepend) {
        nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
      }
      /**
       * This util function will build an option object with passive option
       * to handle all possible input from the user.
       */


      function buildEventListenerOptions(options, passive) {
        if (!passiveSupported && typeof options === 'object' && options) {
          // doesn't support passive but user want to pass an object as options.
          // this will not work on some old browser, so we just pass a boolean
          // as useCapture parameter
          return !!options.capture;
        }

        if (!passiveSupported || !passive) {
          return options;
        }

        if (typeof options === 'boolean') {
          return {
            capture: options,
            passive: true
          };
        }

        if (!options) {
          return {
            passive: true
          };
        }

        if (typeof options === 'object' && options.passive !== false) {
          return Object.assign(Object.assign({}, options), {
            passive: true
          });
        }

        return options;
      }

      var customScheduleGlobal = function customScheduleGlobal(task) {
        // if there is already a task for the eventName + capture,
        // just return, because we use the shared globalZoneAwareCallback here.
        if (taskData.isExisting) {
          return;
        }

        return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
      };

      var customCancelGlobal = function customCancelGlobal(task) {
        // if task is not marked as isRemoved, this call is directly
        // from Zone.prototype.cancelTask, we should remove the task
        // from tasksList of target first
        if (!task.isRemoved) {
          var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
          var symbolEventName = void 0;

          if (symbolEventNames) {
            symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
          }

          var existingTasks = symbolEventName && task.target[symbolEventName];

          if (existingTasks) {
            for (var i = 0; i < existingTasks.length; i++) {
              var existingTask = existingTasks[i];

              if (existingTask === task) {
                existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                task.isRemoved = true;

                if (existingTasks.length === 0) {
                  // all tasks for the eventName + capture have gone,
                  // remove globalZoneAwareCallback and remove the task cache from target
                  task.allRemoved = true;
                  task.target[symbolEventName] = null;
                }

                break;
              }
            }
          }
        } // if all tasks for the eventName + capture have gone,
        // we will really remove the global event callback,
        // if not, return


        if (!task.allRemoved) {
          return;
        }

        return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
      };

      var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
        return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
      };

      var customSchedulePrepend = function customSchedulePrepend(task) {
        return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
      };

      var customCancelNonGlobal = function customCancelNonGlobal(task) {
        return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
      };

      var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
      var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

      var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
        var typeOfDelegate = typeof delegate;
        return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
      };

      var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
      var blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];

      var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

      var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
        if (returnTarget === void 0) {
          returnTarget = false;
        }

        if (prepend === void 0) {
          prepend = false;
        }

        return function () {
          var target = this || _global;
          var eventName = arguments[0];

          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }

          var delegate = arguments[1];

          if (!delegate) {
            return nativeListener.apply(this, arguments);
          }

          if (isNode && eventName === 'uncaughtException') {
            // don't patch uncaughtException of nodejs to prevent endless loop
            return nativeListener.apply(this, arguments);
          } // don't create the bind delegate function for handleEvent
          // case here to improve addEventListener performance
          // we will create the bind delegate when invoke


          var isHandleEvent = false;

          if (typeof delegate !== 'function') {
            if (!delegate.handleEvent) {
              return nativeListener.apply(this, arguments);
            }

            isHandleEvent = true;
          }

          if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
            return;
          }

          var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
          var options = buildEventListenerOptions(arguments[2], passive);

          if (blackListedEvents) {
            // check black list
            for (var i = 0; i < blackListedEvents.length; i++) {
              if (eventName === blackListedEvents[i]) {
                if (passive) {
                  return nativeListener.call(target, eventName, delegate, options);
                } else {
                  return nativeListener.apply(this, arguments);
                }
              }
            }
          }

          var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
          var once = options && typeof options === 'object' ? options.once : false;
          var zone = Zone.current;
          var symbolEventNames = zoneSymbolEventNames$1[eventName];

          if (!symbolEventNames) {
            prepareEventNames(eventName, eventNameToString);
            symbolEventNames = zoneSymbolEventNames$1[eventName];
          }

          var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
          var existingTasks = target[symbolEventName];
          var isExisting = false;

          if (existingTasks) {
            // already have task registered
            isExisting = true;

            if (checkDuplicate) {
              for (var i = 0; i < existingTasks.length; i++) {
                if (compare(existingTasks[i], delegate)) {
                  // same callback, same capture, same event name, just return
                  return;
                }
              }
            }
          } else {
            existingTasks = target[symbolEventName] = [];
          }

          var source;
          var constructorName = target.constructor['name'];
          var targetSource = globalSources[constructorName];

          if (targetSource) {
            source = targetSource[eventName];
          }

          if (!source) {
            source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
          } // do not create a new object as task.data to pass those things
          // just use the global shared one


          taskData.options = options;

          if (once) {
            // if addEventListener with once options, we don't pass it to
            // native addEventListener, instead we keep the once setting
            // and handle ourselves.
            taskData.options.once = false;
          }

          taskData.target = target;
          taskData.capture = capture;
          taskData.eventName = eventName;
          taskData.isExisting = isExisting;
          var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

          if (data) {
            data.taskData = taskData;
          }

          var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
          // issue, https://github.com/angular/angular/issues/20442

          taskData.target = null; // need to clear up taskData because it is a global object

          if (data) {
            data.taskData = null;
          } // have to save those information to task in case
          // application may call task.zone.cancelTask() directly


          if (once) {
            options.once = true;
          }

          if (!(!passiveSupported && typeof task.options === 'boolean')) {
            // if not support passive, and we pass an option object
            // to addEventListener, we should save the options to task
            task.options = options;
          }

          task.target = target;
          task.capture = capture;
          task.eventName = eventName;

          if (isHandleEvent) {
            // save original delegate for compare to check duplicate
            task.originalDelegate = delegate;
          }

          if (!prepend) {
            existingTasks.push(task);
          } else {
            existingTasks.unshift(task);
          }

          if (returnTarget) {
            return target;
          }
        };
      };

      proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

      if (nativePrependEventListener) {
        proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
      }

      proto[REMOVE_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var options = arguments[2];
        var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        var delegate = arguments[1];

        if (!delegate) {
          return nativeRemoveEventListener.apply(this, arguments);
        }

        if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
          return;
        }

        var symbolEventNames = zoneSymbolEventNames$1[eventName];
        var symbolEventName;

        if (symbolEventNames) {
          symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        }

        var existingTasks = symbolEventName && target[symbolEventName];

        if (existingTasks) {
          for (var i = 0; i < existingTasks.length; i++) {
            var existingTask = existingTasks[i];

            if (compare(existingTask, delegate)) {
              existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

              existingTask.isRemoved = true;

              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                existingTask.allRemoved = true;
                target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                // such as target.onclick = function() {}, so we need to clear this internal
                // property too if all delegates all removed

                if (typeof eventName === 'string') {
                  var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                  target[onPropertySymbol] = null;
                }
              }

              existingTask.zone.cancelTask(existingTask);

              if (returnTarget) {
                return target;
              }

              return;
            }
          }
        } // issue 930, didn't find the event name or callback
        // from zone kept existingTasks, the callback maybe
        // added outside of zone, we need to call native removeEventListener
        // to try to remove it.


        return nativeRemoveEventListener.apply(this, arguments);
      };

      proto[LISTENERS_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var listeners = [];
        var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

        for (var i = 0; i < tasks.length; i++) {
          var task = tasks[i];
          var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
          listeners.push(delegate);
        }

        return listeners;
      };

      proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (!eventName) {
          var keys = Object.keys(target);

          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
            // used for monitoring the removeListener call,
            // so just keep removeListener eventListener until
            // all other eventListeners are removed

            if (evtName && evtName !== 'removeListener') {
              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
            }
          } // remove removeListener listener finally


          this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
        } else {
          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }

          var symbolEventNames = zoneSymbolEventNames$1[eventName];

          if (symbolEventNames) {
            var symbolEventName = symbolEventNames[FALSE_STR];
            var symbolCaptureEventName = symbolEventNames[TRUE_STR];
            var tasks = target[symbolEventName];
            var captureTasks = target[symbolCaptureEventName];

            if (tasks) {
              var removeTasks = tasks.slice();

              for (var i = 0; i < removeTasks.length; i++) {
                var task = removeTasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
              }
            }

            if (captureTasks) {
              var removeTasks = captureTasks.slice();

              for (var i = 0; i < removeTasks.length; i++) {
                var task = removeTasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
              }
            }
          }
        }

        if (returnTarget) {
          return this;
        }
      }; // for native toString patch


      attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
      attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

      if (nativeRemoveAllListeners) {
        attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
      }

      if (nativeListeners) {
        attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
      }

      return true;
    }

    var results = [];

    for (var i = 0; i < apis.length; i++) {
      results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }

    return results;
  }

  function findEventTasks(target, eventName) {
    if (!eventName) {
      var foundTasks = [];

      for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];

        if (evtName && (!eventName || evtName === eventName)) {
          var tasks = target[prop];

          if (tasks) {
            for (var i = 0; i < tasks.length; i++) {
              foundTasks.push(tasks[i]);
            }
          }
        }
      }

      return foundTasks;
    }

    var symbolEventName = zoneSymbolEventNames$1[eventName];

    if (!symbolEventName) {
      prepareEventNames(eventName);
      symbolEventName = zoneSymbolEventNames$1[eventName];
    }

    var captureFalseTasks = target[symbolEventName[FALSE_STR]];
    var captureTrueTasks = target[symbolEventName[TRUE_STR]];

    if (!captureFalseTasks) {
      return captureTrueTasks ? captureTrueTasks.slice() : [];
    } else {
      return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
    }
  }

  function patchEventPrototype(global, api) {
    var Event = global['Event'];

    if (Event && Event.prototype) {
      api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
        return function (self, args) {
          self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
          // in case in some hybrid application, some part of
          // application will be controlled by zone, some are not

          delegate && delegate.apply(self, args);
        };
      });
    }
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);

    if (target[symbol]) {
      return;
    }

    var nativeDelegate = target[symbol] = target[method];

    target[method] = function (name, opts, options) {
      if (opts && opts.prototype) {
        callbacks.forEach(function (callback) {
          var source = targetName + "." + method + "::" + callback;
          var prototype = opts.prototype;

          if (prototype.hasOwnProperty(callback)) {
            var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        });
      }

      return nativeDelegate.call(target, name, opts, options);
    };

    api.attachOriginToPatched(target[method], nativeDelegate);
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
  var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
  var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
  var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
  var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
  var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
  var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
  var formEventNames = ['autocomplete', 'autocompleteerror'];
  var detailEventNames = ['toggle'];
  var frameEventNames = ['load'];
  var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
  var marqueeEventNames = ['bounce', 'finish', 'start'];
  var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
  var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
  var websocketEventNames = ['close', 'error', 'open', 'message'];
  var workerEventNames = ['error', 'message'];
  var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

  function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
      return onProperties;
    }

    var tip = ignoreProperties.filter(function (ip) {
      return ip.target === target;
    });

    if (!tip || tip.length === 0) {
      return onProperties;
    }

    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) {
      return targetIgnoreProperties.indexOf(op) === -1;
    });
  }

  function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
      return;
    }

    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
  }

  function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
      return;
    }

    if (Zone[api.symbol('patchEvents')]) {
      // events are already been patched by legacy patch.
      return;
    }

    var supportsWebSocket = typeof WebSocket !== 'undefined';
    var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

    if (isBrowser) {
      var internalWindow_1 = window;
      var ignoreErrorProperties = isIE ? [{
        target: internalWindow_1,
        ignoreProperties: ['error']
      }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
      // so we need to pass WindowPrototype to check onProp exist or not

      patchFilteredProperties(internalWindow_1, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow_1));
      patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

      if (typeof internalWindow_1['SVGElement'] !== 'undefined') {
        patchFilteredProperties(internalWindow_1['SVGElement'].prototype, eventNames, ignoreProperties);
      }

      patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
      patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
      patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
      patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
      patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
      patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
      patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
      var HTMLMarqueeElement_1 = internalWindow_1['HTMLMarqueeElement'];

      if (HTMLMarqueeElement_1) {
        patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
      }

      var Worker_1 = internalWindow_1['Worker'];

      if (Worker_1) {
        patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
      }
    }

    var XMLHttpRequest = _global['XMLHttpRequest'];

    if (XMLHttpRequest) {
      // XMLHttpRequest is not available in ServiceWorker, so we need to check here
      patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }

    var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

    if (XMLHttpRequestEventTarget) {
      patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }

    if (typeof IDBIndex !== 'undefined') {
      patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
      patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
      patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
      patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
      patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
      patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }

    if (supportsWebSocket) {
      patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
    }
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.

    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

    if (global[SYMBOL_UNPATCHED_EVENTS]) {
      global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }

    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
      Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }

    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;

    api.getGlobalObjects = function () {
      return {
        globalSources: globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames$1,
        eventNames: eventNames,
        isBrowser: isBrowser,
        isMix: isMix,
        isNode: isNode,
        TRUE_STR: TRUE_STR,
        FALSE_STR: FALSE_STR,
        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
      };
    };
  });
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  /*
   * This is necessary for Chrome and Chrome mobile, to enable
   * things like redefining `createdCallback` on an element.
   */


  var zoneSymbol$1;

  var _defineProperty;

  var _getOwnPropertyDescriptor;

  var _create;

  var unconfigurablesKey;

  function propertyPatch() {
    zoneSymbol$1 = Zone.__symbol__;
    _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
    _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;
    _create = Object.create;
    unconfigurablesKey = zoneSymbol$1('unconfigurables');

    Object.defineProperty = function (obj, prop, desc) {
      if (isUnconfigurable(obj, prop)) {
        throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
      }

      var originalConfigurableFlag = desc.configurable;

      if (prop !== 'prototype') {
        desc = rewriteDescriptor(obj, prop, desc);
      }

      return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };

    Object.defineProperties = function (obj, props) {
      Object.keys(props).forEach(function (prop) {
        Object.defineProperty(obj, prop, props[prop]);
      });
      return obj;
    };

    Object.create = function (obj, proto) {
      if (typeof proto === 'object' && !Object.isFrozen(proto)) {
        Object.keys(proto).forEach(function (prop) {
          proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
        });
      }

      return _create(obj, proto);
    };

    Object.getOwnPropertyDescriptor = function (obj, prop) {
      var desc = _getOwnPropertyDescriptor(obj, prop);

      if (desc && isUnconfigurable(obj, prop)) {
        desc.configurable = false;
      }

      return desc;
    };
  }

  function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
  }

  function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
  }

  function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
      desc.configurable = true;
    }

    if (!desc.configurable) {
      // issue-927, if the obj is frozen, don't try to set the desc to obj
      if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
        _defineProperty(obj, unconfigurablesKey, {
          writable: true,
          value: {}
        });
      }

      if (obj[unconfigurablesKey]) {
        obj[unconfigurablesKey][prop] = true;
      }
    }

    return desc;
  }

  function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
      return _defineProperty(obj, prop, desc);
    } catch (error) {
      if (desc.configurable) {
        // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
        // retry with the original flag value
        if (typeof originalConfigurableFlag == 'undefined') {
          delete desc.configurable;
        } else {
          desc.configurable = originalConfigurableFlag;
        }

        try {
          return _defineProperty(obj, prop, desc);
        } catch (error) {
          var descJson = null;

          try {
            descJson = JSON.stringify(desc);
          } catch (error) {
            descJson = desc.toString();
          }

          console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
        }
      } else {
        throw error;
      }
    }
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function eventTargetLegacyPatch(_global, api) {
    var _a = api.getGlobalObjects(),
        eventNames = _a.eventNames,
        globalSources = _a.globalSources,
        zoneSymbolEventNames = _a.zoneSymbolEventNames,
        TRUE_STR = _a.TRUE_STR,
        FALSE_STR = _a.FALSE_STR,
        ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;

    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'.split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');

    if (isWtf) {
      // Workaround for: https://github.com/google/tracing-framework/issues/555
      apis = WTF_ISSUE_555_ARRAY.map(function (v) {
        return 'HTML' + v + 'Element';
      }).concat(NO_EVENT_TARGET);
    } else if (_global[EVENT_TARGET]) {
      apis.push(EVENT_TARGET);
    } else {
      // Note: EventTarget is not available in all browsers,
      // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
      apis = NO_EVENT_TARGET;
    }

    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = api.isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    var pointerEventsMap = {
      'MSPointerCancel': 'pointercancel',
      'MSPointerDown': 'pointerdown',
      'MSPointerEnter': 'pointerenter',
      'MSPointerHover': 'pointerhover',
      'MSPointerLeave': 'pointerleave',
      'MSPointerMove': 'pointermove',
      'MSPointerOut': 'pointerout',
      'MSPointerOver': 'pointerover',
      'MSPointerUp': 'pointerup'
    }; //  predefine all __zone_symbol__ + eventName + true/false string

    for (var i = 0; i < eventNames.length; i++) {
      var eventName = eventNames[i];
      var falseEventName = eventName + FALSE_STR;
      var trueEventName = eventName + TRUE_STR;
      var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
      var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
      zoneSymbolEventNames[eventName] = {};
      zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
      zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    } //  predefine all task.source string


    for (var i = 0; i < WTF_ISSUE_555_ARRAY.length; i++) {
      var target = WTF_ISSUE_555_ARRAY[i];
      var targets = globalSources[target] = {};

      for (var j = 0; j < eventNames.length; j++) {
        var eventName = eventNames[j];
        targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
      }
    }

    var checkIEAndCrossContext = function checkIEAndCrossContext(nativeDelegate, delegate, target, args) {
      if (!isDisableIECheck && ieOrEdge) {
        if (isEnableCrossContextCheck) {
          try {
            var testString = delegate.toString();

            if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
              nativeDelegate.apply(target, args);
              return false;
            }
          } catch (error) {
            nativeDelegate.apply(target, args);
            return false;
          }
        } else {
          var testString = delegate.toString();

          if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
            nativeDelegate.apply(target, args);
            return false;
          }
        }
      } else if (isEnableCrossContextCheck) {
        try {
          delegate.toString();
        } catch (error) {
          nativeDelegate.apply(target, args);
          return false;
        }
      }

      return true;
    };

    var apiTypes = [];

    for (var i = 0; i < apis.length; i++) {
      var type = _global[apis[i]];
      apiTypes.push(type && type.prototype);
    } // vh is validateHandler to check event handler
    // is valid or not(for security check)


    api.patchEventTarget(_global, apiTypes, {
      vh: checkIEAndCrossContext,
      transferEventName: function transferEventName(eventName) {
        var pointerEventName = pointerEventsMap[eventName];
        return pointerEventName || eventName;
      }
    });
    Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
    return true;
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
  // we have to patch the instance since the proto is non-configurable


  function apply(api, _global) {
    var _a = api.getGlobalObjects(),
        ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;

    var WS = _global.WebSocket; // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched

    if (!_global.EventTarget) {
      api.patchEventTarget(_global, [WS.prototype]);
    }

    _global.WebSocket = function (x, y) {
      var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
      var proxySocket;
      var proxySocketProto; // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance

      var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');

      if (onmessageDesc && onmessageDesc.configurable === false) {
        proxySocket = api.ObjectCreate(socket); // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
        // but proxySocket not, so we will keep socket as prototype and pass it to
        // patchOnProperties method

        proxySocketProto = socket;
        [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
          proxySocket[propName] = function () {
            var args = api.ArraySlice.call(arguments);

            if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
              var eventName = args.length > 0 ? args[0] : undefined;

              if (eventName) {
                var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);

                socket[propertySymbol] = proxySocket[propertySymbol];
              }
            }

            return socket[propName].apply(socket, args);
          };
        });
      } else {
        // we can patch the real socket
        proxySocket = socket;
      }

      api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
      return proxySocket;
    };

    var globalWebSocket = _global['WebSocket'];

    for (var prop in WS) {
      globalWebSocket[prop] = WS[prop];
    }
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function propertyDescriptorLegacyPatch(api, _global) {
    var _a = api.getGlobalObjects(),
        isNode = _a.isNode,
        isMix = _a.isMix;

    if (isNode && !isMix) {
      return;
    }

    if (!canPatchViaPropertyDescriptor(api, _global)) {
      var supportsWebSocket = typeof WebSocket !== 'undefined'; // Safari, Android browsers (Jelly Bean)

      patchViaCapturingAllTheEvents(api);
      api.patchClass('XMLHttpRequest');

      if (supportsWebSocket) {
        apply(api, _global);
      }

      Zone[api.symbol('patchEvents')] = true;
    }
  }

  function canPatchViaPropertyDescriptor(api, _global) {
    var _a = api.getGlobalObjects(),
        isBrowser = _a.isBrowser,
        isMix = _a.isMix;

    if ((isBrowser || isMix) && !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') && typeof Element !== 'undefined') {
      // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
      // IDL interface attributes are not configurable
      var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
      if (desc && !desc.configurable) return false; // try to use onclick to detect whether we can patch via propertyDescriptor
      // because XMLHttpRequest is not available in service worker

      if (desc) {
        api.ObjectDefineProperty(Element.prototype, 'onclick', {
          enumerable: true,
          configurable: true,
          get: function get() {
            return true;
          }
        });
        var div = document.createElement('div');
        var result = !!div.onclick;
        api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
        return result;
      }
    }

    var XMLHttpRequest = _global['XMLHttpRequest'];

    if (!XMLHttpRequest) {
      // XMLHttpRequest is not available in service worker
      return false;
    }

    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE); // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one

    if (xhrDesc) {
      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return true;
        }
      });
      var req = new XMLHttpRequest();
      var result = !!req.onreadystatechange; // restore original desc

      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
      return result;
    } else {
      var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
        },
        set: function set(value) {
          this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
        }
      });
      var req = new XMLHttpRequest();

      var detectFunc = function detectFunc() {};

      req.onreadystatechange = detectFunc;
      var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
      req.onreadystatechange = null;
      return result;
    }
  } // Whenever any eventListener fires, we check the eventListener target and all parents
  // for `onwhatever` properties and replace them with zone-bound functions
  // - Chrome (for now)


  function patchViaCapturingAllTheEvents(api) {
    var eventNames = api.getGlobalObjects().eventNames;
    var unboundKey = api.symbol('unbound');

    var _loop_4 = function _loop_4(i) {
      var property = eventNames[i];
      var onproperty = 'on' + property;
      self.addEventListener(property, function (event) {
        var elt = event.target,
            bound,
            source;

        if (elt) {
          source = elt.constructor['name'] + '.' + onproperty;
        } else {
          source = 'unknown.' + onproperty;
        }

        while (elt) {
          if (elt[onproperty] && !elt[onproperty][unboundKey]) {
            bound = api.wrapWithCurrentZone(elt[onproperty], source);
            bound[unboundKey] = elt[onproperty];
            elt[onproperty] = bound;
          }

          elt = elt.parentElement;
        }
      }, true);
    };

    for (var i = 0; i < eventNames.length; i++) {
      _loop_4(i);
    }
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function registerElementPatch(_global, api) {
    var _a = api.getGlobalObjects(),
        isBrowser = _a.isBrowser,
        isMix = _a.isMix;

    if (!isBrowser && !isMix || !('registerElement' in _global.document)) {
      return;
    }

    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  (function (_global) {
    var symbolPrefix = _global['__Zone_symbol_prefix'] || '__zone_symbol__';

    function __symbol__(name) {
      return symbolPrefix + name;
    }

    _global[__symbol__('legacyPatch')] = function () {
      var Zone = _global['Zone'];

      Zone.__load_patch('defineProperty', function (global, Zone, api) {
        api._redefineProperty = _redefineProperty;
        propertyPatch();
      });

      Zone.__load_patch('registerElement', function (global, Zone, api) {
        registerElementPatch(global, api);
      });

      Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
        eventTargetLegacyPatch(global, api);
        propertyDescriptorLegacyPatch(api, global);
      });
    };
  })(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  var taskSymbol = zoneSymbol('zoneTask');

  function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};

    function scheduleTask(task) {
      var data = task.data;

      function timer() {
        try {
          task.invoke.apply(this, arguments);
        } finally {
          // issue-934, task will be cancelled
          // even it is a periodic task such as
          // setInterval
          if (!(task.data && task.data.isPeriodic)) {
            if (typeof data.handleId === 'number') {
              // in non-nodejs env, we remove timerId
              // from local cache
              delete tasksByHandleId[data.handleId];
            } else if (data.handleId) {
              // Node returns complex objects as handleIds
              // we remove task reference from timer object
              data.handleId[taskSymbol] = null;
            }
          }
        }
      }

      data.args[0] = timer;
      data.handleId = setNative.apply(window, data.args);
      return task;
    }

    function clearTask(task) {
      return clearNative(task.data.handleId);
    }

    setNative = patchMethod(window, setName, function (delegate) {
      return function (self, args) {
        if (typeof args[0] === 'function') {
          var options = {
            isPeriodic: nameSuffix === 'Interval',
            delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
            args: args
          };
          var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);

          if (!task) {
            return task;
          } // Node.js must additionally support the ref and unref functions.


          var handle = task.data.handleId;

          if (typeof handle === 'number') {
            // for non nodejs env, we save handleId: task
            // mapping in local cache for clearTimeout
            tasksByHandleId[handle] = task;
          } else if (handle) {
            // for nodejs env, we save task
            // reference in timerId Object for clearTimeout
            handle[taskSymbol] = task;
          } // check whether handle is null, because some polyfill or browser
          // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


          if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
            task.ref = handle.ref.bind(handle);
            task.unref = handle.unref.bind(handle);
          }

          if (typeof handle === 'number' || handle) {
            return handle;
          }

          return task;
        } else {
          // cause an error by calling it directly.
          return delegate.apply(window, args);
        }
      };
    });
    clearNative = patchMethod(window, cancelName, function (delegate) {
      return function (self, args) {
        var id = args[0];
        var task;

        if (typeof id === 'number') {
          // non nodejs env.
          task = tasksByHandleId[id];
        } else {
          // nodejs env.
          task = id && id[taskSymbol]; // other environments.

          if (!task) {
            task = id;
          }
        }

        if (task && typeof task.type === 'string') {
          if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
            if (typeof id === 'number') {
              delete tasksByHandleId[id];
            } else if (id) {
              id[taskSymbol] = null;
            } // Do not cancel already canceled functions


            task.zone.cancelTask(task);
          }
        } else {
          // cause an error by calling it directly.
          delegate.apply(window, args);
        }
      };
    });
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function patchCustomElements(_global, api) {
    var _a = api.getGlobalObjects(),
        isBrowser = _a.isBrowser,
        isMix = _a.isMix;

    if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
      return;
    }

    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
      // EventTarget is already patched.
      return;
    }

    var _a = api.getGlobalObjects(),
        eventNames = _a.eventNames,
        zoneSymbolEventNames = _a.zoneSymbolEventNames,
        TRUE_STR = _a.TRUE_STR,
        FALSE_STR = _a.FALSE_STR,
        ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


    for (var i = 0; i < eventNames.length; i++) {
      var eventName = eventNames[i];
      var falseEventName = eventName + FALSE_STR;
      var trueEventName = eventName + TRUE_STR;
      var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
      var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
      zoneSymbolEventNames[eventName] = {};
      zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
      zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }

    var EVENT_TARGET = _global['EventTarget'];

    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
      return;
    }

    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
  }

  function patchEvent(global, api) {
    api.patchEventPrototype(global, api);
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('legacy', function (global) {
    var legacyPatch = global[Zone.__symbol__('legacyPatch')];

    if (legacyPatch) {
      legacyPatch();
    }
  });

  Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
  });

  Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
  });

  Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];

    for (var i = 0; i < blockingMethods.length; i++) {
      var name_2 = blockingMethods[i];
      patchMethod(global, name_2, function (delegate, symbol, name) {
        return function (s, args) {
          return Zone.current.run(delegate, global, args, name);
        };
      });
    }
  });

  Zone.__load_patch('EventTarget', function (global, Zone, api) {
    patchEvent(global, api);
    eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
      api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }

    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
  });

  Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
  });

  Zone.__load_patch('customElements', function (global, Zone, api) {
    patchCustomElements(global, api);
  });

  Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

    function patchXHR(window) {
      var XMLHttpRequest = window['XMLHttpRequest'];

      if (!XMLHttpRequest) {
        // XMLHttpRequest is not available in service worker
        return;
      }

      var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

      function findPendingTask(target) {
        return target[XHR_TASK];
      }

      var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
      var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

      if (!oriAddListener) {
        var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget_1) {
          var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
          oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
      }

      var READY_STATE_CHANGE = 'readystatechange';
      var SCHEDULED = 'scheduled';

      function scheduleTask(task) {
        var data = task.data;
        var target = data.target;
        target[XHR_SCHEDULED] = false;
        target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

        var listener = target[XHR_LISTENER];

        if (!oriAddListener) {
          oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }

        if (listener) {
          oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
        }

        var newListener = target[XHR_LISTENER] = function () {
          if (target.readyState === target.DONE) {
            // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
            // readyState=4 multiple times, so we need to check task state here
            if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
              // check whether the xhr has registered onload listener
              // if that is the case, the task should invoke after all
              // onload listeners finish.
              var loadTasks = target[Zone.__symbol__('loadfalse')];

              if (loadTasks && loadTasks.length > 0) {
                var oriInvoke_1 = task.invoke;

                task.invoke = function () {
                  // need to load the tasks again, because in other
                  // load listener, they may remove themselves
                  var loadTasks = target[Zone.__symbol__('loadfalse')];

                  for (var i = 0; i < loadTasks.length; i++) {
                    if (loadTasks[i] === task) {
                      loadTasks.splice(i, 1);
                    }
                  }

                  if (!data.aborted && task.state === SCHEDULED) {
                    oriInvoke_1.call(task);
                  }
                };

                loadTasks.push(task);
              } else {
                task.invoke();
              }
            } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
              // error occurs when xhr.send()
              target[XHR_ERROR_BEFORE_SCHEDULED] = true;
            }
          }
        };

        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
        var storedTask = target[XHR_TASK];

        if (!storedTask) {
          target[XHR_TASK] = task;
        }

        sendNative.apply(target, data.args);
        target[XHR_SCHEDULED] = true;
        return task;
      }

      function placeholderCallback() {}

      function clearTask(task) {
        var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
        // to prevent it from firing. So instead, we store info for the event listener.

        data.aborted = true;
        return abortNative.apply(data.target, data.args);
      }

      var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
        return function (self, args) {
          self[XHR_SYNC] = args[2] == false;
          self[XHR_URL] = args[1];
          return openNative.apply(self, args);
        };
      });
      var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
      var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
      var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
      var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
        return function (self, args) {
          if (Zone.current[fetchTaskScheduling] === true) {
            // a fetch is scheduling, so we are using xhr to polyfill fetch
            // and because we already schedule macroTask for fetch, we should
            // not schedule a macroTask for xhr again
            return sendNative.apply(self, args);
          }

          if (self[XHR_SYNC]) {
            // if the XHR is sync there is no task to schedule, just execute the code.
            return sendNative.apply(self, args);
          } else {
            var options = {
              target: self,
              url: self[XHR_URL],
              isPeriodic: false,
              args: args,
              aborted: false
            };
            var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);

            if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
              // xhr request throw error when send
              // we should invoke task instead of leaving a scheduled
              // pending macroTask
              task.invoke();
            }
          }
        };
      });
      var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
        return function (self, args) {
          var task = findPendingTask(self);

          if (task && typeof task.type == 'string') {
            // If the XHR has already completed, do nothing.
            // If the XHR has already been aborted, do nothing.
            // Fix #569, call abort multiple times before done will cause
            // macroTask task count be negative number
            if (task.cancelFn == null || task.data && task.data.aborted) {
              return;
            }

            task.zone.cancelTask(task);
          } else if (Zone.current[fetchTaskAborting] === true) {
            // the abort is called from fetch polyfill, we need to call native abort of XHR.
            return abortNative.apply(self, args);
          } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
          // task
          // to cancel. Do nothing.

        };
      });
    }
  });

  Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
      patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
  });

  Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
      return function (e) {
        var eventTasks = findEventTasks(global, evtName);
        eventTasks.forEach(function (eventTask) {
          // windows has added unhandledrejection event listener
          // trigger the event listener
          var PromiseRejectionEvent = global['PromiseRejectionEvent'];

          if (PromiseRejectionEvent) {
            var evt = new PromiseRejectionEvent(evtName, {
              promise: e.promise,
              reason: e.rejection
            });
            eventTask.invoke(evt);
          }
        });
      };
    }

    if (global['PromiseRejectionEvent']) {
      Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
      Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
    }
  });
});

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"default~app-admin-admin-module~app-events-event-module~app-gallery-gallery-module~app-news-news-module",
		"default~app-admin-admin-module~app-events-event-module~app-news-news-module",
		"default~app-admin-admin-module~app-gallery-gallery-module",
		"default~app-admin-admin-module~app-events-event-module",
		"app-admin-admin-module"
	],
	"app/committee/committee.module": [
		"./src/app/committee/committee.module.ts",
		"app-committee-committee-module"
	],
	"app/events/event.module": [
		"./src/app/events/event.module.ts",
		"default~app-admin-admin-module~app-events-event-module~app-gallery-gallery-module~app-news-news-module",
		"default~app-admin-admin-module~app-events-event-module~app-news-news-module",
		"default~app-admin-admin-module~app-events-event-module",
		"app-events-event-module"
	],
	"app/gallery/gallery.module": [
		"./src/app/gallery/gallery.module.ts",
		"default~app-admin-admin-module~app-events-event-module~app-gallery-gallery-module~app-news-news-module",
		"default~app-admin-admin-module~app-gallery-gallery-module",
		"app-gallery-gallery-module"
	],
	"app/home/home.module": [
		"./src/app/home/home.module.ts"
	],
	"app/login/login.module": [
		"./src/app/login/login.module.ts",
		"app-login-login-module"
	],
	"app/news/news.module": [
		"./src/app/news/news.module.ts",
		"default~app-admin-admin-module~app-events-event-module~app-gallery-gallery-module~app-news-news-module",
		"default~app-admin-admin-module~app-events-event-module~app-news-news-module",
		"app-news-news-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _selective_preload_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selective-preload-strategy */ "./src/app/selective-preload-strategy.ts");
/* harmony import */ var _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/admin-guard.service */ "./src/app/guards/admin-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canActivate: [_guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]]
    },
    {
        path: 'news',
        loadChildren: 'app/news/news.module#NewsModule'
    },
    {
        path: 'events',
        loadChildren: 'app/events/event.module#EventModule'
    },
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule'
    },
    {
        path: 'gallery',
        loadChildren: 'app/gallery/gallery.module#Gallery'
    },
    {
        path: 'committee',
        loadChildren: 'app/committee/committee.module#CommitteeModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _selective_preload_strategy__WEBPACK_IMPORTED_MODULE_2__["PreloadSelectedModules"] })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Custom Stylesheet */\n/**\n * Use this file to override Materialize files so you can update\n * the core Materialize files in the future\n *\n * Made By MaterializeCSS.com\n */\nnav .brand-logo {\n    color: #00B060;\n}\nnav ul a {\n    color: #00B060;\n}\np {\n    line-height: 2rem;\n}\n#logo-container img {\n    float: left;\n    height: 65px;\n}\n@media only screen and (min-width: 1520px) {\n    i.left {\n        margin-right: 10px;\n    }\n}\n@media only screen and (min-width: 992px) and (max-width: 1520px) {\n\n    i.left {\n        margin-right: 0;\n    }\n\n    nav ul li a span {\n        display: none;\n    }\n\n    .nav-wrapper.container {\n        width: 100%;\n    }\n}\n@media only screen and (max-width: 992px) {\n    #index-banner .section {\n        top: 10%;\n    }\n\n    #recaptcha {\n        margin: 20px 0 0 0;\n    }\n}\n@media only screen and (max-width: 600px) {\n    #index-banner .section {\n        top: 0;\n    }\n}\n.icon-block {\n    padding: 0 15px;\n}\n.icon-block .material-icons {\n    font-size: inherit;\n}\nfooter.page-footer {\n    margin: 0;\n}\n.page-footer {\n    background: #00B060;\n    color: #FFF;\n}\n.footer-copyright {\n    background: #00894B;\n}\n.teal {\n    background: #FF6F39 !important;\n}\n.input-field .prefix {\n    top: 13px;\n}\n/* label color */\n.input-field label {\n    color: #FFF;\n}\n/* label focus color */\n.input-field input:focus + label,\n.input-field textarea:focus + label {\n    color: #FFF;\n}\n/* label underline focus color */\n.input-field input,\n.input-field textarea {\n    border-bottom: 2px solid #FFF;\n}\n/* label underline focus color */\n.input-field input:focus,\n.input-field textarea:focus {\n    border-bottom: 2px solid #FF6F39;\n}\n/* valid color */\n.input-field input.valid {\n    border-bottom: 2px solid #FF6F39;\n}\n/* invalid color */\n.input-field input.invalid {\n    border-bottom: 2px solid #FF6F39;\n}\n/* icon prefix focus color */\n.input-field .prefix.active {\n    color: #FFF;\n}\n#email-button:disabled\n#email-button[disabled] {\n    color: #FFF !important;\n    opacity: 0.7 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCO0FBQ3RCOzs7OztFQUtFO0FBRUY7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKO0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKO0FBRUE7SUFDSTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKO0FBRUE7SUFDSTtRQUNJLE1BQU07SUFDVjtBQUNKO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLFdBQVc7QUFDZjtBQUVBLHNCQUFzQjtBQUN0Qjs7SUFFSSxXQUFXO0FBQ2Y7QUFFQSxnQ0FBZ0M7QUFDaEM7O0lBRUksNkJBQTZCO0FBQ2pDO0FBRUEsZ0NBQWdDO0FBQ2hDOztJQUVJLGdDQUFnQztBQUNwQztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLGdDQUFnQztBQUNwQztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLGdDQUFnQztBQUNwQztBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLFdBQVc7QUFDZjtBQUVBOztJQUVJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEN1c3RvbSBTdHlsZXNoZWV0ICovXG4vKipcbiAqIFVzZSB0aGlzIGZpbGUgdG8gb3ZlcnJpZGUgTWF0ZXJpYWxpemUgZmlsZXMgc28geW91IGNhbiB1cGRhdGVcbiAqIHRoZSBjb3JlIE1hdGVyaWFsaXplIGZpbGVzIGluIHRoZSBmdXR1cmVcbiAqXG4gKiBNYWRlIEJ5IE1hdGVyaWFsaXplQ1NTLmNvbVxuICovXG5cbm5hdiAuYnJhbmQtbG9nbyB7XG4gICAgY29sb3I6ICMwMEIwNjA7XG59XG5cbm5hdiB1bCBhIHtcbiAgICBjb2xvcjogIzAwQjA2MDtcbn1cblxucCB7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5cbiNsb2dvLWNvbnRhaW5lciBpbWcge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogNjVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTIwcHgpIHtcbiAgICBpLmxlZnQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTUyMHB4KSB7XG5cbiAgICBpLmxlZnQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgbmF2IHVsIGxpIGEgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLm5hdi13cmFwcGVyLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICNpbmRleC1iYW5uZXIgLnNlY3Rpb24ge1xuICAgICAgICB0b3A6IDEwJTtcbiAgICB9XG5cbiAgICAjcmVjYXB0Y2hhIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICNpbmRleC1iYW5uZXIgLnNlY3Rpb24ge1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxufVxuXG4uaWNvbi1ibG9jayB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uaWNvbi1ibG9jayAubWF0ZXJpYWwtaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuZm9vdGVyLnBhZ2UtZm9vdGVyIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5wYWdlLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogIzAwQjA2MDtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmZvb3Rlci1jb3B5cmlnaHQge1xuICAgIGJhY2tncm91bmQ6ICMwMDg5NEI7XG59XG5cbi50ZWFsIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkY2RjM5ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1maWVsZCAucHJlZml4IHtcbiAgICB0b3A6IDEzcHg7XG59XG5cbi8qIGxhYmVsIGNvbG9yICovXG4uaW5wdXQtZmllbGQgbGFiZWwge1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4vKiBsYWJlbCBmb2N1cyBjb2xvciAqL1xuLmlucHV0LWZpZWxkIGlucHV0OmZvY3VzICsgbGFiZWwsXG4uaW5wdXQtZmllbGQgdGV4dGFyZWE6Zm9jdXMgKyBsYWJlbCB7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi8qIGxhYmVsIHVuZGVybGluZSBmb2N1cyBjb2xvciAqL1xuLmlucHV0LWZpZWxkIGlucHV0LFxuLmlucHV0LWZpZWxkIHRleHRhcmVhIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGRjtcbn1cblxuLyogbGFiZWwgdW5kZXJsaW5lIGZvY3VzIGNvbG9yICovXG4uaW5wdXQtZmllbGQgaW5wdXQ6Zm9jdXMsXG4uaW5wdXQtZmllbGQgdGV4dGFyZWE6Zm9jdXMge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkY2RjM5O1xufVxuXG4vKiB2YWxpZCBjb2xvciAqL1xuLmlucHV0LWZpZWxkIGlucHV0LnZhbGlkIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGNkYzOTtcbn1cblxuLyogaW52YWxpZCBjb2xvciAqL1xuLmlucHV0LWZpZWxkIGlucHV0LmludmFsaWQge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkY2RjM5O1xufVxuXG4vKiBpY29uIHByZWZpeCBmb2N1cyBjb2xvciAqL1xuLmlucHV0LWZpZWxkIC5wcmVmaXguYWN0aXZlIHtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuI2VtYWlsLWJ1dHRvbjpkaXNhYmxlZFxuI2VtYWlsLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMC43ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var AppComponent = /** @class */ (function () {
    function AppComponent(_authService, router, http, snackBar) {
        this._authService = _authService;
        this.router = router;
        this.http = http;
        this.snackBar = snackBar;
        this.date = new Date();
        this.isValid = false;
        this.reCapKey = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].recaptcha;
        this.contact = {
            name: '',
            email: '',
            message: ''
        };
        this.options = {
            timeOut: 1000,
            theClass: 'notificationPopup',
            showProgressBar: false,
            pauseOnHover: true,
            clickToClose: true
        };
        /**
         * Nasty work around for the window not scrolling up on navigation
         */
        this.router.events.subscribe(function (path) {
            window.scroll(0, 0);
        });
        $(document).ready(function () {
            $('.button-collapse').sideNav({
                menuWidth: 300,
                edge: 'left',
                closeOnClick: true,
                draggable: true // Choose whether you can drag to open on touch screens
            });
        });
    }
    AppComponent.prototype.send = function () {
        var _this = this;
        if (this.contact.email === ''
            || this.contact.name === ''
            || this.contact.message === '') {
            this.snackBar.open('All fields are required', null, {
                panelClass: ['error-snackbar'],
                duration: 3000
            });
            return;
        }
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'public/contact', this.contact)
            .toPromise()
            .then(function (res) {
            _this.snackBar.open('Message Sent', null, {
                duration: 3000
            });
        })
            .catch(function (res) {
            _this.snackBar.open(res.statusText, null, {
                panelClass: ['error-snackbar'],
                duration: 3000
            });
        })
            .then(function () {
            _this.captchaRef.reset();
            _this.isValid = false;
            _this.contact = {
                name: '',
                email: '',
                message: ''
            };
        });
    };
    AppComponent.prototype.resolved = function (event) {
        this.isValid = true;
    };
    AppComponent.prototype.isDisabled = function () {
        return !this.isValid;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    AppComponent.propDecorators = {
        captchaRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['captchaRef',] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _selective_preload_strategy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selective-preload-strategy */ "./src/app/selective-preload-strategy.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/admin-guard.service */ "./src/app/guards/admin-guard.service.ts");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/__ivy_ngcc__/index.js");
/* harmony import */ var _services_gallery_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/gallery.service */ "./src/app/services/gallery.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/__ivy_ngcc__/fesm2015/angular2-notifications.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/__ivy_ngcc__/fesm2015/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                ngx_cookie__WEBPACK_IMPORTED_MODULE_22__["CookieModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_17__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBpsq3G-5fwmAmgEnYtsiss5oEXkuWYMu8',
                    libraries: ['geometry']
                }),
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_18__["RecaptchaModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_14__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_14__["FroalaViewModule"].forRoot(),
                _shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_16__["SimpleNotificationsModule"].forRoot()
            ],
            providers: [
                _selective_preload_strategy__WEBPACK_IMPORTED_MODULE_7__["PreloadSelectedModules"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
                _services_admin_service__WEBPACK_IMPORTED_MODULE_12__["AdminService"],
                _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"],
                _services_gallery_service__WEBPACK_IMPORTED_MODULE_15__["GalleryService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/in-view.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/in-view.directive.ts ***!
  \*************************************************/
/*! exports provided: InViewportDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InViewportDirective", function() { return InViewportDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InViewportDirective = /** @class */ (function () {
    function InViewportDirective(_el) {
        this._el = _el;
        this.inViewport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Perform an initial check on the elements visibility and set up event listeners
     */
    InViewportDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.check();
        this.scroll = Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'scroll')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100))
            .subscribe(function (event) {
            _this.check();
        });
        this.resize = Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100))
            .subscribe(function (event) {
            _this.check();
        });
    };
    /**
     * Clean up even listeners ( garbage collection )
     */
    InViewportDirective.prototype.ngOnDestroy = function () {
        this.scroll.unsubscribe();
        this.resize.unsubscribe();
    };
    /**
     * Check if the element is in the users view port
     * @param partial
     * @param direction
     */
    InViewportDirective.prototype.check = function (partial, direction) {
        if (partial === void 0) { partial = true; }
        if (direction === void 0) { direction = 'both'; }
        var el = this._el.nativeElement;
        var elSize = (el.offsetWidth * el.offsetHeight);
        var rec = el.getBoundingClientRect();
        var vp = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        var tViz = rec.top >= 0 && rec.top < vp.height;
        var bViz = rec.bottom > 0 && rec.bottom <= vp.height;
        var lViz = rec.left >= 0 && rec.left < vp.width;
        var rViz = rec.right > 0 && rec.right <= vp.width;
        var vVisible = partial ? tViz || bViz : tViz && bViz;
        var hVisible = partial ? lViz || rViz : lViz && rViz;
        var event = {
            target: el,
            value: false
        };
        if (direction === 'both') {
            event['value'] = (elSize && vVisible && hVisible) ? true : false;
        }
        else if (direction === 'vertical') {
            event['value'] = (elSize && vVisible) ? true : false;
        }
        else if (direction === 'horizontal') {
            event['value'] = (elSize && hVisible) ? true : false;
        }
        this.inViewport.emit(event);
    };
    InViewportDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    InViewportDirective.propDecorators = {
        inViewport: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['inViewport',] }]
    };
    InViewportDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[in-viewport]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], InViewportDirective);
    return InViewportDirective;
}());



/***/ }),

/***/ "./src/app/directives/postobottom.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/postobottom.directive.ts ***!
  \*****************************************************/
/*! exports provided: PosToBottomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosToBottomDirective", function() { return PosToBottomDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PosToBottomDirective = /** @class */ (function () {
    function PosToBottomDirective(el) {
        this.offset = null;
        this.noScroll = false;
        this.square = false;
        this.el = el;
        this.el.nativeElement.style.height = 'auto';
    }
    PosToBottomDirective.prototype.onResize = function (event) {
        this.calcSize();
    };
    PosToBottomDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var timer = setTimeout(function (event) {
            _this.calcSize();
        });
    };
    PosToBottomDirective.prototype.calcSize = function () {
        if (this.offset == null || this.offset == "") {
            this.offset = 0;
        }
        var viewport = this.el.nativeElement.getBoundingClientRect();
        var paddingOffset = 10;
        var top = parseInt(viewport.top);
        var offset = (top + paddingOffset + parseInt(this.offset));
        this.el.nativeElement.style.overflowY = this.noScroll ? 'hidden' : 'auto';
        var height = 'calc(100vh - ' + offset + 'px)';
        this.el.nativeElement.style.height = height;
        if (this.square) {
            this.el.nativeElement.style.width = height;
        }
    };
    PosToBottomDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    PosToBottomDirective.propDecorators = {
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event'],] }],
        offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['pos-to-bottom',] }],
        noScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['pos-to-bottom-no-scroll',] }],
        square: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['pos-to-bottom-square',] }]
    };
    PosToBottomDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[pos-to-bottom]', exportAs: 'posToBottom' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PosToBottomDirective);
    return PosToBottomDirective;
}());



/***/ }),

/***/ "./src/app/guards/admin-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/guards/admin-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(router, _authService) {
        this.router = router;
        this._authService = _authService;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        var isValid = this._authService.isLoggedIn && this._authService.user._role === 'admin';
        if (isValid) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AdminGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var homeRoutes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(homeRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".parallax-container {\n    min-height: 435px;\n    line-height: 0;\n    height: auto;\n    color: #FFF;\n    font-weight: 600;\n    text-transform: uppercase;\n    text-shadow: 1px 1px 2px #808080;\n}\n\n.parallax-container h1 {\n    color: #FFF;\n    font-weight: 600;\n}\n\nh2 .material-icons {\n    font-size: 3.56rem;\n}\n\n@media only screen and (max-width: 600px) {\n    #index-banner .section {\n        top: 0;\n    }\n\n    .parallax-container h5 {\n        font-size: 4vw;\n    }\n\n    .parallax-container h1 {\n        color: #FFF;\n        font-weight: 600;\n        font-size: 8vw;\n    }\n\n    #logo-container img {\n        height: 55px;\n    }\n}\n\n/* Timeline */\n\n.timeline {\n    border-left: 8px solid #00b060;\n    border-bottom-right-radius: 2px;\n    border-top-right-radius: 2px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    color: #333;\n    margin: 50px auto;\n    letter-spacing: 0.5px;\n    position: relative;\n    line-height: 1.4em;\n    padding: 20px;\n    list-style: none;\n    text-align: left;\n    background: #FFF;\n}\n\n.timeline h1,\n.timeline h2,\n.timeline h3 {\n    font-size: 1.4em;\n}\n\n.timeline .event {\n    border-bottom: 1px solid rgba(160, 160, 160, 0.2);\n    padding-bottom: 15px;\n    margin-bottom: 20px;\n    position: relative;\n}\n\n.timeline .event:last-of-type {\n    padding-bottom: 0;\n    margin-bottom: 0;\n    border: none;\n}\n\n.timeline .event:before,\n.timeline .event:after {\n    position: absolute;\n    display: block;\n    top: 0;\n}\n\n.timeline .event:before {\n    left: -177.5px;\n    color: #212121;\n    content: attr(data-date);\n    text-align: right;\n    /*  font-weight: 100;*/\n\n    font-size: 16px;\n    min-width: 120px;\n}\n\n.timeline .event:after {\n    box-shadow: 0 0 0 8px #00b060;\n    left: -30px;\n    background: #212121;\n    border-radius: 50%;\n    height: 11px;\n    width: 11px;\n    content: \"\";\n    top: 5px;\n}\n\n.timeline .event button {\n    color: #FFF;\n}\n\n/**/\n\n/*——————————————\nResponsive Stuff\n———————————————*/\n\n#parallax-img {\n    display: block;\n    transform: translate3d(-50%, 30%, 0px);\n}\n\n@media (max-width: 945px) {\n    .timeline .event::before {\n        left: 0.5px;\n        top: 20px;\n        min-width: 0;\n        font-size: 13px;\n    }\n\n    .timeline h3 {\n        font-size: 16px;\n    }\n\n    .timeline p {\n        padding-top: 20px;\n    }\n\n    section.lab h3.card-title {\n        padding: 5px;\n        font-size: 16px\n    }\n}\n\n@media (max-width: 768px) {\n    .timeline .event::before {\n        left: 0.5px;\n        top: 20px;\n        min-width: 0;\n        font-size: 13px;\n    }\n\n    .timeline .event:nth-child(1)::before,\n    .timeline .event:nth-child(3)::before,\n    .timeline .event:nth-child(5)::before {\n        top: 38px;\n    }\n\n    .timeline h3 {\n        font-size: 16px;\n    }\n\n    .timeline p {\n        padding-top: 20px;\n    }\n}\n\n.footer-img-tags {\n    width: 24%;\n    margin: 5px;\n    cursor: pointer;\n}\n\n.footer-img-tags-tall {\n    width: 18%;\n    margin: 5px;\n}\n\n.timeline a {\n    color: #00b060 !important;\n}\n\n.sponsor-img {\n    width: 21%;\n    margin-bottom: 5px;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxNQUFNO0lBQ1Y7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtRQUNoQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBLGFBQWE7O0FBRWI7SUFDSSw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1Qiw2RUFBNkU7SUFDN0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7OztJQUdJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLE1BQU07QUFDVjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixzQkFBc0I7O0lBRXRCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLEdBQUc7O0FBQ0g7O2dCQUVnQjs7QUFFaEI7SUFDSSxjQUFjO0lBQ2Qsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsU0FBUztRQUNULFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxTQUFTO1FBQ1QsWUFBWTtRQUNaLGVBQWU7SUFDbkI7O0lBRUE7OztRQUdJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbGxheC1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDQzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICM4MDgwODA7XG59XG5cbi5wYXJhbGxheC1jb250YWluZXIgaDEge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgyIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgZm9udC1zaXplOiAzLjU2cmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgI2luZGV4LWJhbm5lciAuc2VjdGlvbiB7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG5cbiAgICAucGFyYWxsYXgtY29udGFpbmVyIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgfVxuXG4gICAgLnBhcmFsbGF4LWNvbnRhaW5lciBoMSB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDh2dztcbiAgICB9XG5cbiAgICAjbG9nby1jb250YWluZXIgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgIH1cbn1cblxuLyogVGltZWxpbmUgKi9cblxuLnRpbWVsaW5lIHtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICMwMGIwNjA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG59XG5cbi50aW1lbGluZSBoMSxcbi50aW1lbGluZSBoMixcbi50aW1lbGluZSBoMyB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuLnRpbWVsaW5lIC5ldmVudCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4yKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpbWVsaW5lIC5ldmVudDpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4udGltZWxpbmUgLmV2ZW50OmJlZm9yZSxcbi50aW1lbGluZSAuZXZlbnQ6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDA7XG59XG5cbi50aW1lbGluZSAuZXZlbnQ6YmVmb3JlIHtcbiAgICBsZWZ0OiAtMTc3LjVweDtcbiAgICBjb2xvcjogIzIxMjEyMTtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtZGF0ZSk7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLyogIGZvbnQtd2VpZ2h0OiAxMDA7Ki9cblxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xufVxuXG4udGltZWxpbmUgLmV2ZW50OmFmdGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCA4cHggIzAwYjA2MDtcbiAgICBsZWZ0OiAtMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDExcHg7XG4gICAgd2lkdGg6IDExcHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0b3A6IDVweDtcbn1cblxuLnRpbWVsaW5lIC5ldmVudCBidXR0b24ge1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4vKiovXG4vKuKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFxuUmVzcG9uc2l2ZSBTdHVmZlxu4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUKi9cblxuI3BhcmFsbGF4LWltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAzMCUsIDBweCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NDVweCkge1xuICAgIC50aW1lbGluZSAuZXZlbnQ6OmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IDAuNXB4O1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cblxuICAgIC50aW1lbGluZSBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAudGltZWxpbmUgcCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIHNlY3Rpb24ubGFiIGgzLmNhcmQtdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweFxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnRpbWVsaW5lIC5ldmVudDo6YmVmb3JlIHtcbiAgICAgICAgbGVmdDogMC41cHg7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lIC5ldmVudDpudGgtY2hpbGQoMSk6OmJlZm9yZSxcbiAgICAudGltZWxpbmUgLmV2ZW50Om50aC1jaGlsZCgzKTo6YmVmb3JlLFxuICAgIC50aW1lbGluZSAuZXZlbnQ6bnRoLWNoaWxkKDUpOjpiZWZvcmUge1xuICAgICAgICB0b3A6IDM4cHg7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC50aW1lbGluZSBwIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgfVxufVxuXG4uZm9vdGVyLWltZy10YWdzIHtcbiAgICB3aWR0aDogMjQlO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvb3Rlci1pbWctdGFncy10YWxsIHtcbiAgICB3aWR0aDogMTglO1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4udGltZWxpbmUgYSB7XG4gICAgY29sb3I6ICMwMGIwNjAgIWltcG9ydGFudDtcbn1cblxuLnNwb25zb3ItaW1nIHtcbiAgICB3aWR0aDogMjElO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_newsService, _eventService) {
        this._newsService = _newsService;
        this._eventService = _eventService;
        this.map = {
            zoom: 18,
            center: { longitude: -2.148361, latitude: 53.039625 }
        };
        this.news = [];
        this.events = [];
        this.loading = {
            news: true,
            events: true
        };
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._newsService.getLatestNews()
            .subscribe(function (news) {
            _this.news = news;
            _this.loading.news = false;
        });
        this._eventService.getLatestEvents()
            .subscribe(function (events) {
            _this.events = events;
            _this.loading.events = false;
        }, function (response) {
            _this.loading.events = false;
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"] },
        { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]
            ],
            providers: [_services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"], _services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]],
            bootstrap: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/models/event.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/event.model.ts ***!
  \***************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/app/models/user.model.ts");

var Event = /** @class */ (function () {
    function Event(news) {
        this.news = news;
        this.id = news.id;
        this.title = news.title;
        this.content = news.content;
        this.createdAt = news.createdAt;
        this.date = news.date;
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_0__["User"](news.User);
        this.deleting = false;
    }
    Object.defineProperty(Event.prototype, "_id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "_title", {
        get: function () {
            return this.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "_content", {
        get: function () {
            return this.content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "_createdAt", {
        get: function () {
            return this.createdAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "_date", {
        get: function () {
            return this.date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "_user", {
        get: function () {
            return this.user;
        },
        enumerable: false,
        configurable: true
    });
    return Event;
}());



/***/ }),

/***/ "./src/app/models/image.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/image.model.ts ***!
  \***************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
var Image = /** @class */ (function () {
    function Image(data) {
        this.data = data;
        this._id = data.id;
        this._title = data.title;
        this._location = data.location;
        this._thumb = data.thumb;
        this._date = data.date;
        delete this.data;
    }
    Object.defineProperty(Image.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "thumb", {
        get: function () {
            return this._thumb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return Image;
}());



/***/ }),

/***/ "./src/app/models/news.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/news.model.ts ***!
  \**************************************/
/*! exports provided: News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/app/models/user.model.ts");

var News = /** @class */ (function () {
    function News(news) {
        this.news = news;
        this.id = news.id;
        this.title = news.title;
        this.content = news.content;
        this.createdAt = news.createdAt;
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_0__["User"](news.User);
        this.date = news.date;
        this.deleting = false;
    }
    Object.defineProperty(News.prototype, "_id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(News.prototype, "_title", {
        get: function () {
            return this.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(News.prototype, "_content", {
        get: function () {
            return this.content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(News.prototype, "_createdAt", {
        get: function () {
            return this.createdAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(News.prototype, "_date", {
        get: function () {
            return this.date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(News.prototype, "_user", {
        get: function () {
            return this.user;
        },
        enumerable: false,
        configurable: true
    });
    return News;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(user) {
        this.user = user;
        this.id = user.id;
        this.email = user.email;
        this.first = user.first;
        this.last = user.last;
        this.role = user.role;
        this.password = null;
    }
    Object.defineProperty(User.prototype, "_id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "_email", {
        get: function () {
            return this.email;
        },
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "_first", {
        get: function () {
            return this.first;
        },
        set: function (first) {
            this.first = first;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "_last", {
        get: function () {
            return this.last;
        },
        set: function (last) {
            this.last = last;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "_role", {
        get: function () {
            return this.role;
        },
        set: function (role) {
            this.role = role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "_password", {
        get: function () {
            return this.password;
        },
        set: function (password) {
            this.password = password;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());



/***/ }),

/***/ "./src/app/selective-preload-strategy.ts":
/*!***********************************************!*\
  !*** ./src/app/selective-preload-strategy.ts ***!
  \***********************************************/
/*! exports provided: PreloadSelectedModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadSelectedModules", function() { return PreloadSelectedModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PreloadSelectedModules = /** @class */ (function () {
    function PreloadSelectedModules() {
        this.preloadedModules = [];
    }
    PreloadSelectedModules.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            // add the route path to our preloaded module array
            this.preloadedModules.push(route.path);
            // log the route path to the console
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
    };
    PreloadSelectedModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PreloadSelectedModules);
    return PreloadSelectedModules;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminService = /** @class */ (function () {
    function AdminService(http, _authService) {
        this.http = http;
        this._authService = _authService;
    }
    AdminService.prototype.getUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'api/user', { headers: this._authService.getHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resJson) {
            var users = [];
            resJson.forEach(function (user) { return users.push(new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](user)); });
            return users;
        }));
    };
    AdminService.prototype.addUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'api/user', user, { headers: this._authService.getHeaders() })
            .toPromise();
    };
    AdminService.prototype.editUser = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'api/user/' + user._id, user, { headers: this._authService.getHeaders() })
            .toPromise();
    };
    AdminService.prototype.deleteUser = function (user) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'api/user/' + user._id, { headers: this._authService.getHeaders() })
            .toPromise();
    };
    AdminService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/__ivy_ngcc__/fesm2015/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(router, http, _cookieService) {
        this.router = router;
        this.http = http;
        this._cookieService = _cookieService;
        this.isLoggedIn = false;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]({});
        var token = this._cookieService.get('token');
        if (token && sessionStorage.getItem('user')) {
            this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](JSON.parse(sessionStorage.getItem('user')));
        }
        this.token = token;
        this.isLoggedIn = token !== undefined;
    }
    /**
     * Check if the user is currently logged in
     * @return {boolean}
     */
    AuthService.prototype.check = function () {
        return this.isLoggedIn;
    };
    /**
     * Return the authorization headers required for API requests
     * @return {Headers}
     */
    AuthService.prototype.getHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headers = headers.set("Authorization", this.token);
        return headers;
    };
    /**
     * Authenticate the user, log them in and store their API access
     * token and user profile in cookies and session storage
     * @param user
     * @return {Promise<U>}
     */
    AuthService.prototype.login = function (user) {
        var _this = this;
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urls.rest + 'auth/login', { email: user.email, password: user.password, remember: user.remember })
            .toPromise()
            .then(function (resJson) {
            _this.token = resJson.token;
            _this._cookieService.put('token', resJson.token);
            _this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](resJson.user);
            sessionStorage.setItem('user', JSON.stringify(_this.user));
            _this.isLoggedIn = true;
        })
            .catch(function (error) {
            var errorJson = error;
            var errorString = errorJson.error === undefined ? 'Service unavailable' : errorJson.error;
            //noinspection TypeScriptUnresolvedVariable
            return Promise.reject(error.message || error);
        });
    };
    /**
     * Logout the user and remove the cookies, session storage and token
     */
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.token = null;
        this._cookieService.remove('token');
        sessionStorage.removeItem('user');
        this.router.navigate(['/home']);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_event_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/event.model */ "./src/app/models/event.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventService = /** @class */ (function () {
    function EventService(http, _authService) {
        this.http = http;
        this._authService = _authService;
    }
    EventService.prototype.getEvents = function (queryObj) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'public/event?limit=5&skip=' + queryObj.skip)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resJson) {
            var events = [];
            resJson.forEach(function (event) { return events.push(new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"](event)); });
            return events;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error.statusText);
        }));
    };
    EventService.prototype.getLatestEvents = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'public/event?latest=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resJson) {
            var events = [];
            resJson.forEach(function (event) { return events.push(new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"](event)); });
            return events;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error.statusText);
        }));
    };
    EventService.prototype.editEvent = function (id, event) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'api/event/' + id, event, { headers: this._authService.getHeaders() })
            .toPromise();
    };
    EventService.prototype.postEvent = function (event) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'api/event', event, { headers: this._authService.getHeaders() })
            .toPromise();
    };
    EventService.prototype.deleteEvent = function (event) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'api/event/' + event._id, { headers: this._authService.getHeaders() })
            .toPromise();
    };
    EventService.prototype.deleteImage = function (imgName) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'api/upload/' + imgName, { headers: this._authService.getHeaders() })
            .toPromise()
            .then(function (response) {
            console.log(response);
        })
            .catch(function (response) { return console.log(response); });
    };
    EventService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/gallery.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/gallery.service.ts ***!
  \*********************************************/
/*! exports provided: GalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_image_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/image.model */ "./src/app/models/image.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GalleryService = /** @class */ (function () {
    function GalleryService(http, _authService) {
        this.http = http;
        this._authService = _authService;
    }
    GalleryService.prototype.getImages = function (queryObj) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'public/galleryList?limit=0&skip=' + queryObj.skip)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resJson) { return resJson.map(function (i) { return new _models_image_model__WEBPACK_IMPORTED_MODULE_2__["Image"](i); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error.statusText);
        }));
    };
    GalleryService.prototype.deleteImage = function (image) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'api/gallery/' + image.id, { headers: this._authService.getHeaders() })
            .toPromise()
            .catch(function (error) {
            throw Promise.reject(error.statusText);
        });
    };
    GalleryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    GalleryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "./src/app/services/news.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_news_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/news.model */ "./src/app/models/news.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewsService = /** @class */ (function () {
    function NewsService(http, _authService, router) {
        this.http = http;
        this._authService = _authService;
        this.router = router;
        this.articles = [];
    }
    NewsService.prototype.getNewsItem = function (id) {
        var _this = this;
        var article = this.articles.find(function (article) { return article._id === id; });
        if (!article) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'public/article/' + id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (resJson) { return new _models_news_model__WEBPACK_IMPORTED_MODULE_2__["News"](resJson); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
                _this.router.navigate(['/news']);
                return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_7__["throwError"])(err);
            }));
        }
        return Promise.resolve(article);
    };
    NewsService.prototype.getNews = function (queryObj) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'public/article?limit=5&skip=' + queryObj.skip)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (resJson) {
            var articles = [];
            resJson.forEach(function (article) { return articles.push(new _models_news_model__WEBPACK_IMPORTED_MODULE_2__["News"](article)); });
            _this.articles = articles;
            return articles;
        }));
    };
    NewsService.prototype.getLatestNews = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'public/article?latest=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (resJson) {
            var articles = [];
            resJson.forEach(function (article) { return articles.push(new _models_news_model__WEBPACK_IMPORTED_MODULE_2__["News"](article)); });
            return articles;
        }));
    };
    NewsService.prototype.editNews = function (id, article) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'api/article/' + id, article, { headers: this._authService.getHeaders() })
            .toPromise();
    };
    NewsService.prototype.postNews = function (article) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'api/article', article, { headers: this._authService.getHeaders() })
            .toPromise();
    };
    NewsService.prototype.deleteNews = function (article) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'api/article/' + article._id, { headers: this._authService.getHeaders() })
            .toPromise();
    };
    NewsService.prototype.deleteImage = function (imgName) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urls.rest + 'api/upload/' + imgName, { headers: this._authService.getHeaders() })
            .toPromise()
            .then(function (response) {
            console.log(response);
        })
            .catch(function (response) { return console.log(response); });
    };
    NewsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _directives_in_view_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/in-view.directive */ "./src/app/directives/in-view.directive.ts");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/__ivy_ngcc__/index.js");
/* harmony import */ var _directives_postobottom_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/postobottom.directive */ "./src/app/directives/postobottom.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _directives_in_view_directive__WEBPACK_IMPORTED_MODULE_1__["InViewportDirective"],
                _directives_postobottom_directive__WEBPACK_IMPORTED_MODULE_3__["PosToBottomDirective"]
            ],
            imports: [
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_2__["FroalaEditorModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_2__["FroalaViewModule"]
            ],
            exports: [_directives_in_view_directive__WEBPACK_IMPORTED_MODULE_1__["InViewportDirective"], angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_2__["FroalaEditorDirective"], angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_2__["FroalaViewDirective"], _directives_postobottom_directive__WEBPACK_IMPORTED_MODULE_3__["PosToBottomDirective"]],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    urls: {
        rest: 'https://api.abbeyhultonutd.org/'
    },
    recaptcha: '6LfqzycUAAAAABp4a85ZHh6Xoyfs6Ki7CRi5_Wmj'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]);


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nwightma/homepage/abbey2/abbey_ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map