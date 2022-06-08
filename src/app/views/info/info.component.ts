import { Component, OnInit } from '@angular/core';
import { InfoApiService } from 'src/app/services/info-api.service';

@Component({
  selector: 'cake-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public topPoolsTokenParent!: any[];
  constructor(private infoApi: InfoApiService) { }

  ngOnInit(): void {

    this.infoApi.getTopPoolsApi().subscribe(

      (response: any) => console.log(this.topPoolsTokenParent = [...Object.values(response.data)]),


    )


  }

}