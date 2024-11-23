import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [AutoCompleteModule, FormsModule, FloatLabelModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  countries: any[] = [
    { name: 'Switzerland', code: 'CH' },
    { name: 'Germany', code: 'DE' },
    { name: 'United States', code: 'US' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Canada', code: 'CA' },
    { name: 'Australia', code: 'AU' },
    { name: 'France', code: 'FR' },
    { name: 'Japan', code: 'JP' },
    { name: 'India', code: 'IN' },
    { name: 'China', code: 'CN' }
  ];

  // Formulário com país inicial
  countryFormGroup: FormGroup = new FormGroup({
    country: new FormControl({ name: 'Switzerland', code: 'CH' })
  });

  // Países filtrados
  filteredCountries: { name: string; code: string }[] = [];

  /**
   * Método para filtrar países com base no evento de autocomplete.
   */
  filterCountry(event: AutoCompleteCompleteEvent): void {
    const query = event.query.toLowerCase(); // Normaliza para evitar problemas de maiúsculas/minúsculas
    this.filteredCountries = this.countries.filter(country =>
      country.name.toLowerCase().startsWith(query)
    );
  }

}
