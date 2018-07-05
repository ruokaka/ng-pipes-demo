import { PipeTransform, Pipe } from '@angular/core';
// don't forget to add this pipe to the app-module

@Pipe({
    name: 'shorten'
})
// allow the user to enter how many characters needs to be limited by passing the variable
export class ShortenPipe implements PipeTransform {
    // special method to be a pipe
    transform(value: any, limit: number) {
        if (value.length > limit) {
            return value.substr(0, limit) + '...';
        }
        return value;
    }
}
