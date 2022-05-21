import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { MovileMenuComponent } from './components/movile-menu/movile-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { PodcastPlayerComponent } from './components/podcast-player/podcast-player.component';
import { BioComponent } from './components/bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EpisodeCardComponent,
    FooterComponent,
    HeroComponent,
    ContactMeComponent,
    MovileMenuComponent,
    SocialNetworkComponent,
    PodcastPlayerComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
