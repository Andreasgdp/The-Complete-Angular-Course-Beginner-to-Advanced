import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'zippy',
    templateUrl: './zippy.component.html',
    styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
    @Input('title') title: string;
    isExpanded: boolean;

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
