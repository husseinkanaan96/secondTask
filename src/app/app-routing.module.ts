import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportViewerComponent } from './report-viewer/report-viewer.component';

const routes: Routes = [
  { path: 'report', component: ReportViewerComponent },
  { path: '', redirectTo: '/report', pathMatch: 'full' },
  { path: '**', redirectTo: '/report' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
