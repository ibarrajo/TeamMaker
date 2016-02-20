'use strict';

angular.module('hacksummitApp')
  .controller('CreateCtrl', function ($scope) {
    $scope.message = 'Hello';

    var defaultText = `**port.ninja** allows you to find the perfect partners you need for the project you have in mind.

We recommend outlining the basic purpose of your project and describing your ideal teammates.

You can write the description for your project here using a nifty language called [markdown](https://daringfireball.net/projects/markdown/basics). And you can use this text as a format example.

---

My Awesome Project
================

We are looking for developers with the following characteristics.

* Someone Dedicated
* Likes Electronics
* Wants to have fun

This is an example of how you can do. *Italic*, **bold**, and \`monospace\`.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.


~~~
var square = function (n) {
  return n * n;
};
~~~`;

    new Vue({
      el: '#editor',
      data: {
        input: defaultText
      },
      filters: {
        marked: marked
      }
    });

  });
