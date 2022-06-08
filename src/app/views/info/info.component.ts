import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { InfoApiService } from 'src/app/services/info-api.service';

@Component({
  selector: 'cake-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public topPoolsTokenParent!: any[];

  public transactionsParent!: any[];

  constructor(private infoApi: InfoApiService, private api: ApiService) { }

  ngOnInit(): void {
    this.infoApi.getTopPoolsApi().subscribe(
      (response: any) => console.log(this.topPoolsTokenParent = [...Object.values(response.data)])
    )

    this.api.getTransactionsApi().subscribe(
      (response: any) => { this.transactionsParent = [...response] }
    )
  }
}