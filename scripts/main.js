//DOC ready

$(document).ready(function() {
  //Jag har provat en massa funktioner som jag lämnar kvar för att komma ihåg i framtiden
  $('body').click(function(){
    $('.navHeaderCollapse').collapse('hide');
  });

  var clipboard = new Clipboard('.copybtn');
  clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    $('.copytextdiv-success').show(300);
    $('.closeSpan').click(function(){
      $('.copytextdiv-success').hide(300);
    });
    e.clearSelection();
  });

  clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    $('.copytextdiv-success').hide(300);
    $('.copytextdiv-fail').show(300);
    $('.closeSpan').click(function(){
      $('.copytextdiv-fail').hide(300);
    });
  });
  // var visible = false;
  // var onPageViewName = $('#onPage-view-name').contents();
  // $('#view-name').append(onPageViewName);
  /* Push the body over by 285px over */
  // $('li.dropdown').hover(function(){
  //   $('.dropdown-menu', this).slideDown(150);
  // }, function(){
  //   $('.dropdown-menu', this).fadeOut(50);
  // });
  // $('li.dropdown:after').hover(function(){
  //
  // });

  // openSideMenu = function() {
  //   $('.meny').animate({
  //     left: "0px"
  //   }, 200);
  //
  //   $('body').animate({
  //     left: "220px"
  //   }, 200);
  //   // Add css style
  //   $('.meny_btn').addClass('meny_btn-open');
  //
  //   // Change the onclick attribute to get ready to be closed next time it gets clicked
  //   $('.meny_btn').attr('onclick', 'closeSideMenu()');
  //
  //   // Change the glyphicon to the cross
  //   $('.meny-glyph').attr('class', 'glyphicon glyphicon-remove meny-glyph');
  //
  //   // visible = true;
  // };
  //
  // /* Then push them back */
  // closeSideMenu = function() {
  //   $('.meny').animate({
  //     left: "-220px"
  //   }, 200);
  //
  //   $('body').animate({
  //     left: "0px"
  //   }, 200);
  //   // Change back the glyphicon to the hamburger
  //   $('.meny-glyph').attr('class', 'glyphicon glyphicon-menu-hamburger meny-glyph');
  //
  //   // Change back the onclick attribute to get ready to be opened next time it gets clicked
  //   $('.meny_btn').attr('onclick', 'openSideMenu()');
  //
  //   // Remove the css style
  //   $('.meny_btn').removeClass('meny_btn-open');
  //   // visible = false;
  // };
  //
  // // Bootstrap tooltip activation
  // $(function () {
  //   $('[data-toggle="tooltip"]').tooltip()
  // });

  /* Then push them back */
  // $('.meny_btn-close').click(function() {
  //   $('.meny').animate({
  //     left: "-285px"
  //   }, 200);
  //
  //   $('body').animate({
  //     left: "0px"
  //   }, 200);
  //   $('.meny_btn').removeClass('meny_btn-open')
  // });
}); // end DOC ready
