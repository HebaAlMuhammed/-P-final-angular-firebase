import { HotToastService } from '@ngneat/hot-toast';

import { FbservisService } from './../../services/fbservis.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Araba } from 'src/app/models/Araba'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  mevcutArabalar : Araba[] = [];
  eskiArabalar: Araba[] =[];
 
  frm: FormGroup = new FormGroup({
    aciklama: new FormControl(),
    marka: new FormControl(),
    ucret: new FormControl(),
    tamam: new FormControl()
  });
  constructor(
    public fbservis: FbservisService,
    public htoast: HotToastService
  ) { }

  ngOnInit() {
   
    this.ArabaListele();
    this.fbservis.aktifUye.subscribe(d => {
      console.log(d);
    });
  }
  ArabaListele() {
    this.fbservis.ArabaListele().subscribe(d => {
      this.mevcutArabalar = d.filter(s => s.tamam == false || s.tamam == null);
      this.eskiArabalar  = d.filter(s => s.tamam == true);
    });
  }
  Kaydet() {
    
    this.fbservis.ArabaEkle(this.frm.value)
      .pipe(
        this.htoast.observe({
          success: 'Araba Eklendi',
          loading: 'Araba Ekleniyor',
          error: ({ message }) => `${message}`
        })
      )
      .subscribe();
  }
  ArabaSil(araba: Araba) {
    this.fbservis.ArabaSil(araba).then(() => {

    });
  }
  TamamIptal(araba: Araba, d: boolean) {
    araba.tamam = d;
    this.fbservis.ArabaDuzenle(araba).then(() => {

    });
  }
  

 
}

