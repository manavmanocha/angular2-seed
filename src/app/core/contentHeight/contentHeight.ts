import {Directive,ElementRef,OnInit} from '@angular/core';
declare var jQuery: any;

@Directive({
    selector: '[content-height]'
})

export class ContentHeight implements OnInit {
    $el: any;

    constructor(el: ElementRef) {
        this.$el = jQuery(el.nativeElement); 
    }
    adjustContentHeight(): void {
        var content =  this.$el;
        var contentHeight = window.innerHeight - jQuery('#header').outerHeight();
        content.css('min-height', contentHeight);
    }
    ngOnInit(): void {
        jQuery(window).on('resize', this.adjustContentHeight.bind(this));
        this.adjustContentHeight();
    }

}
