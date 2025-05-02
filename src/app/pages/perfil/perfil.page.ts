import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { heart, calendar, musicalNote, home, statsChart, documentText, notifications, personCircle } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class PerfilPage implements OnInit {
  constructor() {
    addIcons({ heart, calendar, musicalNote, home, statsChart, documentText, notifications,personCircle});
  }

  ngOnInit() {}
}
