##Introduction:

This is an `ionic-ratings` bower component which can be used with any Ionic framework's application.

[View codepen Demo](http://codepen.io/rajeshwarpatlolla/pen/vOQJej "codepen demo") 

[View plunker Demo](http://plnkr.co/edit/YjpF7hqeMK0HGjeklc6z?p=preview "plunker demo") 


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
        iconOn : 'ion-ios-star',    //Optional
        iconOff : 'ion-ios-star-outline',   //Optional
        iconOnColor: 'rgb(200, 200, 100)',  //Optional
        iconOffColor:  'rgb(200, 100, 100)',    //Optional
        rating:  2, //Optional
        minRating:1,    //Optional
        readOnly : true //Optional
        callback: function(rating) {    //Mandatory
          $scope.ratingsCallback(rating);
        }
      };
  
      $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
      };

}])
````

The properties of are as follows.

a) **iconOn** (Optional) : You can give any icon from [ionicons](http://ionicons.com/). This icon will be shown when the icon is active. Default value is `ion-ios-star`.

b) **iconOff** (Optional) : You can give any icon from [ionicons](http://ionicons.com/). This icon will be shown when the icon is inactive. Default value is `ion-ios-star-outline`.

c) **iconOnColor** (Optional) : You can give any color. The color format can be `red` or `#00FF00` or `rgb(200, 200, 100).` This color will be shown when the icon is active. The default value is `rgb(200, 200, 100)`.

d) **iconOffColor** (Optional) : You can give any color. The color format can be `red` or `#00FF00` or `rgb(200, 200, 100).` This color will be shown when the icon is inactive. The default value is `rgb(200, 100, 100)`.

e) **rating** (Optional) : You can pass any values starting from 0. This is the initial/default rating. Default value is `1`.

f) **minRating** (Optional) : You can pass any values starting from 0. This is the minimum value a user can select. Default value is `1`.

g) **readOnly** (Optional) : This takes two values. If you wish to make it read only, give `true` or else you can give `false`. Default value is `false`.
If you wish to make it read only please add the below css class to your css file.

````css
  .ionic_ratings .read_only {
    pointer-events:none !important;
  }
````

h) **callback** (Mandatory) : This will be called when the user selects a rating. You can get the selected rating in this callback function.


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

### 2) v0.2.0
Read only feature added.


##License:
[MIT](https://github.com/rajeshwarpatlolla/ionic-ratings/blob/master/LICENSE.md "MIT")

##Contact:
gmail : rajeshwar.patlolla@gmail.com

github : https://github.com/rajeshwarpatlolla

twitter : https://twitter.com/rajeshwar_9032

facebook : https://www.facebook.com/rajeshwarpatlolla

paypal : rajeshwar.patlolla@gmail.com