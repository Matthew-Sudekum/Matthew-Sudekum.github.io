import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'videoSanitizer'
})
export class VideoUrlPipe implements PipeTransform {

  constructor(private sanitizer?: DomSanitizer) { }

  transform(value: string, ...args: unknown[]) {
    if(typeof this.sanitizer !== 'undefined') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
    else {
      return console.log('DomSanitizer parameter not defined');
    }
  }

}
