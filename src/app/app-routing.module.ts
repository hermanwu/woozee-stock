import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListPageComponent } from './stock/pages/stock-list-page/stock-list-page.component';
import { StockPropertiesPageComponent } from './stock/pages/stock-properties-page/stock-properties-page.component';

const routes: Routes = [
  {
    path: 'stocks/:stockId',
    component: StockPropertiesPageComponent,
  },
  { path: 'stocks', component: StockListPageComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'stocks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
