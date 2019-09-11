import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  numero:number = 0;
  images:Images;


  constructor(private crud:CrudService)
  {
    this.getter()
  }

  ngOnInit() {
    console.log("teste");
    
    
  }

  getter()
  {
    this.crud.getPhotos().subscribe((data: Images) => {
      console.log(data);
      this.images = data;
    }, error => {

    })
  }

}
