import { Component, OnInit } from '@angular/core';
import { Uye } from 'src/app/models/Uye';
import { FbservisService } from 'src/app/services/fbservis.service';
import { HotToastService } from '@ngneat/hot-toast';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-uyeler',
  templateUrl: './uyeler.component.html',
  styleUrls: ['./uyeler.component.scss']
})
export class UyelerComponent implements OnInit {
  uyelerim : Uye[] = [];
  eskiuyeler : Uye[] = [];
  frm: FormGroup = new FormGroup({
    uid:  new FormControl(),
    email:  new FormControl(),
    displayName:  new FormControl(),
    dogurla: new FormControl()
  });
  constructor(
    public fbservis: FbservisService,
    public htoast: HotToastService
  ){ }
  ngOnInit() {
    this.UyeListele();
    this.fbservis.aktifUye.subscribe(d => {
      console.log(d);
    });
  }
  UyeListele(){
    this.fbservis.UyeListele().subscribe(d => {
      this.uyelerim = d.filter(s => s.dogurla== false || s.dogurla== null);
      this.eskiuyeler  = d.filter(s => s.dogurla == true);
    });}

  UyeKaydet(){
    this.fbservis.UyeEkle(this.frm.value)
      .pipe(
        this.htoast.observe({
          success: 'Uye Eklendi',
          loading: 'Uye Ekleniyor',
          error: ({ message }) => `${message}`
        })
      )
      .subscribe();
  }
  UyeSil(uye : Uye) {
    this.fbservis.UyeSil(uye).then(() => {

    });
  }


}