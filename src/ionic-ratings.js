//By Rajeshwar Patlolla
//https://github.com/rajeshwarpatlolla/ionic-ratings
//rajeshwar.patlolla@gmail.com

'use strict';
angular.module('ionic-ratings', ['ionic'])


  .directive('ionicRatings', [function() {
    return {
      restrict: 'AE',
      replace: true,
      template: '<div class="text-center ionic_ratings">' +
      '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(1)" ng-show="rating < 1"></span>' +
      '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(1)" ng-show="rating > 0"></span>' +
      '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(2)" ng-show="rating < 2"></span>' +
      '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(2)" ng-show="rating > 1"></span>' +
      '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(3)" ng-show="rating < 3"></span>' +
      '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(3)" ng-show="rating > 2"></span>' +
      '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(4)" ng-show="rating < 4"></span>' +
      '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(4)" ng-show="rating > 3"></span>' +
      '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(5)" ng-show="rating < 5"></span>' +
      '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(5)" ng-show="rating > 4"></span></div>',
      scope: {
        ratingsObj: '=ratingsobj'
      },
      link: function(scope, element, attrs) {

        //Setting the default values, if they are not passed
        scope.iconOn = scope.ratingsObj.iconOn || 'ion-ios-star';
        scope.iconOff = scope.ratingsObj.iconOff || 'ion-ios-star-outline';
        scope.iconOnColor= scope.ratingsObj.iconOnColor || 'rgb(200, 200, 100)';
        scope.iconOffColor=  scope.ratingsObj.iconOffColor || 'rgb(200, 100, 100)';
        scope.rating=  scope.ratingsObj.rating || 1;
        scope.minRating =scope.ratingsObj.minRating || 1;

        //Setting the color for the icon, when it is active
        scope.iconOnColor = {
          color: scope.iconOnColor
        };

        //Setting the color for the icon, when it is not active
        scope.iconOffColor = {
          color: scope.iconOffColor
        };

        //Setting the rating
        scope.rating = (scope.rating > scope.minRating) ? scope.rating : scope.minRating;

        //Setting the previously selected rating
        scope.prevRating = 0;

        //Called when he user clicks on the rating
        scope.ratingsClicked = function(val) {
          if (scope.minRating !== 0 && val < scope.minRating) {
            scope.rating = scope.minRating;
          } else {
            scope.rating = val;
          }
          scope.prevRating = val;
          scope.ratingsObj.callback(scope.rating);
        };

        //Called when he user un clicks on the rating
        scope.ratingsUnClicked = function(val) {
          if (scope.minRating !== 0 && val < scope.minRating) {
            scope.rating = scope.minRating;
          } else {
            scope.rating = val;
          }
          if (scope.prevRating == val) {
            if (scope.minRating !== 0) {
              scope.rating = scope.minRating;
            } else {
              scope.rating = 0;
            }
          }
          scope.prevRating = val;
          scope.ratingsObj.callback(scope.rating);
        };
      }
    }
  }]);