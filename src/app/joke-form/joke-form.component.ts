import {Component, EventEmitter, Output} from '@angular/core';

export class Joke {
    public setup: string;
    public punchline: string;
    public hide: boolean;
    
    constructor(setup: string, punchline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }
    
    toggle() {
        this.hide = !this.hide;
    }
}

@Component({
    selector: 'joke-form',
    templateUrl: './joke-form.component.html',
    styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent {
    
    @Output() jokeCreated = new EventEmitter<Joke>();
    
    constructor() {
    }
    
    createJoke(setup: string, punchline: string) {
        this.jokeCreated.emit(new Joke(setup, punchline));
    }
    
}
