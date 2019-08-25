import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'logo',
    templateUrl: 'logo.component.html',
    styleUrls: ['logo.component.scss']
})

export class LogoComponent implements OnInit{
    @Input() sizeH1:string
    @Input() span:string
    @Input() img:string
    
    constructor(){

    }
    ngOnInit(){

    }
}