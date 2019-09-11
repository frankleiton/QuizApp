import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public questions = [
    { id: 1, title: "Titulo 01", content: 'Conteudo 01', options: [{ id: 0, name: 'Opção0' }, { id: 1, name: 'Opção1' }], correctOption: 1 },
    { id: 2, title: "Titulo 02", content: 'Conteudo 02', options: [{ id: 0, name: 'Opção0' }, { id: 1, name: 'Opção1' }], correctOption: 0 },
    { id: 3, title: "Titulo 03", content: 'Conteudo 03', options: [{ id: 0, name: 'Opção0' }, { id: 1, name: 'Opção1' }], correctOption: 1 },
    { id: 4, title: "Titulo 04", content: 'Conteudo 04', options: [{ id: 0, name: 'Opção0' }, { id: 1, name: 'Opção1' }], correctOption: 0 },
  ]

  atualQuestion: number
  user_resposta: string
  user_resposta_json: any = []

  constructor(private _router: Router) 
  {
    this.atualQuestion = 0
    this.user_resposta = ""
  }

  ngOnInit() 
  {

  }

  nextQuestion(prev_resposta) 
  {
    if (this.questions.length > this.atualQuestion) 
    {
      this.user_resposta_json.push({ 'questao': this.questions[this.atualQuestion], 'resposta': prev_resposta })
      this.user_resposta = ""
      this.atualQuestion += 1
    }
  }

  endQuestion(prev_resposta) 
  {
    this.user_resposta_json.push({ 'questao': this.questions[this.atualQuestion], 'resposta': prev_resposta })
    let data = {
      result: this.user_resposta_json
    }
    this._router.navigate(['/end'], {state: data}) 
  }

  backQuestion()
  {
    this.user_resposta_json.pop()
    this.atualQuestion--
    this.user_resposta = ""
    console.log(this.user_resposta_json)
    
  }

}
