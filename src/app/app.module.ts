import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ArticleProvider } from './article-provider';

export function articleProviderFactory(provider: ArticleProvider) {
  return () => provider.seedArticle();
}

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: articleProviderFactory,
      deps: [ArticleProvider],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
