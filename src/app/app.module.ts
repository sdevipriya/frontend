import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthService } from './auth.service';
import { NavigationComponent } from './mediacomp/navigation/navigation.component';
import { SinglemediaComponent } from './mediacomp/singlemedia/singlemedia.component';
import { MultimediaComponent } from './mediacomp/multimedia/multimedia.component';
import { MymediaComponent } from './mediacomp/mymedia/mymedia.component';
import { MediaDetailComponent } from './mediacomp/media-detail/media-detail.component';
import { NewsfeedComponent } from './Account/newsfeed/newsfeed.component';
import { BlockedaccountsComponent } from './Account/blockedaccounts/blockedaccounts.component';
import { AccountupdateComponent } from './Account/accountupdate/accountupdate.component';
import { SearchComponent } from './Account/search/search.component';
import { ContentComponent } from './components/content/content.component';
import { MediapageComponent } from './mediacomp/mediapage/mediapage.component';
import { LogoutComponent } from './Account/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    NavigationComponent,
    SinglemediaComponent,
    MultimediaComponent,
    MymediaComponent,
    MediaDetailComponent,
    NewsfeedComponent,
    BlockedaccountsComponent,
    AccountupdateComponent,
    SearchComponent,
    ContentComponent,
    MediapageComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule

    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
