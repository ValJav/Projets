import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { piscineOptions } from './piscineDetails.model';

@Component({
  selector: 'app-step-three-piscine',
  templateUrl: './step-three-piscine.component.html',
  styleUrls: ['./step-three-piscine.component.scss']
})

export class StepThreePiscineComponent implements OnInit {

  stepForm!: FormGroup;
  piscineType: string = 'Pas de piscine' || 'Hors sol' || 'Entérrée';
  piscineOptions = piscineOptions;
  @Input() formGroupName!: string;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.stepForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
    this.piscineType = this.piscineType || 'Pas de piscine';
  }

  public onPiscineChange(piscine: string) {
    this.piscineType = piscine;
  }
}
