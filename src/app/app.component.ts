import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  list: String[] = ['hello', 'there'];
  input = '';

  onButtonClicked() {
    this.list.push('ss');
  }

  onAdd() {
    this.list.push(this.input);
  }
}
