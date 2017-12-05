import {AfterViewInit, Component, Input} from '@angular/core';

class Joke {
    // public setup: string;
    // public punchline: string;
    // public hide: boolean;
    //
    // constructor(setup: string, punchline: string) {
    //     this.setup = setup;
    //     this.punchline = punchline;
    //     this.hide = true;
    // }
    //
    // toggle() {
    //     this.hide = !this.hide;
    // }
}

@Component({
    selector: 'joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})
export class JokeComponent implements AfterViewInit {
    @Input('joke') dt: Joke;
    
    constructor() {
    }
    
    ngAfterViewInit() {
        console.log('...w', this.dt);
    }
}
