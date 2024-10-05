import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-investment-form',
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.css'],
})
export class InvestmentFormComponent implements OnInit {
  investmentForm!: FormGroup;
  formTitle: string = 'Investment Form';
  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      purchasePrice: [0, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(): void {
    if (this.investmentForm.valid) {
      console.log(this.investmentForm.value);
    }
  }
}
