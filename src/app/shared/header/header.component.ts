import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (function ($) {
      "use strict";

      $('.navbar-toggler').on('click', function() {
        if (!$('#mainNav').hasClass('navbar-reduce')) {
          $('#mainNav').addClass('navbar-reduce');
        }
      })

      /*--/ Navbar Menu Reduce /--*/
      $(window).trigger('scroll');
      $(window).on('scroll', function () {
        var pixels = 50;
        var top = 1200;
        if ($(window).scrollTop() > pixels) {
          $('.navbar-expand-md').addClass('navbar-reduce');
          $('.navbar-expand-md').removeClass('navbar-trans');
        } else {
          if (!$('#navbarDefault').hasClass('show')) {
            $('.navbar-expand-md').removeClass('navbar-reduce');
          }
          $('.navbar-expand-md').addClass('navbar-trans');
        }
        if ($(window).scrollTop() > top) {
          $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
          $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
      });

    })(jQuery);
  }

}
