import { Component  ,OnInit} from '@angular/core';
import { Kategori } from 'src/app/models/Kategori';
import { FbservisService } from 'src/app/services/fbservis.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss']
})
export class KategoriComponent implements OnInit  {

  mevcutKategoriler: Kategori[] =[];
  eskikategori: Kategori[] = [];
  frm: FormGroup = new FormGroup({
   kategoriadi: new FormControl(),
  kataciklama: new FormControl(),
    //marka: new FormControl(),
    //ucret: new FormControl(),
    yayin: new FormControl(),
  //frm: FormGroup = new FormGroup({
    baslik: new FormControl(),
    aciklama: new FormControl(),
  });
  constructor(
    public fbservis: FbservisService,
    public htoast: HotToastService
  ) { }

  ngOnInit() {
    this. KategoriListele();
    this.fbservis.aktifUye.subscribe(d => {
      console.log(d);
    });
  }
 
  KategoriListele() {
    this.fbservis.KategoriListele().subscribe(d => {
      this.mevcutKategoriler = d.filter(s => s.yayin == false || s.yayin == null);
      this.eskikategori  = d.filter(s => s.yayin == true);
    });
  }
  katKaydet() {
     console.log(this.frm.value);
    this.fbservis.KategoriEkle(this.frm.value)
      .pipe(
        this.htoast.observe({
          success: 'Kategori Eklendi',
          loading: 'Kategori Ekleniyor',
          error: ({ message }) => `${message}`
        })
      )
      .subscribe();
  }
  KategoriSil(kategori : Kategori) {
    this.fbservis.KategoriSil(kategori).then(() => {

    });
  }
  KategoriDuzenle(kategori : Kategori) {
    this.fbservis.KategoriDuzenle(kategori).then(() => {

    });
  }
 
}
