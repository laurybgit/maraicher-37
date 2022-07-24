import { Component, OnInit, SimpleChange } from "@angular/core";
import { Router } from "@angular/router";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { ContactService } from "../services/contact.service";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.scss"],
})
export class ContactPageComponent implements OnInit {
  contact: [] = [];
  constructor(private contactService: ContactService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    //@ts-ignore
    //this.contact = await this.contactService.getContact();
  }
}
