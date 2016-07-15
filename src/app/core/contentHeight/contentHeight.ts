import {Directive,ElementRef,OnInit} from '@angular/core';
declare var jQuery: any;

@Directive({
    selector: '[content-height]'
})

export class ContentHeight implements OnInit {
    $el: any;

    constructor(el: ElementRef) {
        this.$el = jQuery(el.nativeElement);
        this.adjustContentHeight(this.$el);
    }

    adjustContentHeight(contentId): void {
        var contentCourse = contentId;
        if (contentId == 'content-course') {
            var contentHeight = window.innerHeight - jQuery('#header').outerHeight() - jQuery('.page-footer').outerHeight();
            contentCourse.innerHeight(contentHeight);

        } else if (contentId == 'right-panel') {
            var contentHeight = window.innerHeight;
            contentCourse.innerHeight(contentHeight);
        } else {
            var contentHeight = window.innerHeight - jQuery('#header').outerHeight();
            contentCourse.css('min-height', contentHeight);
            if (contentId == 'login-right-panel') {
                jQuery('#login-left-panel').outerHeight(contentCourse.outerHeight());
            }
        }

    }
    ngOnInit(): void {

    }

}
