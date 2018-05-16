import { NgModule } from '@angular/core';
import { BodyTextChatComponent } from './body-text-chat/body-text-chat';
import { TextChatComponent } from './text-chat/text-chat';
import { TestComponent } from './test/test';

@NgModule({
	declarations: [BodyTextChatComponent,
    TextChatComponent,
    TestComponent],
	imports: [],
	exports: [BodyTextChatComponent,
    TextChatComponent,
    TestComponent]
})
export class ComponentsModule {}
