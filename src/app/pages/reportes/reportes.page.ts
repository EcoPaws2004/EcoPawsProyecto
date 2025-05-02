import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { heart, calendar, musicalNote, home, statsChart, documentText, notifications } from 'ionicons/icons';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class ReportesPage implements OnInit {

  reportesBasura: any[] = [];
  reportesCelo: any[] = [];
  reportesPerdido: any[] = [];
  constructor(private firestore: Firestore) {
    addIcons({ heart, calendar, musicalNote, home, statsChart, documentText, notifications,});
  }

  getReportesBasura(): Observable<any[]> {
    const basuraCollection = collection(this.firestore, 'reportes-basura');
    return collectionData(basuraCollection, { idField: 'id' });
  }

  getReportesCelo(): Observable<any[]> {
    const celoCollection = collection(this.firestore, 'reportes-celo');
    return collectionData(celoCollection, { idField: 'id' });
  }

  getReportesPerdido(): Observable<any[]> {
    const perdidoCollection = collection(this.firestore, 'reportes-perdido');
    return collectionData(perdidoCollection, { idField: 'id' });
  }

  ngOnInit() {
    // Obtener reportes de basura
    this.getReportesBasura().subscribe((data) => {
      this.reportesBasura = data;
    });
  
    // Obtener reportes de celo
    this.getReportesCelo().subscribe((data) => {
      this.reportesCelo = data;
    });
  
    // Obtener reportes de perdido
    this.getReportesPerdido().subscribe((data) => {
      this.reportesPerdido = data;
    });
  }
}
