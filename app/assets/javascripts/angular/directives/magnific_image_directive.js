myApp.directive("magnificPopup", MagnificPopup);
MagnificPopup.$inject = ["$timeout", "$filter"];
function MagnificPopup($timeout, $filter) {
  var directive = {
    link: link,
    restrict: "A"
  };
  return directive;

  function link($scope, element) {
    $scope.$watch("images", function () {
      var option = {
        delegate: "a",
        type: "image",
        tLoading: "Loading image...",
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: "Can't image load!",
          titleSrc: function(item) {
            return item.el.text() + ' - ' +item.el.attr('title')
              + ' &middot; <a class="image-source-link" href="'+
              item.el.attr('link') +'" target="_blank">My article</a>';
          }
        }
      };
      $timeout(function() {
        element.magnificPopup(option);
      }, 400);
    });
  }
}
