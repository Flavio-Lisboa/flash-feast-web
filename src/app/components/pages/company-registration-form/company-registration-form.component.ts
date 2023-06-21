import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/interfaces/Company';

@Component({
  selector: 'app-company-registration-form',
  templateUrl: './company-registration-form.component.html',
  styleUrls: ['./company-registration-form.component.css']
})
export class CompanyRegistrationFormComponent implements OnInit {

  companyRegistrationForm!: FormGroup;
  companyData!: Company;

  constructor(private companyService: CompanyService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.companyRegistrationForm = this.formBuilder.group({
      cnpj: [null],
      name: [null],
      email: [null],
      password: [null],
      phone: [null],
      logo: [null]
    })

    this.companyRegistrationForm.valueChanges.subscribe(formData => {
      this.companyData = formData;
    });
  }

  submit() {
    const formData = new FormData();
    formData.append('cnpj', this.companyData.cnpj);
    formData.append('name', this.companyData.name);
    formData.append('email', this.companyData.email);
    formData.append('password', this.companyData.password);
    formData.append('phone', this.companyData.phone);
    formData.append('logo', this.companyData.cnpj);
    this.companyService.createCompany(formData).subscribe();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.companyRegistrationForm.patchValue({
      logo: file
    });
  }
}
