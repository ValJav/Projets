import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { CanvasJS } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-step-four-summary',
  templateUrl: './step-four-summary.component.html',
  styleUrls: ['./step-four-summary.component.scss']
})
export class StepFourSummaryComponent implements OnInit {

  stepForm!: FormGroup;
  chauffagePrincipale: string = '';
  piscine: string = '';
  @Input() formGroupName!: string;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.stepForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

    this.chauffagePrincipale = this.rootFormGroup.control.get('stepTwo')?.value || '';
    this.piscine = this.rootFormGroup.control.get('stepThree')?.value || '';

    this.renderChart();
  }

  renderChart(): void {
    const chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "Summary of Selections"
      },
      data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##0\"%\"",
        indexLabel: "{label} {y}",
        dataPoints: [
          { y: 50, label: `Chauffage Principale: ${this.chauffagePrincipale}` },
          { y: 50, label: `Piscine: ${this.piscine}` }
        ]
      }]
    });
    chart.render();
  }
}
