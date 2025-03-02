import { Component, OnInit } from '@angular/core';
import { AffichageService } from '../services/affichage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-affichage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.scss']
})
export class AffichageComponent implements OnInit {
  users: any = {};  // Data object (could be an array or object)
displayedColumns: any;
tables: any;
dataMap: any;

  constructor(private service: AffichageService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      console.log("Données reçues:", data);

      if (data && typeof data === "object") {
        this.tables = Object.keys(data); // Liste des tables trouvées
        this.dataMap = data; // Stocke les données de chaque table
      } else {
        this.tables = [];
        this.dataMap = {};
      }
    });
  }

  // Get columns dynamically based on the data structure
  getColumns(table: string): string[] {
    return this.dataMap[table] && this.dataMap[table].length > 0
      ? Object.keys(this.dataMap[table][0])
      : [];
  }
  // Get the values for a single user object dynamically
  getValues(user: any): any[] {
    return Object.values(user);
  }
}
