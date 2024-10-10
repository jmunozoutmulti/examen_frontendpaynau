// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, HttpClientModule, CommonModule]
})
export class AppComponent implements OnInit 
{
  title = 'Hello, Examenpaynau';
  persons: any[] = [];
  newPerson: any = { id: null, first_name: '', last_name: '', email: '', phone: '', address: '' }; 
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.loadPersons();
  }

  loadPersons() {
    this.personService.getPersons().subscribe({
      next: data => {
        this.persons = data;
        this.successMessage = 'Personas cargadas correctamente';
        this.errorMessage = null;
      },
      error: err => {
        this.errorMessage = 'Error al cargar las personas: ' + err.message;
        this.successMessage = null;
      }
    });
  }

  addPerson() {
    this.personService.addPerson(this.newPerson).subscribe({
      next: response => {
        this.successMessage = response.message; // Asumiendo que la respuesta tiene un campo 'message'
        this.loadPersons();
        this.resetForm();
      },
      error: err => {
        this.errorMessage = 'Error al agregar la persona: ' + err.message;
        this.successMessage = null;
      }
    });
  }

  editPerson(person: any) {
    this.newPerson = { ...person }; 
  }

  updatePerson(person: any) {
    this.personService.updatePerson(person.id, person).subscribe({
      next: response => {
        this.successMessage = response.message; // Asumiendo que la respuesta tiene un campo 'message'
        this.loadPersons();
        this.resetForm();
      },
      error: err => {
        this.errorMessage = 'Error al actualizar la persona: ' + err.message;
        this.successMessage = null;
      }
    });
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id).subscribe({
      next: response => {
        this.successMessage = response.message; // Asumiendo que la respuesta tiene un campo 'message'
        this.loadPersons();
      },
      error: err => {
        this.errorMessage = 'Error al eliminar la persona: ' + err.message;
        this.successMessage = null;
      }
    });
  }

  resetForm() {
    this.newPerson = { id: null, first_name: '', last_name: '', email: '', phone: '', address: '' };
  }
}
