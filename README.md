##Introduction:

This is an `ionic-ratings` bower component which can be used with any Ionic framework's application.

[View Demo](http://codepen.io/rajeshwarpatlolla/pen/vOQJej "Demo") 


##Prerequisites.

* node.js
* bower
* gulp.

##How to use:

##### 1) In your project repository install the `ionic-ratings` using bower

    bower install ionic-ratings --save

This will install the latest version released.
    
##### 2) Give the path of  `ionic-ratings.js` in your `index.html` file.

````html 
<!-- path to ionic/angularjs js -->
<script src="lib/ionic-ratings/dist/ionic-ratings.js"></script>
````

##### 3) In your application module inject the dependency `ionic-ratings`, in order to work with it.

````javascript
angular.module('mainModuleName', ['ionic', 'ionic-ratings']){
 //
}
````

##### 4) In your controller, please define the object which you need to pass to the directive.

````javascript
.controller('ControllerName', ['$scope', function($scope) {
   
      $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  2,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      };
  
      $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
      };

}])
````

The properties of are as follows.

a) `iconOn` : This is an optional property. You can give any icon from [ionicons](http://ionicons.com/). This icon will be shown when the icon is active.

b) `iconOff` : This is an optional property. You can give any icon from [ionicons](http://ionicons.com/). This icon will be shown when the icon is inactive.

c) `iconOnColor` : This is an optional property. You can give any color. The color format can be `red` or `#00FF00` or `rgb(200, 200, 100).` This color will be shown when the icon is active.

c) `iconOffColor` : This is an optional property. You can give any color. The color format can be `red` or `#00FF00` or `rgb(200, 200, 100).` This color will be shown when the icon is inactive.

e) `rating` : This is an optional property. You can pass any values starting from 0. This is the initial/default rating.

f) `minRating` : This is an optional property. You can pass any values starting from 0. This is the minimum value a user can select.

g) `callback` : This is a mandatory property. This will be called when the user selects a rating. You can get the selected rating in this callback.


##### 5) In your template you can use like below

````html
<ionic-ratings ratingsobj='ratingsObject'></ionic-ratings>
````

##CSS Classes:
You can customize font, width and height of the icons using these classes.
##### 1) ionic_rating_icon_on
##### 2) ionic_rating_icon_off

![ionic-ratings icon on](https://lh3.googleusercontent.com/0eaBAyA98Xmz0DypNRFdQs7k_pz_HCJQT87XPoh8h1U=w397-h137-no "ionic-ratings-icon-on")
![ionic-ratings icon off](https://lh3.googleusercontent.com/adoA1shQtGymzw72jKmN3p0Hv6P6jrYkbF7m7edhp_E=w402-h143-no "ionic-ratings-icon-off")

You can also use the following css class for changing the properties of each icon.

````css    
  .ionic_ratings .icon {
    font-size: 50px;
  }
````

##Screen Shots:

Once you are successfully done with the above steps, you should be able to see the below screen shots.
 
![ionic-ratings buttons](https://lh3.googleusercontent.com/iUEJXbDYAAQK6xXmEA6FIRvRsKWLrFsrVjMGolsRn8E=w392-h130-no "ionic-ratings")

##Versions:

### 1) v0.1.0
The whole `ionic-ratings` component functionality has been implemented, and it can be installed with the command `bower install ionic-ratings --save`

##License:
[MIT](https://github.com/rajeshwarpatlolla/ionic-ratings/blob/master/LICENSE.md "MIT")

##Contact:
gmail : rajeshwar.patlolla@gmail.com

github : https://github.com/rajeshwarpatlolla

twitter : https://twitter.com/rajeshwar_9032

facebook : https://www.facebook.com/rajeshwarpatlolla

paypal : rajeshwar.patlolla@gmail.com