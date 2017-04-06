import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PostsPage } from '../pages/posts/posts';
import { DetailsPage } from '../pages/details/details';
import { DisastersPage } from '../pages/disasters/disasters';
import { DisasterPage } from '../pages/disaster/disaster';
import { CreatePostPage } from '../pages/create-post/create-post';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Auth } from '../providers/auth';
import { Posts } from '../providers/posts';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    PostsPage,
    DetailsPage,
    DisastersPage,
    DisasterPage,
    CreatePostPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    PostsPage,
    DetailsPage,
    DisastersPage,
    DisasterPage,
    CreatePostPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Auth,
    Posts,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
