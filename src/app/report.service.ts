import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = 'http://localhost:3000/api/report';

  constructor() { }

  async getReport(applicationNo: string): Promise<any[]> {
    try {
      const response = await fetch(`${this.apiUrl}/${applicationNo}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching report data:', error);
      return [];
    }
  }
}
