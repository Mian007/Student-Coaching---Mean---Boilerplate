import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';

import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';

import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { TeacherProfileComponent } from './components/teacher/teacher-profile/teacher-profile.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { StudentAuthGuard } from './guards/student-auth.guard'
import { TeacherAuthGuard } from './guards/teacher-auth.guard'
import { NotAuthGuard } from './guards/notAuth.guard';
import { HeroComponent } from './components/home/main/hero/hero.component';
import { OptionsComponent } from './components/home/main/options/options.component';
import { TeachersListComponent } from './components/home/main/teachers-list/teachers-list.component';
import { FutureComponent } from './components/home/main/future/future.component';
import { BottomSignUpComponent } from './components/home/main/bottom-sign-up/bottom-sign-up.component';
import { FooterComponent } from './components/footer/footer.component';

import { FilterPipe } from './filter.pipe';
import { ChooseComponent } from './components/user/user-profile/choose/choose.component';
import { TeacherProfileMainComponent } from './components/teacher/teacher-profile/teacher-profile-main/teacher-profile-main.component';
import { TeacherProfileScheduleComponent } from './components/teacher/teacher-profile/teacher-profile-main/teacher-profile-schedule/teacher-profile-schedule.component';
import { TeacherProfileInfoComponent } from './components/teacher/teacher-profile/teacher-profile-main/teacher-profile-info/teacher-profile-info.component';
import { TeacherReviewsComponent } from './components/teacher/teacher-profile/teacher-profile-main/teacher-reviews/teacher-reviews.component';
import { TeacherRatingsComponent } from './components/teacher/teacher-profile/teacher-profile-main/teacher-ratings/teacher-ratings.component';

import { CookieService } from 'ngx-cookie-service';
import { StarRatingModule } from 'angular-star-rating';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserProfileComponent,
    HeroComponent,
    OptionsComponent,
    TeachersListComponent,
    FutureComponent,
    FilterPipe,
    BottomSignUpComponent,
    FooterComponent,
    ChooseComponent,
    StudentProfileComponent,
    TeacherProfileComponent,
    TeacherProfileMainComponent,
    TeacherProfileScheduleComponent,
    TeacherProfileInfoComponent,
    TeacherReviewsComponent,
    TeacherRatingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FlashMessagesModule,
    StarRatingModule.forRoot()
  ],
  providers: [AuthService, ApiService, AuthGuard, StudentAuthGuard, TeacherAuthGuard, NotAuthGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
