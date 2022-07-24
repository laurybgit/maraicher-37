import { Component, OnInit } from "@angular/core";
import { SellingPointsService } from "src/app/services/selling-points.service";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-selling-points",
  templateUrl: "./selling-points.component.html",
  styleUrls: ["./selling-points.component.scss"],
})
export class SellingPointsComponent implements OnInit {
  SELLING_POINTS_IMAGES_FOLDER = "http://localhost:8000/uploads/images/";
  sellingPoints: any;
  imagePath: string = "";
  faCamera = faCamera;

  constructor(private sellingPointsService: SellingPointsService) {}

  async ngOnInit(): Promise<void> {
    //@ts-ignore
    //this.sellingPoints = await this.sellingPointsService.getSellingPoints();
    //console.log(this.sellingPoints);
  }
}
