import { Component } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-viewer',
  templateUrl: './report-viewer.component.html',
  styleUrls: ['./report-viewer.component.css']
})
export class ReportViewerComponent {
  applicationNo: string = '';
  reportData: any[] = [];
  isLoading = false;
  message: string = '';

  constructor(private reportService: ReportService) { }

  async searchReport() {
    this.isLoading = true;
    this.reportData = await this.reportService.getReport(this.applicationNo);
    this.isLoading = false;

    if (this.reportData.length === 0) {
      this.message = 'No data found for the given ID.';
    } else {
      this.message = '';
    }
  }
}
