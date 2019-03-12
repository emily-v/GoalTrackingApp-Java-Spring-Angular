(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-goals/all-goals.component.css":
/*!***************************************************!*\
  !*** ./src/app/all-goals/all-goals.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1nb2Fscy9hbGwtZ29hbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/all-goals/all-goals.component.html":
/*!****************************************************!*\
  !*** ./src/app/all-goals/all-goals.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n  <br>\n  <br>\n  <h3>{{ firstName }}! You Are</h3><img width=\"300\" src='..\\assets\\img\\logo.jpg'>\n  <br>\n  <br>\n    <div class=\"text-white\">\n      <div class=\"row mt-1 mt-md-1\">\n      <div class=\"col-md-5 col-lg-5 col-xl-5 mx-auto\">\n        <app-header></app-header>\n          <div class=\"card bg-dark img text-white\">\n            <br>\n                <div class=\"list-group\">\n                  <div class=\"list-group-item list-group-item-action\" *ngFor=\"let goal of goals\">\n                    <div class=\"d-flex w-100 justify-content-center\">\n                      <h5 class=\"mb-1\">{{ goal.title }} {{ goal.target }} {{ goal.unit }} per day</h5>\n                      <small class=\"text-muted\">{{ goal.date | date : 'dd/MM/yy'  }}</small>\n                    </div>\n                      <p class=\"text-muted\">{{ goal.category }}</p>\n                      <button class=\"btn btn-info\" (click)=\"setCurrGoal(goal)\" [routerLink]=\"['/single-goal', goal.goalId]\">View Details/New Entry</button>\n                  </div>\n                </div>\n                <br><button class=\"btn btn-info\" [routerLink]=\"['/new-goal']\">Make a new goal</button>\n            </div>\n        </div>\n        </div>\n      </div>\n</div>\n<br>\n\n\n\n"

/***/ }),

/***/ "./src/app/all-goals/all-goals.component.ts":
/*!**************************************************!*\
  !*** ./src/app/all-goals/all-goals.component.ts ***!
  \**************************************************/
/*! exports provided: AllGoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllGoalsComponent", function() { return AllGoalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_goal_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/goal-service.service */ "./src/app/services/goal-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AllGoalsComponent = /** @class */ (function () {
    function AllGoalsComponent(goalService, route) {
        this.goalService = goalService;
        this.route = route;
        this.logo = "assets/img/logo.jpg";
        this.bckgrnd = "assets/img/blackpaper.jpg";
        this.goals = [];
        this.currUser = JSON.parse(localStorage.getItem('authToken'));
        this.firstName = this.currUser.firstName;
    }
    AllGoalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userid = +this.route.snapshot.paramMap.get('id'); // could get from localStorage instead
        console.log("useridroute: " + userid);
        this.goalService.getAllUserGoals(userid)
            .subscribe(function (goals) { return _this.goals = goals; }, function (err) { return console.log(err); });
    };
    AllGoalsComponent.prototype.setCurrGoal = function (goal) {
        localStorage.setItem('currGoal', JSON.stringify(goal));
        console.log(goal);
    };
    AllGoalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-goals',
            template: __webpack_require__(/*! ./all-goals.component.html */ "./src/app/all-goals/all-goals.component.html"),
            styles: [__webpack_require__(/*! ./all-goals.component.css */ "./src/app/all-goals/all-goals.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_goal_service_service__WEBPACK_IMPORTED_MODULE_2__["GoalServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AllGoalsComponent);
    return AllGoalsComponent;
}());



/***/ }),

/***/ "./src/app/all-goals/single-goal/single-goal.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/all-goals/single-goal/single-goal.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1nb2Fscy9zaW5nbGUtZ29hbC9zaW5nbGUtZ29hbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/all-goals/single-goal/single-goal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/all-goals/single-goal/single-goal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n  <br>\n  <br>\n    <h3>{{ firstName }}! You Are</h3><img width=\"300\" src='..\\assets\\img\\logo.jpg'>\n  <br>\n  <br>\n    <div class=\"text-white\">\n        <div class=\"row mt-1 mt-md-1\">\n            <div class=\"col-md-5 col-lg-5 col-xl-5 mx-auto\">\n                <app-header></app-header>\n                <div class=\"card bg-dark img text-white\"><br><br>\n                  <h5>{{ goal.title }}</h5>\n                  <h5> Target: {{ goal.target }} {{ goal.unit }} per day</h5><br>\n                  <!-- <p>{{ goal.date | date : 'dd/MM/yy ' }}</p><br> -->\n                  <p>{{ showTodaysDate() }}</p>\n                  <p>{{ getSum() }}</p>\n                  <p>{{ getProgressMessage() }}</p>\n                <table class=\"table table-hover table-dark\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\" >Amount</th>\n                      <th scope=\"col\">Submitted</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let entry of getTodaysEntries()\">\n                      <td> {{ entry.amount }} {{ goal.unit }} </td>\n                      <td> {{ entry.timestamp | date :  'hh:mm aa' }} </td>\n                    </tr>\n                  </tbody>\n                </table>\n                  <!-- {{ getTodaysEntries() }} -->\n                    <button class=\"btn btn-info\" [routerLink]=\"['/goal-detail']\">Make a new entry towards goal</button>\n                </div>   \n            </div>    \n        </div> \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/all-goals/single-goal/single-goal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/all-goals/single-goal/single-goal.component.ts ***!
  \****************************************************************/
/*! exports provided: SingleGoalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleGoalComponent", function() { return SingleGoalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_goal_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/goal-service.service */ "./src/app/services/goal-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/entries */ "./src/app/model/entries.ts");
/* harmony import */ var src_app_services_entry_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/entry-service.service */ "./src/app/services/entry-service.service.ts");






var SingleGoalComponent = /** @class */ (function () {
    function SingleGoalComponent(goalService, entryService, route) {
        this.goalService = goalService;
        this.entryService = entryService;
        this.route = route;
        this.currUser = JSON.parse(localStorage.getItem('authToken'));
        this.firstName = this.currUser.firstName;
        this.entries = [];
        this.todaysEntries = [];
        this.newEntry = new src_app_model_entries__WEBPACK_IMPORTED_MODULE_4__["Entry"]();
    }
    SingleGoalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goalid = +this.route.snapshot.paramMap.get('id');
        this.getCurrGoal();
        this.entryService.getAllGoalEntries(this.goalid)
            .subscribe(function (entries) { return _this.entries = entries; }, function (err) { return console.log(err); });
    };
    SingleGoalComponent.prototype.getCurrGoal = function () {
        var _this = this;
        this.goalService.getGoalById(this.goalid).subscribe(function (goal) {
            _this.goal = goal;
        });
    };
    SingleGoalComponent.prototype.getTodaysEntries = function () {
        var entryDate;
        for (var i = 0; i < this.entries.length; i++) {
            entryDate = this.entries[i].timestamp;
            var entryDateJS = new Date(entryDate);
            var entryDateTrunc = entryDateJS.getMonth() + " " + entryDateJS.getDate() + " " + entryDateJS.getFullYear();
            if (entryDateTrunc === this.getTodaysDate()) {
                this.todaysEntries.push(this.entries[i]);
            }
        }
        return this.todaysEntries;
    };
    // get truncated date to compare with timestamp from DB
    SingleGoalComponent.prototype.getTodaysDate = function () {
        var today = new Date();
        var todayTrunc = today.getMonth() + " " + today.getDate() + " " + today.getFullYear();
        return todayTrunc;
    };
    // format date for display in view
    SingleGoalComponent.prototype.showTodaysDate = function () {
        var today = new Date();
        var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
        return date;
    };
    SingleGoalComponent.prototype.getSum = function () {
        this.sum = 0;
        for (var i = 0; i < this.entries.length; i++) {
            this.sum += this.entries[i].amount;
        }
        return "Today's Progress: " + this.sum + " " + this.goal.unit;
    };
    SingleGoalComponent.prototype.getProgressMessage = function () {
        if (this.sum == 0) {
            return "Make an entry to start tracking your progress!";
        }
        else if (this.sum < this.goal.target) {
            return 'Almost there! Only ' + (this.goal.target - this.sum) + " " + this.goal.unit + ' more to go!';
        }
        else if (this.sum >= this.goal.target) {
            return "Great job! You've met your target for today!";
        }
    };
    SingleGoalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-goal',
            template: __webpack_require__(/*! ./single-goal.component.html */ "./src/app/all-goals/single-goal/single-goal.component.html"),
            styles: [__webpack_require__(/*! ./single-goal.component.css */ "./src/app/all-goals/single-goal/single-goal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_goal_service_service__WEBPACK_IMPORTED_MODULE_2__["GoalServiceService"], src_app_services_entry_service_service__WEBPACK_IMPORTED_MODULE_5__["EntryServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SingleGoalComponent);
    return SingleGoalComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _new_goal_new_goal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-goal/new-goal.component */ "./src/app/new-goal/new-goal.component.ts");
/* harmony import */ var _all_goals_all_goals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-goals/all-goals.component */ "./src/app/all-goals/all-goals.component.ts");
/* harmony import */ var _goal_detail_goal_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./goal-detail/goal-detail.component */ "./src/app/goal-detail/goal-detail.component.ts");
/* harmony import */ var _all_goals_single_goal_single_goal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all-goals/single-goal/single-goal.component */ "./src/app/all-goals/single-goal/single-goal.component.ts");
/* harmony import */ var _health_tips_health_tips_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./health-tips/health-tips.component */ "./src/app/health-tips/health-tips.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var routes = [{ path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'new-user', component: _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_4__["NewUserComponent"] },
    { path: 'user-profile/:id', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"] },
    { path: 'new-goal', component: _new_goal_new_goal_component__WEBPACK_IMPORTED_MODULE_6__["NewGoalComponent"] },
    { path: 'single-goal/:id', component: _all_goals_single_goal_single_goal_component__WEBPACK_IMPORTED_MODULE_9__["SingleGoalComponent"] },
    { path: 'goal-detail', component: _goal_detail_goal_detail_component__WEBPACK_IMPORTED_MODULE_8__["GoalDetailComponent"] },
    { path: 'all-goals/:id', component: _all_goals_all_goals_component__WEBPACK_IMPORTED_MODULE_7__["AllGoalsComponent"] },
    { path: 'health-tips', component: _health_tips_health_tips_component__WEBPACK_IMPORTED_MODULE_10__["HealthTipsComponent"] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'on-track-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _new_goal_new_goal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-goal/new-goal.component */ "./src/app/new-goal/new-goal.component.ts");
/* harmony import */ var _goal_detail_goal_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./goal-detail/goal-detail.component */ "./src/app/goal-detail/goal-detail.component.ts");
/* harmony import */ var _all_goals_all_goals_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./all-goals/all-goals.component */ "./src/app/all-goals/all-goals.component.ts");
/* harmony import */ var _all_goals_single_goal_single_goal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./all-goals/single-goal/single-goal.component */ "./src/app/all-goals/single-goal/single-goal.component.ts");
/* harmony import */ var _services_goal_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/goal-service.service */ "./src/app/services/goal-service.service.ts");
/* harmony import */ var _health_tips_health_tips_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./health-tips/health-tips.component */ "./src/app/health-tips/health-tips.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_8__["NewUserComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _new_goal_new_goal_component__WEBPACK_IMPORTED_MODULE_10__["NewGoalComponent"],
                _goal_detail_goal_detail_component__WEBPACK_IMPORTED_MODULE_11__["GoalDetailComponent"],
                _all_goals_all_goals_component__WEBPACK_IMPORTED_MODULE_12__["AllGoalsComponent"],
                _all_goals_single_goal_single_goal_component__WEBPACK_IMPORTED_MODULE_13__["SingleGoalComponent"],
                _health_tips_health_tips_component__WEBPACK_IMPORTED_MODULE_15__["HealthTipsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_services_goal_service_service__WEBPACK_IMPORTED_MODULE_14__["GoalServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/goal-detail/goal-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/goal-detail/goal-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvYWwtZGV0YWlsL2dvYWwtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/goal-detail/goal-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/goal-detail/goal-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\" style=\"text-align:center\">\n      <br>\n      <br>\n        <h3>{{ firstName }}! You Are</h3><img width=\"300\" src='..\\assets\\img\\logo.jpg'>\n      <br>\n      <br>\n        <div class=\"text-white\">\n        <div class=\"row mt-1 mt-md-1\">\n        <div class=\"col-md-5 col-lg-5 col-xl-5 mx-auto\">\n            <app-header></app-header>\n                <div class=\"card bg-dark img text-white\">\n                  <br>\n                        <div class=\"d-flex w-100 justify-content-between\">\n                        <h5 class=\"mb-1\">{{ currGoal.title }} {{ currGoal.target }} {{ currGoal.unit }} per day</h5>\n                        </div>\n                        <form #newEntryForm=\"ngForm\" (ngSubmit)=\"submitEntry()\">\n                            <div class=\"form-group\">\n                                <label for=\"amount\">Track Your Progress: </label>\n                                <input type=\"number\" \n                                    class=\"form-control\" \n                                    placeholder=\"Enter amount\" \n                                    #nameAmt=\"ngModel\" \n                                    [(ngModel)]=\"newEntry.amount\" \n                                    name=\"amount\"\n                                    >\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-info\">Submit</button>\n                        </form>   \n                      <div>            \n                </div>\n            </div> \n        </div>\n    </div>\n    </div>\n    </div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/goal-detail/goal-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/goal-detail/goal-detail.component.ts ***!
  \******************************************************/
/*! exports provided: GoalDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalDetailComponent", function() { return GoalDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/entries */ "./src/app/model/entries.ts");
/* harmony import */ var _services_entry_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/entry-service.service */ "./src/app/services/entry-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var GoalDetailComponent = /** @class */ (function () {
    function GoalDetailComponent(entryService, route, router) {
        this.entryService = entryService;
        this.route = route;
        this.router = router;
        // FirstName = "Kayma";
        this.logo = "assets/img/logo.jpg";
        this.bckgrnd = "assets/img/blackpaper.jpg";
        this.currUser = JSON.parse(localStorage.getItem('authToken'));
        this.firstName = this.currUser.firstName;
        this.userid = this.currUser.userId;
        this.currGoal = JSON.parse(localStorage.getItem('currGoal'));
        this.goalTitle = this.currGoal.title;
        this.entries = [];
        this.newEntry = new _model_entries__WEBPACK_IMPORTED_MODULE_2__["Entry"]();
    }
    GoalDetailComponent.prototype.ngOnInit = function () {
    };
    GoalDetailComponent.prototype.submitEntry = function () {
        this.newEntry.goal = JSON.parse(localStorage.getItem('currGoal'));
        this.newEntry.entryId = 10;
        this.goalid = this.newEntry.goal.goalId;
        if (this.newEntry.amount < 1) {
            alert("Entry amount must be more than 0.");
        }
        else {
            this.entryService.createEntry(this.newEntry)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
            this.newEntry = new _model_entries__WEBPACK_IMPORTED_MODULE_2__["Entry"]();
            this.router.navigate(['/all-goals', this.userid]);
        }
    };
    GoalDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-goal-detail',
            template: __webpack_require__(/*! ./goal-detail.component.html */ "./src/app/goal-detail/goal-detail.component.html"),
            styles: [__webpack_require__(/*! ./goal-detail.component.css */ "./src/app/goal-detail/goal-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_entry_service_service__WEBPACK_IMPORTED_MODULE_3__["EntryServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GoalDetailComponent);
    return GoalDetailComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\">\n      <a [routerLink]=\"['/user-profile', userid]\" class=\"nav-link active\">Home</a>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <a  class=\"nav-link dropdown-toggle text-dark\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" >Goals</a>\n      <div class=\"dropdown-menu\">\n          <a [routerLink]=\"['/new-goal']\" class=\"dropdown-item\" href=\"#\">New Goal</a>\n        <div class=\"dropdown-divider\"></div>\n        <a (click)=\"routeToAllGoals()\" class=\"dropdown-item\">All Goals</a>\n      </div>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link text-dark\" [routerLink]=\"['/health-tips']\">Tips</a>\n      </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link text-dark\" [routerLink]=\"['']\" (click)=\"logout()\">Log Out</a>\n    </li>\n    \n    <li class=\"nav-item\">\n\n    </li>\n  </ul>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.currUser = JSON.parse(localStorage.getItem('authToken'));
        // firstName: string =  this.currUser.firstName;
        this.userid = this.currUser.userId;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.routeToAllGoals = function () {
        var userid = JSON.parse(localStorage.getItem('authToken')).userId;
        console.log("route to userid: " + userid);
        this.router.navigate(['all-goals', userid]);
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('authToken');
        localStorage.removeItem('currGoal');
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/health-tips/health-tips.component.css":
/*!*******************************************************!*\
  !*** ./src/app/health-tips/health-tips.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC10aXBzL2hlYWx0aC10aXBzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/health-tips/health-tips.component.html":
/*!********************************************************!*\
  !*** ./src/app/health-tips/health-tips.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n    <br>\n    <br>\n      <h3>Tips to keep you</h3><img width=\"300\" src='..\\assets\\img\\logo.jpg'>\n    <br>\n    <br>\n          <div class=\"row mt-1 mt-md-1\">\n              <div class=\"col-md-5 col-lg-5 col-xl-5 mx-auto\">\n                  <app-header></app-header>\n                      <div class=\"card bg-dark img text-white\">\n                         <br>\n                         <br>\n                         <img src=\"../assets/img/icons.png\" class=\"card-img-top \" alt=\"...\" >\n                         <br>\n                         <ul class=\"list-group list-group-info text-monospace text-left\">\n                            <li>Drink 8oz of water a day</li>\n                            <li>Get 8 hours of sleep each night</li>\n                            <li>Excercise at least 20 minutes a day</li>\n                            <li>Eat Vegetables & Fruits</li>\n                            <li>Practice mindfulness</li>\n                          </ul>\n\n                       \n              </div> \n          </div>\n      </div>\n  </div>\n  \n  \n  \n  \n  \n"

/***/ }),

/***/ "./src/app/health-tips/health-tips.component.ts":
/*!******************************************************!*\
  !*** ./src/app/health-tips/health-tips.component.ts ***!
  \******************************************************/
/*! exports provided: HealthTipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthTipsComponent", function() { return HealthTipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HealthTipsComponent = /** @class */ (function () {
    function HealthTipsComponent() {
    }
    HealthTipsComponent.prototype.ngOnInit = function () {
    };
    HealthTipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-health-tips',
            template: __webpack_require__(/*! ./health-tips.component.html */ "./src/app/health-tips/health-tips.component.html"),
            styles: [__webpack_require__(/*! ./health-tips.component.css */ "./src/app/health-tips/health-tips.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HealthTipsComponent);
    return HealthTipsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n  <br>\n  <img width=\"300\" src='..\\assets\\img\\logo.jpg'>\n  <br>\n  <br>\n  <div class=\"text-white\">\n    <div class=\"row mt-1 mt-md-1\">\n      <div class=\"col-md-5 col-lg-5 col-xl-5 mx-auto\">\n        <div class=\"card bg-dark img text-white\">\n            <br>\n          <h4>\n            <p class=\"font-weight-bolder text-monospace\">Life's a journey, <br> stay on track...</p>\n          </h4>\n          <br>\n          <br>\n            <div class=\"form-container\">\n              <form #loginForm = \"ngForm\" novalidate (ngSubmit)=\"loginSubmit()\">\n                <div class=\"form-group\">\n                  <label for=\"username\">Email address</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"username\"\n                    placeholder=\"Enter email\"\n                    [(ngModel)]=\"email\"\n                    required/>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input\n                    type=\"password\"\n                    class=\"form-control\"\n                    name=\"password\"\n                    placeholder=\"Enter Password\"\n                    [(ngModel)]=\"password\"\n                    required/>\n                </div>\n\n                <div>\n                    <input class=\"btn btn-primary btn-info\" [disabled]=\"!loginForm.valid\" type=\"submit\" value=\"Login\">\n                <!--  <button type=\"submit\" class=\"btn btn-primary\"  [disabled]=\"!loginForm.valid\"><h4>Login</h4></button> -->\n                </div>\n              </form>\n             <br> <button [routerLink]=\"['/new-user']\" class=\"btn btn-primary btn-info\" type=\"submit\">Sign Up</button>\n             <!-- <button type=\"button\" [routerLink]=\"['/new-user']\" class=\"badge badge-pill badge-info m-2\"><h4>Sign Up</h4></button> -->\n            </div>\n            <!-- <h4><a [routerLink]=\"['/new-user']\" class=\"badge badge-pill badge-info\" rel=\"noopener\">Sign Up</a></h4> -->\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'api/users/user=';
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.authService.authenticate(this.email, this.password, 
        // () => console.log(this.userid),
        function () { return _this.routeToProfile(); }, function (err) {
            alert("Invalid login attempt. Please try again.");
        });
    };
    LoginComponent.prototype.routeToProfile = function () {
        this.userid = JSON.parse(localStorage.getItem('authToken')).userId;
        console.log(this.userid);
        this.router.navigate(['user-profile', this.userid]);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/entries.ts":
/*!**********************************!*\
  !*** ./src/app/model/entries.ts ***!
  \**********************************/
/*! exports provided: Entry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entry", function() { return Entry; });
var Entry = /** @class */ (function () {
    function Entry() {
    }
    return Entry;
}());



/***/ }),

/***/ "./src/app/model/goals.ts":
/*!********************************!*\
  !*** ./src/app/model/goals.ts ***!
  \********************************/
/*! exports provided: Goal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Goal", function() { return Goal; });
var Goal = /** @class */ (function () {
    function Goal() {
    }
    return Goal;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/new-goal/new-goal.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-goal/new-goal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1nb2FsL25ldy1nb2FsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/new-goal/new-goal.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-goal/new-goal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n  <br>\n    <h4>New Goal...</h4><img width=\"300\" src='..\\assets\\img\\logo.jpg'>\n  <br>\n  <br>\n    <div class=\"text-white\">\n        <div class=\"row mt-auto mt-md-auto\">\n            <div class=\"col-md-auto col-lg-auto col-xl-5 mx-auto\">\n                <app-header></app-header>\n                <div class=\"card bg-dark img text-white\">\n                    <form #newGoalForm=\"ngForm\" (ngSubmit)=\"saveNewGoal()\">\n                        <div class=\"form-group\">\n                            <label for=\"title\">Goal Name</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Goal Name\" #name=\"ngModel\" [(ngModel)]=\"goal.title\" name=\"title\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"category\">Category</label>\n                            <select required class=\"form-control\" #name=\"ngModel\" [(ngModel)]=\"goal.category\" name=\"category\" required>\n                                <option value=\"Fitness\">Fitness</option>\n                                <option value=\"Nutrition\">Nutrition</option>\n                                <option value=\"Mindful\">Mindful</option>\n                                <option value=\"Other\">Other</option>\n                            </select>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"target\">Target (per day)</label>\n                                <input type=\"text\" class=\"form-control\" #name=\"ngModel\" [(ngModel)]=\"goal.target\" name=\"target\" placeholder=\"Enter Target\" required>\n                            </div>   \n                        <div class=\"form-group\">\n                            <label for=\"unit\">Unit</label>\n                            <select #name=\"ngModel\" [(ngModel)]=\"goal.unit\" name=\"unit\" required class=\"form-control\" required>\n                                <option value=\"minutes\">minutes</option>\n                                <option value=\"hours\">hours</option>\n                                <option value=\"servings\">servings</option>\n                                <option value=\"oz\">oz</option>\n                                <option value=\"miles\">miles</option>\n                                <option value=\"reps\">reps</option>\n                            </select>\n                        </div>\n                    <button type=\"submit\" class=\"btn btn-info\">Create new goal</button>\n                    <!-- <h4><a (click)=\"saveNewGoal()\" [routerLink]=\"['/user-profile']\" class=\"badge badge-pill badge-info\" rel=\"noopener\">Create New Goal</a></h4>       -->\n                </form>\n            \n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/new-goal/new-goal.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-goal/new-goal.component.ts ***!
  \************************************************/
/*! exports provided: NewGoalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGoalComponent", function() { return NewGoalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_goals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/goals */ "./src/app/model/goals.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _services_goal_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/goal-service.service */ "./src/app/services/goal-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NewGoalComponent = /** @class */ (function () {
    function NewGoalComponent(goalService, router) {
        this.goalService = goalService;
        this.router = router;
        this.logo = "assets/img/logo.jpg";
        this.bckgrnd = "assets/img/blackpaper.jpg";
        this.goal = new _model_goals__WEBPACK_IMPORTED_MODULE_2__["Goal"]();
        // goal: Goal;
        // form: Goal;
        this.testUser = new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.submitted = false;
        this.currUser = JSON.parse(localStorage.getItem('authToken'));
    }
    NewGoalComponent.prototype.ngOnInit = function () {
        this.testUser = {
            userId: 4,
            email: "test4@email.com",
            password: "pass4",
            firstName: "test4first",
            lastName: "test4last"
        };
        console.log(this.testUser);
    };
    // clears out the form
    NewGoalComponent.prototype.newGoal = function () {
        this.submitted = false;
        this.goal = new _model_goals__WEBPACK_IMPORTED_MODULE_2__["Goal"]();
    };
    NewGoalComponent.prototype.saveNewGoal = function () {
        this.goal.goalId = 11;
        this.goal.user = this.currUser;
        console.log(this.currUser.userId);
        console.log(this.goal);
        this.goalService.createGoal(this.goal)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.goal = new _model_goals__WEBPACK_IMPORTED_MODULE_2__["Goal"]();
        this.router.navigate(['/user-profile', this.currUser.userId]);
        // this.navigate();
    };
    // onSubmit() {
    //   this.submitted = true;
    //   this.saveNewGoal()
    // }
    NewGoalComponent.prototype.navigate = function () {
        this.router.navigate(['/all-goals', this.currUser.userId]);
    };
    NewGoalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-goal',
            template: __webpack_require__(/*! ./new-goal.component.html */ "./src/app/new-goal/new-goal.component.html"),
            styles: [__webpack_require__(/*! ./new-goal.component.css */ "./src/app/new-goal/new-goal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_goal_service_service__WEBPACK_IMPORTED_MODULE_4__["GoalServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NewGoalComponent);
    return NewGoalComponent;
}());



/***/ }),

/***/ "./src/app/new-user/new-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-user/new-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy11c2VyL25ldy11c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/new-user/new-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-user/new-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     style=\"text-align:center\">\n  <br>\n    <h4>Hello! Let's Get You</h4><img width=\"300\" src='..\\assets\\img\\logo.jpg'>\n    <br>\n    <br>\n    <div class=\"text-white\">\n        <div class=\"row mt-1 mt-md-1\">\n            <div class=\"col-md-5 col-lg-5 col-xl-5 mx-auto\">\n                <div class=\"card bg-dark img text-white\">\n                    <br>\n                  <h4>\n                    <p class=\"font-weight-bolder text-monospace\">Life's a journey, <br> stay on track...</p>\n                  </h4>\n                  <br>\n                        <form #newUserForm =\"ngForm\" (ngSubmit)=\"newUseronSubmit()\">\n                            <div class=\"form-group\">\n                                <label for=\"inputFName\">First Name</label>\n                                <input type=\"text\"\n                                        class=\"form-control\"\n                                        placeholder=\"Enter First Name\"\n                                        id=\"inputFName\"\n                                        aria-describedby=\"emailHelp\"\n                                        #name = \"ngModel\"\n                                        [(ngModel)]=\"user.firstName\"\n                                        name=\"firstName\"\n                                        required>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"inputLName\">Last Name</label>\n                                <input\n                                        type=\"text\"\n                                        class=\"form-control\"\n                                        id=\"inputLName\"\n                                        placeholder=\"Enter Last Name\"\n                                        #name= \"ngModel\"\n                                        [(ngModel)]=\"user.lastName\"\n                                        name=\"lastName\"\n                                        required>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"inputEmail\">Email address</label>\n                                <input type=\"text\"\n                                        class=\"form-control\"\n                                        placeholder=\"Enter Email\"\n                                        id=\"inputEmail\"\n                                        aria-describedby=\"emailHelp\"\n                                        #name =\"ngModel\"\n                                        [(ngModel)]=\"user.email\"\n                                        name=\"email\"\n                                        required>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"inputLName\">Password</label>\n                                <input type=\"password\"\n                                        class=\"form-control\"\n                                        id=\"inputPassword\"\n                                        placeholder=\"Enter Password\"\n                                        #name = \"ngModel\"\n                                        [(ngModel)]=\"user.password\"\n                                        name=\"password\"\n                                        required>\n                            </div>\n                            <button type=\"submit\"\n                                class=\"btn btn-info\">Create New User</button>\n                                <!--<h4>-->\n                                    <!--<a [routerLink]=\"['/user-profile']\"-->\n                                        <!--class=\"badge badge-pill badge-info\"-->\n                                        <!--rel=\"noopener\">Login-->\n                                    <!--</a>-->\n                                <!--</h4>-->\n                        </form>    \n                    </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/new-user/new-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-user/new-user.component.ts ***!
  \************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.logo = "assets/img/logo.jpg";
        this.bckgrnd = "assets/img/blackpaper.jpg";
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.submitted = false;
    }
    NewUserComponent.prototype.ngOnInit = function () {
    };
    NewUserComponent.prototype.newUser = function () {
        this.submitted = false;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    NewUserComponent.prototype.saveNewUser = function () {
        this.user.userId = 5;
        this.user;
        console.log(this.user);
        this.userService.createUser(this.user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.router.navigate(['']);
    };
    NewUserComponent.prototype.newUseronSubmit = function () {
        this.submitted = true;
        this.saveNewUser();
    };
    NewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.css */ "./src/app/new-user/new-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NewUserComponent);
    return NewUserComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.authUrl = 'http://localhost:8080/api/users/auth';
    }
    AuthService.prototype.hasUserId = function (id) {
        var tokenId = JSON.parse(localStorage.getItem('authToken')).userId;
        return id === tokenId;
    };
    AuthService.prototype.getLoggedUser = function () {
        var userJson = localStorage.getItem('authToken');
        if (userJson == null)
            return null;
        var user = JSON.parse(userJson);
        return user;
    };
    AuthService.prototype.authenticate = function (email, password, success, fail) {
        return this.http.post(this.authUrl, JSON.stringify({ email: email, password: password }), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .toPromise()
            .then(function (resp) {
            localStorage.setItem('authToken', JSON.stringify(resp));
            success();
        }, function (err) {
            fail(err);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/entry-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/entry-service.service.ts ***!
  \***************************************************/
/*! exports provided: EntryServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryServiceService", function() { return EntryServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EntryServiceService = /** @class */ (function () {
    function EntryServiceService(http) {
        this.http = http;
    }
    EntryServiceService.prototype.getAllGoalEntries = function (id) {
        return this.http.get("http://localhost:8080/api/entries/entry?goalId=" + id);
    };
    EntryServiceService.prototype.createEntry = function (entry) {
        return this.http.post('http://localhost:8080/api/entries/entry', entry);
    };
    EntryServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EntryServiceService);
    return EntryServiceService;
}());



/***/ }),

/***/ "./src/app/services/goal-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/goal-service.service.ts ***!
  \**************************************************/
/*! exports provided: GoalServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalServiceService", function() { return GoalServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GoalServiceService = /** @class */ (function () {
    function GoalServiceService(http) {
        this.http = http;
    }
    GoalServiceService.prototype.getAllUserGoals = function (id) {
        // const tokenId = JSON.parse(localStorage.getItem('authToken')).userId;
        // console.log(tokenId);
        return this.http.get("http://localhost:8080/api/goals?userid=" + id);
    };
    GoalServiceService.prototype.getGoalById = function (id) {
        return this.http.get("http://localhost:8080/api/goals/goal?goalid=" + id);
    };
    GoalServiceService.prototype.createGoal = function (goal) {
        return this.http.post('http://localhost:8080/api/goals/goal', goal);
    };
    GoalServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GoalServiceService);
    return GoalServiceService;
}());



/***/ }),

/***/ "./src/app/services/user-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-service.service.ts ***!
  \**************************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserServiceService = /** @class */ (function () {
    function UserServiceService(http) {
        this.http = http;
    }
    UserServiceService.prototype.createUser = function (user) {
        return this.http.post("http://localhost:8080/api/users/user", user);
    };
    UserServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserServiceService);
    return UserServiceService;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n  <br>\n  <br>\n    <h3>{{ firstName }}! You Are</h3><img width=\"300\" src='..\\assets\\img\\logo.jpg'>\n  <br>\n  <br>\n        <div class=\"row mt-1 mt-md-1\">\n            <div class=\"col-md-5 col-lg-5 col-xl-5 mx-auto\">\n                <app-header></app-header>\n                    <div class=\"card bg-dark img text-white\">\n                      <br>\n                    <h4>\n                      <p class=\"font-weight-bolder text-monospace\">Life's a journey, <br> stay on track...</p>\n                    </h4>\n                      <br>\n                      <br>\n              \n                      <ul class=\"list-group\">\n                        <li class=\"list-group-item list-group-item-info\">Recent Goals</li>\n                        <li class=\"list-group-item text-info\">Goal Title</li>  \n                      </ul>\n                \n                      <br>\n                    <a href=\"https://calendar.google.com/\"  target=\"blank\" class=\"text-white\">   \n                       <button type=\"button\" class=\"btn btn-info btn-lg btn-block\">Calendar</button>\n                      <br>\n\n                    </a>\n                <div class=\"card-deck\">\n                    <div class=\"card bg-info\">\n                        <a [routerLink]=\"['/new-goal']\" class=\"text-white bg-info\">     \n                        <div class=\"card-header\">New Goal</div>\n                        <img src=\"../assets/img/pen.jpg\" class=\"card-img-top\" alt=\"...\">\n                    </a> \n                </div>\n                <div class=\"card bg-info\">\n                    <a (click)=\"routeToAllGoals()\" class=\"text-white\">   \n                        <div class=\"card-header\">All Goals</div>\n                        <img src=\"../assets/img/check.jpg\" class=\"card-img-top\" alt=\"...\" >\n                        </a>\n                    </div>\n                </div>\n            </div> \n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(router) {
        this.router = router;
        this.logo = "assets/img/logo.jpg";
        this.bckgrnd = "assets/img/blackpaper.jpg";
        this.currUser = JSON.parse(localStorage.getItem('authToken'));
        this.firstName = this.currUser.firstName;
        this.userid = this.currUser.userid;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.routeToAllGoals = function () {
        this.userid = JSON.parse(localStorage.getItem('authToken')).userId;
        console.log("route to userid: " + this.userid);
        this.router.navigate(['all-goals', this.userid]);
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Emily/Documents/SpringToolSuite/project2-goal-tracker/ontrackapp/on-track-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map