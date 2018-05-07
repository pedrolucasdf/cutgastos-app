import { Component } from '@angular/core';

import { ContextChatProvider } from './../../providers/context-chat/context-chat';


@Component({
  selector: 'text-chat',
  templateUrl: 'text-chat.html'
})
export class TextChatComponent {

  constructor(private contextChatProvider: ContextChatProvider) { }

  setUserMsg(msg): void {
    if (msg.length > 0) {
      this.contextChatProvider.setTextUsuario(msg, "text");
    }
  }

}
