import { Component, EventEmitter } from '@angular/core';

import { ContextChatProvider } from './../../providers/context-chat/context-chat';

@Component({
  selector: 'body-text-chat',
  templateUrl: 'body-text-chat.html'
})
export class BodyTextChatComponent {

  mensagens = [];

  constructor(private contextChatProvider: ContextChatProvider) { }

  ngOnInit() {
    this.contextChatProvider.arrayMensagensEmitter
      .subscribe(res => this.setArrayMsg(res));
  }

  

  setArrayMsg(msgArray): void {
   
    this.mensagens = msgArray;
    (async () => {
      const delay = time => new Promise(res => setTimeout(() => res(), time));
      await delay(10);
      this.updateScroll();
    })();
  }

  updateScroll(): void {
    var element = document.getElementById("bodyChat");
    element.scrollTop = element.scrollHeight;
  }

}
