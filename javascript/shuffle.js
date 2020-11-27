// $(document).ready(function(){
//             var sortFunction = function(a, b) {
//                   return (+($(b).text())) - (+($(a).text()));
//               }
//               var lis = $('div.main-portfolio__article__gallery-block img');
//               lis = Array.prototype.sort.call(lis, sortFunction);
              
              
//               for (var i = 0; i < lis.length; i++) {
//                   $('div.main-portfolio__article__gallery-block').append(lis[i]);
//               }
      
// });


// $('.portfolio-buttons').click(function(){
      // var sortFunction = function(a, b) {
      // return (+($(b).text())) - (+($(a).text()));
      // }

      // var lis = $('.main-portfolio__article__gallery-block img');
      // console.log(lis);
      // lis = Array.prototype.sort.call(lis, sortFunction);
      // console.log(lis);
      
      // for (var i = 0; i < lis.length; i++) {
      // $('.main-portfolio__article__gallery-block').append(lis[i]);
      // }
      // console.log(lis);
      
// });


var $gallery = $('.main-portfolio__article__gallery-block'),
      $images = $gallery.children();

      $('.portfolio-buttons').click(function() {
      // sort the elements
      $images.sort(function() {return Math.random() - .5; });
      // update dom with new sort
      $gallery.append($images);
})




