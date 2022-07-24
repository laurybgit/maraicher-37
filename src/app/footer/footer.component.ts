import { Component, OnInit } from "@angular/core";
import { ContactService } from "../services/contact.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  contact: [] = [];
  constructor(private contactService: ContactService) {}

  async ngOnInit(): Promise<void> {
    //@ts-ignore
    //this.contact = await this.contactService.getContact();
    //console.log(this.contact);
  }
}
