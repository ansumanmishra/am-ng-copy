import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'am-ng-copy',
  template: `
    <span (click)="copyText()">Copy</span>
    <div #content>
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class AmNgCopyComponent {

  @ViewChild('content', {read: ElementRef, static: false}) content: ElementRef;

  copyText() {
    const copyText = this.content.nativeElement.textContent;
    const textArea = document.createElement('textarea');
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    textArea.remove();
  }
}
