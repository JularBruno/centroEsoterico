import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  testimonions = [
    {
      nombre: 'Juana Veracruz',
      texto: 'Soy Juana Veracruz, soy de Argentina quise dejar mi testimonio porque yo cansada ' +
      'de las estafas desconfie d la Lic. Marcia Varouna y hasta la llegue a insultar.' +
      'Sin embargo ella con paciencia y sabiduria me supo convencer de que ella estaba' +
      'realizando el trabajo solo que por un par de cuestiones graves el trabajo se ' +
      'complico bastante y tardo 20 dias en darme solucion pero realmente ella estuvo ' +
      'en contacto conmigo esos dias mañana, tarde y noche y me soluciono mi problema.' +
      'Mi novia me dejo por otra mujer y despues de esos 20 dias ella volvio y me ' +
      'aclaro cosas que la Licenciada Me habia dicho y no le crei, obviamente llore,' +
      'le super agradeci a la Lic. Marcia Varouna que me haya devuelto el amor de mi' +
      'vida y ella con amor me dijo que me entendia y hasta el dia de hoy seguimos en contacto.'
    },
    {
      nombre: 'Juana Veracruz2',
      texto: 'Soy Juana Veracruz, soy de Argentina quise dejar mi testimonio porque yo cansada ' +
      'de las estafas desconfie d la Lic. Marcia Varouna y hasta la llegue a insultar.' +
      'Sin embargo ella con paciencia y sabiduria me supo convencer de que ella estaba' +
      'realizando el trabajo solo que por un par de cuestiones graves el trabajo se ' +
      'complico bastante y tardo 20 dias en darme solucion pero realmente ella estuvo ' +
      'en contacto conmigo esos dias mañana, tarde y noche y me soluciono mi problema.' +
      'Mi novia me dejo por otra mujer y despues de esos 20 dias ella volvio y me ' +
      'aclaro cosas que la Licenciada Me habia dicho y no le crei, obviamente llore,' +
      'le super agradeci a la Lic. Marcia Varouna que me haya devuelto el amor de mi' +
      'vida y ella con amor me dijo que me entendia y hasta el dia de hoy seguimos en contacto.'
    }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
  }


}
