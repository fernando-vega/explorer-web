import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})

export class ContactoComponent implements OnInit {

  data = {
    name: 'Contacto',
    bio: 'Contacto',
    image: 'avatar.png'
  };
  show: boolean;
  showMessage: boolean;

  namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(
    private title: Title,
    private meta: Meta,
    private formBuilder: FormBuilder 
  ) {}

  ngOnInit() {
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'contacto' },
      { name: 'og:url', content: '/#/contacto' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image }
    ]);
    this.show = false;
    this.showMessage = false;
  }

  form: FormGroup = this.formBuilder.group({
    name   : ['', [Validators.required, Validators.pattern(this.namePattern)]],
    phone  : ['', [Validators.required, Validators.minLength(7)]],
    email  : ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    msn    : ['', [Validators.required, Validators.minLength(20)]]
  })

  public save($event) {
    this.show = true;
    setTimeout(() => {
      this.show = false;
      this.form.reset();
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 4000)
    }, 1000)
  }
  
}
