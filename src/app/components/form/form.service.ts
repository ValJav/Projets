import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private activeStepSubject = new BehaviorSubject<number>(1);
  activeStep$ = this.activeStepSubject.asObservable();


  multiStepForm: FormGroup = this.fb.group({
    personalDetails: this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],

    }),
    chauffagePrincipale: this.fb.group({
      chauffagePrincipale: ['Electrique', [Validators.required]],
    }),
    piscine: this.fb.group({
      piscine: ['Pas de piscine', [Validators.required]],
    })
  })

  get stepForm(): FormGroup {
    return this.multiStepForm;
  }

  constructor(private fb: FormBuilder) { }

  goToNextStep(number: number) {
    this.activeStepSubject.next(number + 1);
  }

  goBackToPreviousStep(number: number) {
    this.activeStepSubject.next(number - 1);
  }
  submit() {
    //TO-DO => validate form
    this.goToNextStep(4);
    setTimeout(() => {
      this.activeStepSubject.next(1);
    }, 8000);

  }


}
