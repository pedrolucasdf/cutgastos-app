import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class SaveDataProvider {

  userEmitter = new EventEmitter<string>();
  passwordEmitter = new EventEmitter<string>();
  workspaceIdEmitter = new EventEmitter<string>();
  tokenEmitter = new EventEmitter<string>();
  targetEmitter = new EventEmitter<string>();

  constructor(private storage: Storage) { }

  saveLocaData(campo: string, valor: string): any {
    this.storage.set(campo, valor)

    switch (campo) {
      case "username": {
        this.userEmitter.emit(valor);
        break;
      }
      case "password": {
        this.passwordEmitter.emit(valor);
        break;
      }
      case "workspaceId": {
        this.workspaceIdEmitter.emit(valor);
        break;
      }
      case "token": {
        this.tokenEmitter.emit(valor);
        break;
      }
      case "radio": {
        if (valor == "generic") {
          this.targetEmitter.emit(valor);
        } else {
          this.targetEmitter.emit(valor);
        }
        break;
      }
    }
  }

  recoverLocalData(campo: string): any {
    return this.storage.get(campo);
  }
}
