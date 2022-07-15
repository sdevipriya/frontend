import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SinglemediaComponent } from './mediacomp/singlemedia/singlemedia.component';
import { MultimediaComponent } from './mediacomp/multimedia/multimedia.component';
import { MymediaComponent } from './mediacomp/mymedia/mymedia.component';
import { MediaDetailComponent } from './mediacomp/media-detail/media-detail.component';
import { NewsfeedComponent } from './Account/newsfeed/newsfeed.component';
import { BlockedaccountsComponent } from './Account/blockedaccounts/blockedaccounts.component';
import { AccountupdateComponent } from './Account/accountupdate/accountupdate.component';
import { SearchComponent } from './Account/search/search.component';
import { MediapageComponent } from './mediacomp/mediapage/mediapage.component';
import { ContentComponent} from './components/content/content.component'

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path:'login-component', component:LoginComponent},
  {path:'register-component', component:RegisterComponent},
  {path:'single-media', component:SinglemediaComponent},
  {path:'multi-media', component:MultimediaComponent},
  {path:'my-media', component:MymediaComponent},
  {path:'media-detail/:id', component:MediaDetailComponent},
  {path:'news-feed', component:NewsfeedComponent},
  {path:'blocked-accounts', component:BlockedaccountsComponent},
  {path:'account-update', component:AccountupdateComponent},
  {path:'search', component:SearchComponent},
  {path:'media-page', component:MediapageComponent},
  {path:'login-page', component:ContentComponent}
 // {path:'app-content', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
