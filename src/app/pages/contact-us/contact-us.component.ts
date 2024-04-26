import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit{

  email = 'management@mawaka.vc';

  form: any = null;

  constructor(
    private ref: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      full_name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone_number: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });

  }

  onSubmit() {
    const subject = this.form.get('subject').value;
    const message = this.form.get('message').value;
    const phoneNumber = this.form.get("phone_number").value;
    const mailtoLink = `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}&cc=${encodeURIComponent(phoneNumber)}`;
    window.open(mailtoLink, '_blank');
  }

}
