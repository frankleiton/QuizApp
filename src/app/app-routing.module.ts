import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component'
import { LoginComponent } from './components/login/login.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { EndComponent } from './components/end/end.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  {path: 'component', component: DataBindingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'end', component: EndComponent},
  {path: 'quiz', component: QuizComponent},
  {path: '**', component: NotfoundComponent},
  {path: '',   redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
