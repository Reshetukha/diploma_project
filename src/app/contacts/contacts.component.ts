import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  currentJustify = 'justified';

  adress = [
    {city: 'Київ', tel: '+380-23 953-27-15', mail: ['email_example@google.com', 'kiev@mail.com.ua'], adress: ['пр-т Мира, д.5, кв.15', 'м. Киев, 12623.']},
    {city: 'Харькiв', tel: '+380-23 713-27-62', mail: ['somemail@randommail.org', 'ukraine@mail.com'], adress: ['Вулиця Петра, д.2, кв.6', 'м. Харькiв, 12623.']},
    {city: 'Одеса', tel: '+380-23 713-26-78', mail: ['random@mail.com', 'morerandom@mails.com'], adress: ['Порт Примiський, д.4, кв.7', 'м. Одеса, 12623.']}
  ];

  constructor() { }

  ngOnInit() {
  }

}
