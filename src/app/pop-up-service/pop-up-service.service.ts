import { Injectable } from '@angular/core';
import { OriginalsComponent } from '../originals/originals.component';

@Injectable({
  providedIn: 'root'
})
export class PopUpServiceService {

  private models :OriginalsComponent[]=[];

  add(model:OriginalsComponent){
    if(model.id!=null && this.models.find(x=>x.id != model.id)){
      this.models.push(model);
    }
  }

  remove(model:OriginalsComponent){
    this.models= this.models.filter(x=>x===model);
  }


  // close(){
  //   const model = this.models.find(x=>x.isopen =true);
  //   model?.close();

  // }


  // open(id:String){
  //   if(id!==null){
  //     const model = this.models.find(x => x.id ===id);
  //     model?.open();
  //   }
    
  // }
}
