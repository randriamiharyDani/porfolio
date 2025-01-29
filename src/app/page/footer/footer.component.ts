import { Component, OnInit } from '@angular/core';
import { FormGroup  , FormBuilder ,ReactiveFormsModule, RequiredValidator, Validators} from '@angular/forms';
import emailjs from '@emailjs/browser';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true, // Standalone Component
  imports: [CommonModule, ReactiveFormsModule ,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  email = 'randriamiharysteev@gmail.com' ;
  phone = '+261 34 72 139 93';
  address = 'Lot II T5 CA Betongolo';

  form : FormGroup ;

 constructor(public fb: FormBuilder) {
 this.form  = this.fb.group({
    nom :   ['' , Validators.required],
    prenom :['' , Validators.required],
    email : ['' , [Validators.required, Validators.email]],
    tel :   ['' , Validators.required] ,
    message : ['' ,[Validators.required, Validators.minLength(5)]],
  });
 }


  async send(){

    emailjs.init('oz3QNyrVTskUO-8qx') ;
    try {
      let response = await emailjs.send("service_n5mi0xh","template_kt0yqkg",{
    from_name: this.form.value.nom,
    to_name: this.form.value.prenom,
    email : this.form.value.email,
    tel: this.form.value.tel,
    message: this.form.value.message
    });
    alert(" Votre message a été envoyé avec succès ! Nous vous répondrons dès que possible.") ;
    this.form.reset();

    }
    catch(err) {
      console.log('Erreur lors de l\'envoi du message : ', err);
    }
  }
ngOnInit(): void {}
  onSubmit(){
      if (this.form.valid) {
      console.log('Form Data:', this.form.value);
    } else {
      console.log('Formulaire invalide !');
    }
  }
}
