import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';
import Typed from 'typed.js';
declare var jQuery: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor( public _service: InfoPageService ) { }

  ngOnInit(): void {

    (function ($) {
      /*--/ Star Typed /--*/
      if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text();
        var typed = new Typed('.text-slider', {
          strings: typed_strings.split(','),
          typeSpeed: 80,
          loop: true,
          backDelay: 1100,
          backSpeed: 30
        });
      }
    })(jQuery);

  }

}
