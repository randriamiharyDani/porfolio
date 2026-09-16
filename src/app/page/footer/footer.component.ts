import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  email = 'randriamiharysteev@gmail.com';
  phone = '+261 34 72 139 93';
  address = 'Lot II T5 CA Betongolo';
  year = new Date().getFullYear();

  form: FormGroup;
  isLoading = false;
  sent = false;
  error = false;

  constructor(
    public fb: FormBuilder,
    private translate: TranslateService
  ) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  getMessage(key: string): string {
    return this.translate.instant(key);
  }

  async send(): Promise<void> {
    if (this.form.invalid || this.isLoading) return;

    emailjs.init('oz3QNyrVTskUO-8qx');
    this.isLoading = true;
    this.sent = false;
    this.error = false;

    try {
      await emailjs.send('service_n5mi0xh', 'template_kt0yqkg', {
        from_name: this.form.value.nom,
        to_name: this.form.value.prenom,
        email: this.form.value.email,
        tel: this.form.value.tel,
        message: this.form.value.message,
      });
      this.sent = true;
      this.form.reset();
    } catch (err) {
      console.log("Erreur lors de l'envoi du message : ", err);
      this.error = true;
    } finally {
      this.isLoading = false;
      setTimeout(() => {
        this.sent = false;
        this.error = false;
      }, 6000);
    }
  }

  get phoneHref(): string {
    return 'tel:' + this.phone.replace(/\s/g, '');
  }

  get inputClass(): string {
    return 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none backdrop-blur transition-all focus:border-cyan-400/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/20';
  }
}