import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  _message: string;

  constructor() {
    this._message = "Common service";
  }

  get message(): string {
    return this._message;
  }

  set message(message:string) {
    this._message = message;
  }

}
