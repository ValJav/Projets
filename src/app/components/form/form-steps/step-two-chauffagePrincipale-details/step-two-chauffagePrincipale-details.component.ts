import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { chauffagePrincipaleOptions } from './chauffagePrincipaleDetails.model';

@Component({
  selector: 'app-step-two-chauffagePrincipale-details',
  templateUrl: './step-two-chauffagePrincipale-details.component.html',
  styleUrls: ['./step-two-chauffagePrincipale-details.component.scss']
})

export class StepTwoChauffagePrincipaleComponent implements OnInit {

  stepForm!: FormGroup;
  chauffagePrincipaleType: string = 'Electrique' || 'PAC air/air' || 'PAC air/eau' || 'Gaz, Fioul, Bois';
  chauffagePrincipaleOptions = chauffagePrincipaleOptions;
  @Input() formGroupName!: string;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.stepForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
    this.chauffagePrincipaleType = this.chauffagePrincipaleType || 'Electrique';
  }

  public onChauffagePrincipaleChange(chauffagePrincipale: string) {
    this.chauffagePrincipaleType = chauffagePrincipale;
  }
}
