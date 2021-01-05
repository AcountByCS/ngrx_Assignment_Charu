import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer"><div class="container">
        <div class="row">
        <div class="col centerText">
            &copy; Footer
            <br/>
            Work By Charu Sachdeva
        </div>
    </div></div>
  `,
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
}
