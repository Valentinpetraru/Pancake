import { Component, OnInit } from '@angular/core';
import { InfoApiService } from 'src/app/services/info-api.service';

@Component({
  selector: 'cake-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.css']
})
export class PoolsComponent implements OnInit {
  public topPoolsTokenParent!: any[];
  constructor(private infoApi: InfoApiService) { }

  public titlePoolsTable: string = 'All Pools';

  ngOnInit(): void {
    this.infoApi.getTopPoolsApi().subscribe(
      (response: any) => this.topPoolsTokenParent = [...Object.values(response.data)]
    )
  }

}
