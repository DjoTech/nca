import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent implements OnInit{

  email = 'sales@nunca.co.id';

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
      name: new FormControl(null, Validators.required),
      company_name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      phone_number: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required, Validators.max(100)]),
    });
  }

  generateMessage(): string {
    const name = this.form.get('name').value;
    const email = this.form.get('email').value;
    const companyName = this.form.get('company_name').value;
    const phoneNumber = this.form.get("phone_number").value;
    const message = this.form.get('message').value;

    return `Yth. PT Nuansa Chatur Anugerah,

        Dengan hormat,

        Perkenalkan, nama saya ${name} dari ${companyName}. Setelah melihat informasi pada situs web PT Nuansa Chatur Anugerah, saya tertarik dengan produk yang tercantum dalam katalog yang tersedia. Saya ingin meminta penjelasan lebih lanjut terkait:

        ${message}

        Saya berharap Bapak/Ibu berkenan memberikan informasi yang saya butuhkan. Apabila diperlukan, Bapak/Ibu dapat menghubungi saya melalui email di ${email} atau nomor telepon ${phoneNumber}.

        Atas perhatian dan bantuan Bapak/Ibu, saya ucapkan terima kasih. Saya menunggu balasan dari Bapak/Ibu.

        Hormat saya,
        ${name}
  `;

  }

  onSubmit() {
    const fullName = this.form.get('name').value;
    const subject = this.form.get('subject').value;
    const mailtoLink = `mailto:${this.email}?subject=${encodeURIComponent("Permintaan Informasi Produk " + subject)}&body=${encodeURIComponent(this.generateMessage())}`;
    window.open(mailtoLink, '_blank');
  }


}
