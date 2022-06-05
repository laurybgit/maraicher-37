import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact: [] = [];
  constructor(private contactService: ContactService) {}

  async ngOnInit(): Promise<void> {
    //@ts-ignore
    this.contact = await this.contactService.getContact();
    console.log(this.contact);
  }
}
