import { Component, OnInit } from '@angular/core';
import { FavoritesManagerService } from './favorites-manager.service';
import { IManagedObject } from '@c8y/client';
import { Column, Pagination } from '@c8y/ngx-components';
import {
  AlarmsDeviceGridColumn,
  NameDeviceGridColumn,
  SystemIdDeviceGridColumn,
} from '@c8y/ngx-components/device-grid';
import { StatusExtendedDeviceGridColumn } from './columns/status-extended.device-grid-column';

@Component({
  selector: 'c8y-favorites-manager',
  templateUrl: 'favorites-manager.component.html',
})
export class FavoritesManagerComponent implements OnInit {
  readonly PAGINATION: Pagination = {
    pageSize: 50,
    currentPage: 1,
  };

  readonly COLUMNS: Column[] = [
    new StatusExtendedDeviceGridColumn(),
    new NameDeviceGridColumn(),
    new SystemIdDeviceGridColumn(),
    new AlarmsDeviceGridColumn(),
  ];

  managedObjects: IManagedObject[] = [];

  constructor(protected favoritesManagerService: FavoritesManagerService) {}

  async ngOnInit() {
    this.favoritesManagerService.initFavorites();
  }
}
