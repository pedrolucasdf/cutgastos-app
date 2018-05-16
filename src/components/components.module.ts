import { NgModule } from '@angular/core';
import { BodyTextChatComponent } from './body-text-chat/body-text-chat';
import { TextChatComponent } from './text-chat/text-chat';

@NgModule({
	declarations: [BodyTextChatComponent,
    TextChatComponent],
	imports: [],
	exports: [BodyTextChatComponent,
    TextChatComponent]
})
export class ComponentsModule {}
