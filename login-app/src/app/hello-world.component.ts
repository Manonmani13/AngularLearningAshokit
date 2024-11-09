import { Component } from "@angular/core";
@Component({
    selector:'app-hello-world',
    templateUrl:'./hello-word.component.html',
    styleUrl:'./hello-world.component.css'
})
class HelloWorldComponent{
    title="Hello world";
    color='Rose';
    getTitle()
    {
        return this.title;
    }

    getMax(first:number,second:number)
    {
        return Math.max(first,second);
    }
    clickCount=0;
    clickMe(){
        this.clickCount++;
        
    }
}